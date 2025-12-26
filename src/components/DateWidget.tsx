import { useSettingStore } from "@src/store/settingsStore";
import { ClockSettingIDs } from "@shared/index";
import React from "react";

interface DateWidgetProps {
  shadowStyle: React.CSSProperties;
  textStyle: React.CSSProperties;
  containerStyle: React.CSSProperties;
  shadowEnabled: boolean;
  gradientEnabled: boolean;
  clockFontSize?: number;
}

export const DateWidget: React.FC<DateWidgetProps> = ({
  shadowStyle,
  textStyle,
  containerStyle,
  shadowEnabled,
  gradientEnabled,
  clockFontSize = 180,
}) => {
  const dateData = useSettingStore((state) => state.dateData);
  const settings = useSettingStore((state) => state.settings);

  // Date display settings
  const showDate = settings?.[ClockSettingIDs.SHOW_DATE] ?? true;
  const showDayName = settings?.[ClockSettingIDs.SHOW_DAY_NAME] ?? false;
  const dateLayout = settings?.[ClockSettingIDs.DATE_LAYOUT] || "inline";
  const dateAlignment = settings?.[ClockSettingIDs.DATE_ALIGNMENT] || "center";
  const dateOpacity = settings?.[ClockSettingIDs.DATE_OPACITY] ?? 1;
  const datePosX = settings?.[ClockSettingIDs.DATE_POS_X] ?? 0;
  const datePosY = settings?.[ClockSettingIDs.DATE_POS_Y] ?? 0;
  
  // Independent sizing for day and date
  const dateSize = settings?.[ClockSettingIDs.DATE_SIZE] ?? 0.3;
  const daySize = settings?.[ClockSettingIDs.DAY_SIZE] ?? 0.25;
  const dayDateGap = settings?.[ClockSettingIDs.DAY_DATE_GAP] ?? 8;
  
  // Calculate actual font sizes
  const dateFontSize = Math.round(clockFontSize * dateSize);
  const dayFontSize = Math.round(clockFontSize * daySize);

  if (!showDate) {
    return null;
  }

  // Day name style with independent sizing
  const dayNameStyle: React.CSSProperties = {
    fontSize: `${dayFontSize}px`,
    opacity: 0.9,
  };

  // Date text style with independent sizing
  const dateTextSizeStyle: React.CSSProperties = {
    fontSize: `${dateFontSize}px`,
  };

  // Build the date display string
  const buildDateDisplay = (): React.ReactNode => {
    if (dateLayout === "stacked") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: dateAlignment === "left" ? "flex-start" : dateAlignment === "right" ? "flex-end" : "center",
          }}
        >
          {showDayName && (
            <span style={dayNameStyle}>{dateData.dayName}</span>
          )}
          <span style={{ ...dateTextSizeStyle, marginTop: `${dayDateGap}px` }}>{dateData.formatted}</span>
        </div>
      );
    }

    if (dateLayout === "compact") {
      // Compact uses the smaller of the two sizes
      const compactDate = showDayName
        ? `${dateData.dayName}, ${dateData.formatted}`
        : dateData.formatted;
      return <span style={dateTextSizeStyle}>{compactDate}</span>;
    }

    // Inline layout (default)
    if (showDayName) {
      return (
        <span style={{ display: "inline-flex", alignItems: "baseline" }}>
          <span style={dayNameStyle}>{dateData.dayName}</span>
          <span style={{ ...dateTextSizeStyle, marginLeft: `${dayDateGap}px` }}>{dateData.formatted}</span>
        </span>
      );
    }

    return <span style={dateTextSizeStyle}>{dateData.formatted}</span>;
  };

  const enhancedContainerStyle: React.CSSProperties = {
    ...containerStyle,
    opacity: dateOpacity,
    textAlign: dateAlignment as React.CSSProperties["textAlign"],
    transform: `translate(${datePosX}px, ${datePosY}px)`,
  };

  // Remove fontSize from passed styles since we control it per-element now
  const enhancedTextStyle: React.CSSProperties = {
    ...textStyle,
    fontSize: undefined, // Override passed fontSize
    textAlign: dateAlignment as React.CSSProperties["textAlign"],
  };

  const enhancedShadowStyle: React.CSSProperties = {
    ...shadowStyle,
    fontSize: undefined, // Override passed fontSize
    textAlign: dateAlignment as React.CSSProperties["textAlign"],
  };

  return (
    <div style={enhancedContainerStyle}>
      {gradientEnabled && shadowEnabled && (
        <div
          className="min-h-fit min-w-fit text-nowrap font-date"
          style={enhancedShadowStyle}
        >
          {buildDateDisplay()}
        </div>
      )}

      <div
        className="min-h-fit min-w-fit text-nowrap font-date"
        style={enhancedTextStyle}
      >
        {buildDateDisplay()}
      </div>
    </div>
  );
};
