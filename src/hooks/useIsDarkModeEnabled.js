import React from "react";
import { ColorModeContext } from "../components/ColorModeContainer";

export const useIsDarkModeEnabled = () => {
  const { colorMode } = React.useContext(ColorModeContext);
  if (!colorMode) {
    return null;
  }

  return colorMode === "dark";
};
