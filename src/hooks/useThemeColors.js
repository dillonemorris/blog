import React from "react";
import { useTheme } from "styled-components";
import { ColorModeContext } from "../components/ColorModeContainer";

export const useThemeColor = (value) => {
  const theme = useTheme();
  const { colorMode } = React.useContext(ColorModeContext);

  if (!colorMode) return null;

  return theme.colors[colorMode][value];
};
