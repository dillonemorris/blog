import React from "react";
import { THEME_COLORS } from "../styles/theme";

export const ColorModeContext = React.createContext();

export const ColorModeContainer = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Update each color
    root.style.setProperty(
      "--color-text",
      newValue === "light" ? THEME_COLORS.light.text : THEME_COLORS.dark.text
    );

    root.style.setProperty(
      "--color-background",
      newValue === "light"
        ? THEME_COLORS.light.background
        : THEME_COLORS.dark.background
    );

    root.style.setProperty(
      "--color-primary",
      newValue === "light"
        ? THEME_COLORS.light.primary
        : THEME_COLORS.dark.primary
    );

    root.style.setProperty(
      "--color-secondary-background",
      newValue === "light"
        ? THEME_COLORS.light.secondaryBackground
        : THEME_COLORS.dark.secondaryBackground
    );

    root.style.setProperty(
      "--color-tertiary-background",
      newValue === "light"
        ? THEME_COLORS.light.tertiaryBackground
        : THEME_COLORS.dark.tertiaryBackground
    );

    root.style.setProperty(
      "--color-dark-background",
      colorMode === "light"
        ? THEME_COLORS.light.darkBackground
        : THEME_COLORS.dark.darkBackground
    );

    root.style.setProperty(
      "--color-secondary-text",
      newValue === "light"
        ? THEME_COLORS.light.secondaryText
        : THEME_COLORS.dark.secondaryText
    );

    root.style.setProperty(
      "--color-success",
      newValue === "light"
        ? THEME_COLORS.light.success
        : THEME_COLORS.dark.success
    );

    root.style.setProperty(
      "--color-danger",
      newValue === "light"
        ? THEME_COLORS.light.danger
        : THEME_COLORS.dark.danger
    );
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
