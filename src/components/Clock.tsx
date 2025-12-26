import { useSettingStore } from "@src/store/settingsStore";
import { ClockSettingIDs, ClockWidgets } from "@shared/index";
import { ClockWrapper } from "./ClockWrapper";
import { useMusicStore } from "@src/store/musicStore";
import { DateWidget } from "./DateWidget";
import { Constellation } from "./Constellation";
import React, { useMemo } from "react";

export const Clock = () => {
  const time = useSettingStore((state) => state.currentTime);
  const timeData = useSettingStore((state) => state.timeData);
  const settings = useSettingStore((state) => state.settings);
  const color = useMusicStore((state) => state.textColor) || "#ffffff";

  // Get relevant settings
  const transparency = settings?.[ClockSettingIDs.CLOCK_OPACITY] ?? 1;
  const shadowEnabled = settings?.[ClockSettingIDs.CLOCK_SHADOW] ?? false;
  const shadowDistance = settings?.[ClockSettingIDs.CLOCK_SHADOW_DISTANCE] ?? 0;
  const shadowOpacity = settings?.[ClockSettingIDs.CLOCK_SHADOW_OPACITY] ?? 0;
  const shadowBlur = settings?.[ClockSettingIDs.CLOCK_SHADOW_BLUR] ?? 0;
  const justify = settings?.[ClockSettingIDs.CLOCK_JUSTIFY_CONTENT] || "center";
  const gradientEnabled =
    settings?.[ClockSettingIDs.COLOR_OPTIONS]?.includes("gradient") || false;
  const gradientStart = settings?.[ClockSettingIDs.GRADIENT_START] || "#ff0000";
  const gradientEnd = settings?.[ClockSettingIDs.GRADIENT_END] || "#0000ff";
  const fontSize = settings?.[ClockSettingIDs.CLOCK_SIZE] || 180;
  const fontFamily = "'CustomClockFont', 'GeistVF', sans-serif";

  // New time display settings
  const timeLayout = settings?.[ClockSettingIDs.TIME_LAYOUT] || "inline";
  const timeAlignment = settings?.[ClockSettingIDs.TIME_ALIGNMENT] || "center";
  const militaryTime = settings?.[ClockSettingIDs.MILITARY_TIME] ?? false;
  const showAmPm = settings?.[ClockSettingIDs.SHOW_AMPM] || "normal";
  const fontWeight = settings?.[ClockSettingIDs.FONT_WEIGHT] || "normal";
  const digitSpacing = settings?.[ClockSettingIDs.DIGIT_SPACING] ?? 0;
  const lineSpacing = settings?.[ClockSettingIDs.LINE_SPACING] ?? 0;
  const clockDivider = settings?.[ClockSettingIDs.CLOCK_DIVIDER] || ":";

  // Date settings
  const showDate = settings?.[ClockSettingIDs.SHOW_DATE] ?? true;
  const dateSize = settings?.[ClockSettingIDs.DATE_SIZE] ?? 0.3;
  const dateFontSize = Math.round(fontSize * dateSize);

  // Constellation settings
  const showConstellation = settings?.[ClockSettingIDs.SHOW_CONSTELLATION] ?? false;
  const constellationPosition = settings?.[ClockSettingIDs.CONSTELLATION_POSITION] || "right";

  // Widget settings
  const enabledWidgets = settings?.[ClockSettingIDs.WIDGETS] || [];
  const widgetOrdering = settings?.[ClockSettingIDs.CLOCK_ORDERING] || ['clock', ClockWidgets.DATE];
  const layerOrder = settings?.[ClockSettingIDs.LAYER_ORDER] || ['time', 'date', 'constellation'];

  // Global offset for entire widget group
  const groupOffsetX = settings?.[ClockSettingIDs.CLOCK_POS_X] ?? 0;
  const groupOffsetY = settings?.[ClockSettingIDs.CLOCK_POS_Y] ?? 0;

  // Base style with font weight and digit spacing (no individual transforms)
  const baseStyle: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    opacity: transparency,
    justifyContent: justify,
    fontFamily,
    fontWeight,
    letterSpacing: `${digitSpacing}px`,
    fontVariantNumeric: "tabular-nums",
  };

  const shadowStyle: React.CSSProperties = {
    ...baseStyle,
    color: shadowEnabled ? `rgba(0,0,0, ${shadowOpacity})` : "transparent",
    transform: `translate(${shadowDistance}px, ${shadowDistance}px)`,
    filter: shadowEnabled ? `blur(${shadowBlur}px)` : "none",
    position: "absolute" as const,
    zIndex: 1,
  };

  const textStyle: React.CSSProperties = gradientEnabled
    ? {
        ...baseStyle,
        background: `linear-gradient(90deg, ${gradientStart}, ${gradientEnd})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        fontFamily,
        position: "relative" as const,
        zIndex: 2,
      }
    : {
        ...baseStyle,
        color,
        fontFamily,
        textShadow: shadowEnabled
          ? `${shadowDistance}px ${shadowDistance}px ${shadowBlur}px rgba(0,0,0, ${shadowOpacity})`
          : "none",
      };

  const dateBaseStyle: React.CSSProperties = {
    opacity: transparency,
    fontWeight,
  };

  const dateShadowStyle: React.CSSProperties = {
    ...dateBaseStyle,
    fontSize: `${dateFontSize}px`,
    fontFamily,
    color: shadowEnabled ? `rgba(0,0,0, ${shadowOpacity})` : "transparent",
    transform: `translate(${shadowDistance}px, ${shadowDistance}px)`,
    filter: shadowEnabled ? `blur(${shadowBlur}px)` : "none",
    position: "absolute" as const,
    zIndex: 1,
  };

  const dateTextStyle: React.CSSProperties = gradientEnabled
    ? {
        ...dateBaseStyle,
        fontSize: `${dateFontSize}px`,
        background: `linear-gradient(90deg, ${gradientStart}, ${gradientEnd})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        fontFamily,
        position: "relative" as const,
        zIndex: 2,
      }
    : {
        ...dateBaseStyle,
        fontSize: `${dateFontSize}px`,
        color,
        fontFamily,
        textShadow: shadowEnabled
          ? `${shadowDistance}px ${shadowDistance}px ${shadowBlur}px rgba(0,0,0, ${shadowOpacity})`
          : "none",
      };

  // Stacked time layout styles
  const stackedContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: timeAlignment === "left" ? "flex-start" : timeAlignment === "right" ? "flex-end" : "center",
    gap: `${lineSpacing}px`,
  };

  const stackedLineStyle: React.CSSProperties = {
    ...textStyle,
    transform: "none",
    lineHeight: 1,
  };

  const stackedShadowLineStyle: React.CSSProperties = {
    ...shadowStyle,
    transform: `translate(${shadowDistance}px, ${shadowDistance}px)`,
    lineHeight: 1,
  };

  // AM/PM styles
  const amPmStyle: React.CSSProperties = {
    ...textStyle,
    fontSize: showAmPm === "small" ? `${fontSize * 0.3}px` : `${fontSize * 0.5}px`,
    marginLeft: showAmPm === "small" ? "4px" : "8px",
    verticalAlign: showAmPm === "small" ? "super" : "baseline",
    opacity: showAmPm === "small" ? 0.7 : 1,
  };

  // Render inline time display
  const renderInlineTime = () => {

    const numericSpanStyle: React.CSSProperties = {
      fontVariantNumeric: 'tabular-nums',
      fontFeatureSettings: "'tnum' 1",
      display: 'inline-block',
      minWidth: '2ch',
    };

    const dividerStyle: React.CSSProperties = {
      margin: '0 0.25ch',
    };

    return (
      <div key="clock" style={{ position: "relative", display: "inline-flex", alignItems: "baseline" }}>
        {/* Shadow element - only rendered for gradients */}
        {gradientEnabled && shadowEnabled && (
          <p className="min-h-fit min-w-fit text-nowrap font-clock" style={shadowStyle}>
            <span style={{ ...numericSpanStyle, textAlign: 'right' }}>{timeData.hours}</span>
            <span style={dividerStyle}>{clockDivider}</span>
            <span style={{ ...numericSpanStyle, textAlign: 'left' }}>{timeData.minutes}</span>
            {!militaryTime && showAmPm !== "off" && (
              <span style={{ ...amPmStyle, color: `rgba(0,0,0, ${shadowOpacity})` }}>
                {timeData.amPm}
              </span>
            )}
          </p>
        )}

        {/* Main text element */}
        <p className="min-h-fit min-w-fit text-nowrap font-clock" style={textStyle}>
          <span style={{ ...numericSpanStyle, textAlign: 'right' }}>{timeData.hours}</span>
          <span style={dividerStyle}>{clockDivider}</span>
          <span style={{ ...numericSpanStyle, textAlign: 'left' }}>{timeData.minutes}</span>
        </p>

        {/* AM/PM indicator */}
        {!militaryTime && showAmPm !== "off" && (
          <span className="font-clock" style={amPmStyle}>
            {timeData.amPm}
          </span>
        )}
      </div>
    );
  };

  // Render stacked time display
  const renderStackedTime = () => {
    return (
      <div key="clock" style={{ position: "relative" }}>
        <div style={stackedContainerStyle}>
          {/* Hours */}
          <div style={{ position: "relative", display: "inline-block" }}>
            {gradientEnabled && shadowEnabled && (
              <p className="min-h-fit min-w-fit text-nowrap font-clock" style={stackedShadowLineStyle}>
                {timeData.hours}
              </p>
            )}
            <p className="min-h-fit min-w-fit text-nowrap font-clock" style={stackedLineStyle}>
              {timeData.hours}
            </p>
          </div>

          {/* Minutes */}
          <div style={{ position: "relative", display: "inline-block" }}>
            {gradientEnabled && shadowEnabled && (
              <p className="min-h-fit min-w-fit text-nowrap font-clock" style={stackedShadowLineStyle}>
                {timeData.minutes}
              </p>
            )}
            <p className="min-h-fit min-w-fit text-nowrap font-clock" style={stackedLineStyle}>
              {timeData.minutes}
            </p>
          </div>

          {/* AM/PM for stacked layout */}
          {!militaryTime && showAmPm !== "off" && (
            <div style={{ position: "relative", display: "inline-block" }}>
              {gradientEnabled && shadowEnabled && (
                <p
                  className="min-h-fit min-w-fit text-nowrap font-clock"
                  style={{
                    ...stackedShadowLineStyle,
                    fontSize: `${fontSize * 0.25}px`,
                  }}
                >
                  {timeData.amPm}
                </p>
              )}
              <p
                className="min-h-fit min-w-fit text-nowrap font-clock"
                style={{
                  ...stackedLineStyle,
                  fontSize: `${fontSize * 0.25}px`,
                  opacity: 0.8,
                }}
              >
                {timeData.amPm}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render the clock widget based on layout
  const renderClock = () => {
    return timeLayout === "stacked" ? renderStackedTime() : renderInlineTime();
  };

  // Render the date widget
  const renderDate = () => {
    if (!showDate) return null;
    const containerStyle: React.CSSProperties = {
      position: "relative",
      display: "inline-block",
    };
    return (
      <DateWidget
        key="date"
        shadowStyle={dateShadowStyle}
        textStyle={dateTextStyle}
        containerStyle={containerStyle}
        shadowEnabled={shadowEnabled}
        gradientEnabled={gradientEnabled}
        clockFontSize={fontSize}
      />
    );
  };

  // Render the constellation widget
  const renderConstellation = () => {
    if (!showConstellation) return null;
    const containerStyle: React.CSSProperties = {
      position: "relative",
      display: "inline-block",
    };
    return (
      <Constellation
        key="constellation"
        shadowStyle={dateShadowStyle}
        textStyle={dateTextStyle}
        containerStyle={containerStyle}
        shadowEnabled={shadowEnabled}
        gradientEnabled={gradientEnabled}
      />
    );
  };

  // Render based on layer order (new system) - only time and date in text group
  const renderTextLayers = useMemo(() => {
    // Filter out constellation - it will be rendered separately
    return layerOrder
      .filter((layer) => layer !== 'constellation')
      .map((layer) => {
        switch (layer) {
          case 'time':
            return renderClock();
          case 'date':
            return renderDate();
          default:
            return null;
        }
      });
  }, [layerOrder, showDate, time, timeData, textStyle, shadowStyle, gradientEnabled, shadowEnabled, timeLayout]);

  // Render widgets based on ordering (legacy system for additional widgets)
  const renderWidgets = useMemo(() => {
    return widgetOrdering
      .filter((widget) => widget !== ClockWidgets.CONSTELLATION)
      .map((widget) => {
        switch (widget) {
          case 'clock':
            return renderClock();
          case ClockWidgets.DATE:
            return renderDate();
          // Other widgets like stopwatch/countdown can be added here later
          default:
            return null;
        }
      });
  }, [widgetOrdering, enabledWidgets, time, timeData, textStyle, shadowStyle, gradientEnabled, shadowEnabled, timeLayout]);

  // Get flex direction for main container based on constellation position
  const getMainContainerDirection = (): React.CSSProperties => {
    if (!showConstellation) {
      return { flexDirection: "column" };
    }

    switch (constellationPosition) {
      case "left":
        return { flexDirection: "row-reverse" };
      case "right":
        return { flexDirection: "row" };
      case "top":
        return { flexDirection: "column-reverse" };
      case "bottom":
      default:
        return { flexDirection: "column" };
    }
  };

  // Determine if constellation is horizontal (left/right) vs vertical (top/bottom)
  const isConstellationHorizontal = constellationPosition === "left" || constellationPosition === "right";

  // Use layer order system if available, otherwise fall back to widget ordering
  const useLayerSystem = layerOrder && layerOrder.length > 0;

  return (
    <ClockWrapper>
      {/* Outer wrapper applies the global offset to the entire widget group */}
      <div
        style={{
          transform: `translate(${groupOffsetX}px, ${groupOffsetY}px)`,
        }}
      >
        <div
          className="flex gap-4"
          style={{
            ...getMainContainerDirection(),
            alignItems: isConstellationHorizontal ? "center" : "center",
            justifyContent: "center",
          }}
        >
          {/* Constellation as a separate sibling group */}
          {showConstellation && (constellationPosition === "left" || constellationPosition === "top") && (
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {renderConstellation()}
            </div>
          )}

          {/* Text Group (Time + Day + Date) - vertical stack */}
          <div 
            className="flex flex-col"
            style={{
              alignItems: timeAlignment === "left" ? "flex-start" : timeAlignment === "right" ? "flex-end" : "center",
            }}
          >
            {useLayerSystem ? renderTextLayers : renderWidgets}
          </div>

          {/* Constellation as a separate sibling group */}
          {showConstellation && (constellationPosition === "right" || constellationPosition === "bottom") && (
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {renderConstellation()}
            </div>
          )}
        </div>
      </div>
    </ClockWrapper>
  );
};
