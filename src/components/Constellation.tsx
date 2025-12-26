import React from "react";
import { useSettingStore } from "@src/store/settingsStore";
import { ClockSettingIDs } from "@shared/index";
import { useMusicStore } from "@src/store/musicStore";

// Import SVG files as raw strings so we can inline them and apply currentColor
import capricornSvgRaw from "@src/data/SVG/capricorn.svg?raw";
import aquariusSvgRaw from "@src/data/SVG/aquarius.svg?raw";
import piscesSvgRaw from "@src/data/SVG/pisces.svg?raw";
import ariesSvgRaw from "@src/data/SVG/aries.svg?raw";
import taurusSvgRaw from "@src/data/SVG/taurus.svg?raw";
import geminiSvgRaw from "@src/data/SVG/gemini.svg?raw";
import cancerSvgRaw from "@src/data/SVG/cancer.svg?raw";
import leoSvgRaw from "@src/data/SVG/leo.svg?raw";
import virgoSvgRaw from "@src/data/SVG/virgo.svg?raw";
import libraSvgRaw from "@src/data/SVG/libra.svg?raw";
import scorpioSvgRaw from "@src/data/SVG/scorpio.svg?raw";
import sagittariusSvgRaw from "@src/data/SVG/sagittarius.svg?raw";

// Map constellation names to their raw SVG strings
const CONSTELLATION_SVG_RAW: Record<string, string> = {
  Capricorn: capricornSvgRaw,
  Aquarius: aquariusSvgRaw,
  Pisces: piscesSvgRaw,
  Aries: ariesSvgRaw,
  Taurus: taurusSvgRaw,
  Gemini: geminiSvgRaw,
  Cancer: cancerSvgRaw,
  Leo: leoSvgRaw,
  Virgo: virgoSvgRaw,
  Libra: libraSvgRaw,
  Scorpio: scorpioSvgRaw,
  Sagittarius: sagittariusSvgRaw,
};

interface ConstellationProps {
  shadowStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  shadowEnabled?: boolean;
  gradientEnabled?: boolean;
}

export const Constellation: React.FC<ConstellationProps> = ({
  shadowStyle = {},
  textStyle = {},
  containerStyle = {},
  shadowEnabled = false,
  gradientEnabled = false,
}) => {
  const settings = useSettingStore((state) => state.settings);
  const constellation = useSettingStore((state) => state.currentConstellation);
  const color = useMusicStore((state) => state.textColor) || "#ffffff";

  // Get constellation settings
  const showConstellation = settings?.[ClockSettingIDs.SHOW_CONSTELLATION] ?? false;
  const displayMode = settings?.[ClockSettingIDs.CONSTELLATION_DISPLAY_MODE] || "graphic_name";
  const constellationSize = settings?.[ClockSettingIDs.CONSTELLATION_SIZE] ?? 0.5;
  const constellationOpacity = settings?.[ClockSettingIDs.CONSTELLATION_OPACITY] ?? 0.8;
  const showAnimation = settings?.[ClockSettingIDs.CONSTELLATION_ANIMATION] ?? false;
  const posX = settings?.[ClockSettingIDs.CONSTELLATION_POS_X] ?? 0;
  const posY = settings?.[ClockSettingIDs.CONSTELLATION_POS_Y] ?? 0;

  if (!showConstellation || !constellation) {
    return null;
  }

  const baseSize = 100 * constellationSize;

  const constellationContainerStyle: React.CSSProperties = {
    ...containerStyle,
    opacity: constellationOpacity,
    transform: `translate(${posX}px, ${posY}px)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  };

  const svgStyle: React.CSSProperties = {
    width: `${baseSize}px`,
    height: `${baseSize}px`,
    ...(showAnimation ? {
      animation: "constellationTwinkle 3s ease-in-out infinite",
    } : {}),
  };

  const nameStyle: React.CSSProperties = {
    ...textStyle,
    fontSize: `${Math.max(14, baseSize * 0.18)}px`,
    textTransform: "uppercase",
    letterSpacing: "2px",
    opacity: 0.9,
  };

  const renderConstellationGraphic = () => {
    const svgRaw = CONSTELLATION_SVG_RAW[constellation.name];

    if (!svgRaw) {
      // Fallback to zodiac symbol if no SVG
      return (
        <div
          style={{
            fontSize: `${baseSize * 0.6}px`,
            color,
          }}
        >
          {constellation.symbol}
        </div>
      );
    }

    const wrapperStyle: React.CSSProperties = {
      ...svgStyle,
      width: `${baseSize}px`,
      height: `${baseSize}px`,
      display: "inline-block",
      color, // let SVG use currentColor
      opacity: constellationOpacity,
    };

    return (
      <div
        className={showAnimation ? "constellation-graphic" : ""}
        style={wrapperStyle}
        // Inline the SVG so it can inherit currentColor
        dangerouslySetInnerHTML={{ __html: svgRaw }}
      />
    );
  };

  const renderDecorativeOnly = () => (
    <div style={constellationContainerStyle}>
      {renderConstellationGraphic()}
    </div>
  );

  const renderNameOnly = () => (
    <div style={constellationContainerStyle}>
      {shadowEnabled && gradientEnabled && (
        <span style={shadowStyle}>{constellation.name}</span>
      )}
      <span style={nameStyle}>{constellation.name}</span>
    </div>
  );

  const renderGraphicAndName = () => (
    <div style={constellationContainerStyle}>
      {renderConstellationGraphic()}
      {shadowEnabled && gradientEnabled && (
        <span
          style={{
            ...shadowStyle,
            fontSize: `${Math.max(14, baseSize * 0.18)}px`,
            position: "absolute",
          }}
        >
          {constellation.name}
        </span>
      )}
      <span style={nameStyle}>{constellation.name}</span>
    </div>
  );

  switch (displayMode) {
    case "decorative":
      return renderDecorativeOnly();
    case "name":
      return renderNameOnly();
    case "graphic_name":
    default:
      return renderGraphicAndName();
  }
};

// Add animation keyframes via style tag (will be injected once)
if (typeof document !== "undefined") {
  const styleId = "constellation-animations";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes constellationTwinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      .constellation-graphic {
        animation: constellationTwinkle 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }
}
