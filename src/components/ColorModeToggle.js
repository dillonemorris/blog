import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorModeContainer";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

const IconButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);
  const isDarkModeEnabled = colorMode === "dark";

  if (!colorMode) {
    return null;
  }

  return (
    <IconButton
      onClick={() => setColorMode(isDarkModeEnabled ? "light" : "dark")}
    >
      {isDarkModeEnabled ? <Sun /> : <Moon />}
    </IconButton>
  );
};
