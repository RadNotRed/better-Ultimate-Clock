import React from "react";
import { useSettingStore } from "@src/store/settingsStore";
import { ClockSettingIDs } from "@shared/index";
import { useMusicStore } from "@src/store/musicStore";

// Import SVG files as URLs
import capricornSvg from "@src/data/SVG/capricorn.svg";
import aquariusSvg from "@src/data/SVG/aquarius.svg";
import piscesSvg from "@src/data/SVG/pisces.svg";
import ariesSvg from "@src/data/SVG/aries.svg";
import taurusSvg from "@src/data/SVG/taurus.svg";
import geminiSvg from "@src/data/SVG/gemini.svg";
import cancerSvg from "@src/data/SVG/cancer.svg";
import leoSvg from "@src/data/SVG/leo.svg";
import virgoSvg from "@src/data/SVG/virgo.svg";
import libraSvg from "@src/data/SVG/libra.svg";
import scorpioSvg from "@src/data/SVG/scorpio.svg";
import sagittariusSvg from "@src/data/SVG/sagittarius.svg";

// Map constellation names to their SVG imports
const CONSTELLATION_SVGS: Record<string, string> = {
  Capricorn: capricornSvg,
  Aquarius: aquariusSvg,
  Pisces: piscesSvg,
  Aries: ariesSvg,
  Taurus: taurusSvg,
  Gemini: geminiSvg,
  Cancer: cancerSvg,
  Leo: leoSvg,
  Virgo: virgoSvg,
  Libra: libraSvg,
  Scorpio: scorpioSvg,
  Sagittarius: sagittariusSvg,
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
    const svgUrl = CONSTELLATION_SVGS[constellation.name];
    
    if (!svgUrl) {
      // Fallback to zodiac symbol if no SVG
      return (
        <div
          style={{
            fontSize: `${baseSize * 0.6}px`,
            color: gradientEnabled ? "inherit" : color,
          }}
        >
          {constellation.symbol}
        </div>
      );
    }

    // Use CSS filter to invert black to white, then colorize
    // The SVGs are black on white, so we invert to get white
    const imgStyle: React.CSSProperties = {
      ...svgStyle,
      filter: "invert(1)", // Invert black to white
      opacity: constellationOpacity,
    };

    return (
      <img
        src={svgUrl}
        alt={constellation.name}
        style={imgStyle}
        className={showAnimation ? "constellation-graphic" : ""}
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
