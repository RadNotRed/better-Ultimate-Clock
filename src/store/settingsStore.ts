import { create } from "zustand";
import { DeskThing } from "@deskthing/client";
import { DEVICE_CLIENT, TimePayload } from "@deskthing/types";
import { ClockSettingIDs, ClockSettings, CondensedClockSettings } from "@shared/index";
import { getCondensedSettings } from "@src/utils/settingUtils";
import { getZodiacSign, ZodiacSign } from "@src/utils/constellationUtils";

export type Page = "chat" | "browsing" | "call" | "dashboard";

export type Dimensions = {
  width: number;
  height: number;
  panel: {
    width: number;
    height: number;
  };
  controls: {
    width: number;
    height: number;
  };
};

export type TimeData = {
  hours: string;
  minutes: string;
  amPm: string;
  formatted: string;
};

export type DateData = {
  formatted: string;
  dayName: string;
};

type UIStore = {
  currentPage: Page;
  isLoading: boolean;
  currentTime: string;
  currentDate: string;
  timeData: TimeData;
  dateData: DateData;
  currentConstellation: ZodiacSign | null;
  fontUrl: string | null;
  timeOffsetMs: number;
  timeOffsetTargetMs: number;
  timerId: number | null;

  setCurrentPage: (page: Page) => void;

  initialized: boolean;
  init: () => Promise<void>;

  updateFontUrl: (fontUrl: string | null) => Promise<void>;

  settings: CondensedClockSettings | null;
  setSettings: (settings: ClockSettings | undefined) => void;
};

const getOrdinalSuffix = (day: number): string => {
  const mod10 = day % 10;
  const mod100 = day % 100;
  if (mod10 === 1 && mod100 !== 11) return "st";
  if (mod10 === 2 && mod100 !== 12) return "nd";
  if (mod10 === 3 && mod100 !== 13) return "rd";
  return "th";
};

const formatDate = (
  date: Date,
  format: string,
  monthFormat: string = 'full',
  separator: string = '-'
): string => {
  const dayNum = date.getDate();
  const day = dayNum.toString().padStart(2, "0");
  const suffix = getOrdinalSuffix(dayNum);
  const monthNum = date.getMonth() + 1;
  const month = monthNum.toString().padStart(2, "0");
  const year = date.getFullYear();
  const monthNameShort = date.toLocaleString("en-US", { month: "short" });
  const monthNameLong = date.toLocaleString("en-US", { month: "long" });

  // Determine which month representation to use based on monthFormat setting
  const getMonthDisplay = (): string => {
    switch (monthFormat) {
      case 'numeric':
        return month;
      case 'abbreviated':
        return monthNameShort;
      case 'full':
      default:
        return monthNameLong;
    }
  };

  const monthDisplay = getMonthDisplay();
  const sep = separator;

  switch (format) {
    case "DD/MM/YYYY":
      return `${day}${sep}${month}${sep}${year}`;
    case "YYYY-MM-DD":
      return `${year}${sep}${month}${sep}${day}`;
    case "YYYY.MM.DD":
      return `${year}${sep}${month}${sep}${day}`;
    case "MMM DD YYYY":
      return `${monthNameShort} ${dayNum} ${year}`;
    case "MMMM DD YYYY":
      return `${monthDisplay} ${dayNum} ${year}`;
    case "MMMM DDth YYYY":
      return `${monthDisplay} ${dayNum}${suffix} ${year}`;
    case "DD MMMM YYYY":
      return `${dayNum} ${monthDisplay} ${year}`;
    case "MM/DD":
      return `${month}${sep}${day}`;
    case "DD/MM":
      return `${day}${sep}${month}`;
    case "MM/DD/YYYY":
    default:
      return `${month}${sep}${day}${sep}${year}`;
  }
};

const getDayName = (date: Date): string => {
  return date.toLocaleString("en-US", { weekday: "long" });
};

interface TimeFormatOptions {
  military: boolean;
  divider: string;
  showAmPm: string; // 'normal', 'small', 'off'
  timeLayout: string; // 'inline', 'stacked'
  leadingZeroHours: boolean; // Add leading zero to hours in 12-hour mode
}

const buildTimeData = (date: Date, options: TimeFormatOptions): TimeData => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let hoursStr: string;
  if (options.military) {
    hoursStr = hours.toString().padStart(2, "0");
  } else {
    const hour12 = hours % 12 || 12;
    hoursStr = options.leadingZeroHours 
      ? hour12.toString().padStart(2, "0")
      : hour12.toString();
  }
  const minutesStr = minutes.toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";

  let formatted: string;
  if (options.military) {
    formatted = `${hoursStr}${options.divider}${minutesStr}`;
  } else {
    const amPmDisplay =
      options.showAmPm === 'off' ? '' :
      options.showAmPm === 'small' ? '' : // Will be handled in component
      ` ${amPm}`;
    formatted = `${hoursStr}${options.divider}${minutesStr}${amPmDisplay}`;
  }

  return {
    hours: hoursStr,
    minutes: minutesStr,
    amPm: options.military ? '' : amPm,
    formatted,
  };
};

const buildTimeString = (date: Date, military: boolean, divider: string): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (military) {
    return `${hours.toString().padStart(2, "0")}${divider}${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  const hour12 = hours % 12 || 12;
  const amPm = hours >= 12 ? "PM" : "AM";
  return `${hour12}${divider}${minutes.toString().padStart(2, "0")} ${amPm}`;
};

let currentFontFace: FontFace | null = null;

const defaultTimeData: TimeData = {
  hours: '12',
  minutes: '00',
  amPm: 'AM',
  formatted: '12:00 AM',
};

const defaultDateData: DateData = {
  formatted: '',
  dayName: '',
};

export const useSettingStore = create<UIStore>((set, get) => ({
  currentPage: "dashboard",
  isLoading: true,
  currentTime: "",
  currentDate: "",
  timeData: defaultTimeData,
  dateData: defaultDateData,
  currentConstellation: null,
  fontUrl: null,
  timeOffsetMs: 0,
  timeOffsetTargetMs: 0,
  timerId: null,
  settings: null,
  initialized: false,

  setCurrentPage: (page: Page) => set({ currentPage: page }),

  init: async () => {
    if (get().initialized) return;

    DeskThing.on(DEVICE_CLIENT.SETTINGS, (data) => {
      if (!data?.payload) return;
      get().setSettings(data.payload as ClockSettings);
    });

    DeskThing.on(DEVICE_CLIENT.TIME, (event) => {
      if (!event?.payload) return;

      const settings = get().settings;
      const military = settings?.[ClockSettingIDs.MILITARY_TIME] ?? false;
      const divider = settings?.[ClockSettingIDs.CLOCK_DIVIDER] || ":";
      const showAmPm = settings?.[ClockSettingIDs.SHOW_AMPM] || "normal";
      const timeLayout = settings?.[ClockSettingIDs.TIME_LAYOUT] || "inline";
      const leadingZeroHours = settings?.[ClockSettingIDs.LEADING_ZERO_HOURS] ?? false;
      const dateFormat = settings?.[ClockSettingIDs.DATE_FORMAT] || "MMMM DD YYYY";
      const monthFormat = settings?.[ClockSettingIDs.MONTH_FORMAT] || "full";
      const dateSeparator = settings?.[ClockSettingIDs.DATE_SEPARATOR] || "-";

      if (typeof event.payload === "string") {
        const now = new Date();
        const timeData = buildTimeData(now, { military, divider, showAmPm, timeLayout, leadingZeroHours });
        set({
          currentTime: event.payload,
          currentDate: formatDate(now, dateFormat, monthFormat, dateSeparator),
          timeData,
          dateData: {
            formatted: formatDate(now, dateFormat, monthFormat, dateSeparator),
            dayName: getDayName(now),
          },
          currentConstellation: getZodiacSign(now),
        });
        return;
      }

      const payload = event.payload as TimePayload;
      const date = new Date(payload.utcTime);
      date.setMinutes(date.getMinutes() - payload.timezoneOffset);

      // compute server-to-local ms offset so we can tick locally
      // The server payload may contain only minute precision (seconds=0). To avoid
      // staying up to a minute behind or overshooting, choose the server minute
      // nearest to local time and then preserve local seconds when building the offset.
      const serverMs = date.getTime();
      const localMs = Date.now();
      const localMsIntoMinute = localMs % 60000;
      // pick the integer number of minutes (k) so serverMs + k*60000 is closest to localMs
      const minuteDiff = Math.round((localMs - serverMs) / 60000);
      const adjustedServerMs = serverMs + minuteDiff * 60000 + localMsIntoMinute;
      const offsetMs = adjustedServerMs - localMs;

      if (!get().timerId) {
        set({ timeOffsetMs: offsetMs, timeOffsetTargetMs: offsetMs });
      } else {
        set({ timeOffsetTargetMs: offsetMs });
      }

      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();

      let timeString: string;
      if (military) {
        timeString = `${hours.toString().padStart(2, "0")}${divider}${minutes
          .toString()
          .padStart(2, "0")}`;
      } else {
        const hour12 = hours % 12 || 12;
        const hourStr = leadingZeroHours ? hour12.toString().padStart(2, "0") : hour12.toString();
        const amPm = hours >= 12 ? "PM" : "AM";
        const amPmDisplay = showAmPm === 'off' ? '' : ` ${amPm}`;
        timeString = `${hourStr}${divider}${minutes
          .toString()
          .padStart(2, "0")}${amPmDisplay}`;
      }

      const currentDateStr = formatDate(date, dateFormat, monthFormat, dateSeparator);
      
      let hoursStr: string;
      if (military) {
        hoursStr = hours.toString().padStart(2, "0");
      } else {
        const hour12 = hours % 12 || 12;
        hoursStr = leadingZeroHours ? hour12.toString().padStart(2, "0") : hour12.toString();
      }
      
      const timeData: TimeData = {
        hours: hoursStr,
        minutes: minutes.toString().padStart(2, "0"),
        amPm: military ? '' : (hours >= 12 ? 'PM' : 'AM'),
        formatted: timeString,
      };

      set({
        currentTime: timeString,
        currentDate: currentDateStr,
        timeData,
        dateData: {
          formatted: currentDateStr,
          dayName: getDayName(date),
        },
        currentConstellation: getZodiacSign(date),
      });
    });

    const initialSettings = (await DeskThing.getSettings?.()) as ClockSettings | undefined;
    if (initialSettings) {
      get().setSettings(initialSettings);
    } else {
      set({ isLoading: false });
    }

    const now = new Date();
    const settings = get().settings;
    const military = settings?.[ClockSettingIDs.MILITARY_TIME] ?? false;
    const divider = settings?.[ClockSettingIDs.CLOCK_DIVIDER] || ":";
    const showAmPm = settings?.[ClockSettingIDs.SHOW_AMPM] || "normal";
    const timeLayout = settings?.[ClockSettingIDs.TIME_LAYOUT] || "inline";
    const leadingZeroHours = settings?.[ClockSettingIDs.LEADING_ZERO_HOURS] ?? false;
    const dateFormat = settings?.[ClockSettingIDs.DATE_FORMAT] || "MMMM DD YYYY";
    const monthFormat = settings?.[ClockSettingIDs.MONTH_FORMAT] || "full";
    const dateSeparator = settings?.[ClockSettingIDs.DATE_SEPARATOR] || "-";
    const timeData = buildTimeData(now, { military, divider, showAmPm, timeLayout, leadingZeroHours });

    set({
      currentTime: buildTimeString(now, military, divider),
      currentDate: formatDate(now, dateFormat, monthFormat, dateSeparator),
      timeData,
      dateData: {
        formatted: formatDate(now, dateFormat, monthFormat, dateSeparator),
        dayName: getDayName(now),
      },
      currentConstellation: getZodiacSign(now),
      initialized: true,
    });

    if (!get().timerId) {
      const id = window.setInterval(() => {
        const currentOffset = get().timeOffsetMs ?? 0;
        const targetOffset = get().timeOffsetTargetMs ?? currentOffset;
        if (currentOffset !== targetOffset) {
          const delta = targetOffset - currentOffset;
          const maxStep = 500; // ms per tick (adjust smoothing speed here)
          const step = Math.sign(delta) * Math.min(Math.abs(delta), maxStep);
          const newOffset = currentOffset + step;
          set({ timeOffsetMs: newOffset });
        }

        const offset = get().timeOffsetMs ?? 0;
        const tickNow = new Date(Date.now() + offset);

        const militaryTick = get().settings?.[ClockSettingIDs.MILITARY_TIME] ?? false;
        const dividerTick = get().settings?.[ClockSettingIDs.CLOCK_DIVIDER] || ":";
        const showAmPmTick = get().settings?.[ClockSettingIDs.SHOW_AMPM] || "normal";
        const timeLayoutTick = get().settings?.[ClockSettingIDs.TIME_LAYOUT] || "inline";
        const leadingZeroHoursTick = get().settings?.[ClockSettingIDs.LEADING_ZERO_HOURS] ?? false;
        const dateFormatTick = get().settings?.[ClockSettingIDs.DATE_FORMAT] || "MMMM DD YYYY";
        const monthFormatTick = get().settings?.[ClockSettingIDs.MONTH_FORMAT] || "full";
        const dateSeparatorTick = get().settings?.[ClockSettingIDs.DATE_SEPARATOR] || "-";

        const newTimeData = buildTimeData(tickNow, { military: militaryTick, divider: dividerTick, showAmPm: showAmPmTick, timeLayout: timeLayoutTick, leadingZeroHours: leadingZeroHoursTick });
        const newTimeString = buildTimeString(tickNow, militaryTick, dividerTick);
        const newDateStr = formatDate(tickNow, dateFormatTick, monthFormatTick, dateSeparatorTick);

        if (get().timeData.formatted !== newTimeData.formatted || get().currentDate !== newDateStr) {
          set({
            timeData: newTimeData,
            currentTime: newTimeString,
            currentDate: newDateStr,
            dateData: {
              formatted: newDateStr,
              dayName: getDayName(tickNow),
            },
            currentConstellation: getZodiacSign(tickNow),
          });
        }
      }, 1000);

      set({ timerId: id });
    }
  },

  setSettings: (settings: ClockSettings | undefined) => {
    if (!settings) {
      set({ isLoading: false });
      return;
    }

    const condensedSettings = getCondensedSettings(settings);
    set({ isLoading: false, settings: condensedSettings });

    const fontUrl = get().fontUrl;
    const newFontUrl = settings[ClockSettingIDs.FONT_SELECTION]?.value || null;

    if (newFontUrl && typeof newFontUrl === "string" && newFontUrl !== fontUrl) {
      void get().updateFontUrl(newFontUrl);
    }

    const now = new Date();
    const military = condensedSettings[ClockSettingIDs.MILITARY_TIME] ?? false;
    const divider = condensedSettings[ClockSettingIDs.CLOCK_DIVIDER] || ":";
    const showAmPm = condensedSettings[ClockSettingIDs.SHOW_AMPM] || "normal";
    const timeLayout = condensedSettings[ClockSettingIDs.TIME_LAYOUT] || "inline";
    const leadingZeroHours = condensedSettings[ClockSettingIDs.LEADING_ZERO_HOURS] ?? false;
    const dateFormat = condensedSettings[ClockSettingIDs.DATE_FORMAT] || "MMMM DD YYYY";
    const monthFormat = condensedSettings[ClockSettingIDs.MONTH_FORMAT] || "full";
    const dateSeparator = condensedSettings[ClockSettingIDs.DATE_SEPARATOR] || "-";
    const timeData = buildTimeData(now, { military, divider, showAmPm, timeLayout, leadingZeroHours });

    set({
      currentTime: buildTimeString(now, military, divider),
      currentDate: formatDate(now, dateFormat, monthFormat, dateSeparator),
      timeData,
      dateData: {
        formatted: formatDate(now, dateFormat, monthFormat, dateSeparator),
        dayName: getDayName(now),
      },
      currentConstellation: getZodiacSign(now),
    });
  },

  updateFontUrl: async (fontUrl: string | null) => {
    if (!fontUrl) return;
    try {
      const fontName = fontUrl.replace(/\.[^/.]+$/, "");

      const candidates: string[] = [];
      if (fontUrl.startsWith("http")) {
        candidates.push(fontUrl);
      } else {
        const clean = fontUrl.replace(/^\//, "");
        candidates.push(clean); // direct relative (e.g., assets piped through bundler)
        candidates.push(`fonts/${clean}`);
        candidates.push(`/fonts/${clean}`);
      }

      if (currentFontFace) {
        document.fonts.delete(currentFontFace);
      }

      let loadedFace: FontFace | null = null;
      let lastError: unknown = null;

      for (const src of candidates) {
        try {
          const face = new FontFace("CustomClockFont", `url(${src})`);
          document.fonts.add(face);
          await face.load();
          loadedFace = face;
          console.log(`Clock font loaded: ${fontName} from ${src}`);
          break;
        } catch (err) {
          lastError = err;
        }
      }

      if (!loadedFace) {
        throw lastError || new Error("Failed to load font");
      }

      currentFontFace = loadedFace;

      const styleId = "clock-font-style";
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = ".font-clock, .font-date { font-family: 'CustomClockFont', sans-serif !important; }";
      document.head.appendChild(style);

      const clockElements = document.querySelectorAll('.font-clock, .font-date') as NodeListOf<HTMLElement>;
      clockElements.forEach((element) => {
        element.style.fontFamily = "'CustomClockFont', sans-serif";
      });

      set({ fontUrl });
    } catch (error) {
      console.error("Error loading clock font:", error);
    }
  },
}));
