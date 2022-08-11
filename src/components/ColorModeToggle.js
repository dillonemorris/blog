import React from "react";
import styled from "styled-components";
import { useIsDarkModeEnabled } from "../hooks/useIsDarkModeEnabled";
import { ColorModeContext } from "./ColorModeContainer";
import { LightSwitchOff } from "./icons/LightSwitchOff";
import { LightSwitchOn } from "./icons/LightSwitchOn";

const IconButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

export const ColorModeToggle = () => {
  const { setColorMode } = React.useContext(ColorModeContext);
  const isDarkModeEnabled = useIsDarkModeEnabled();

  return (
    <IconButton
      onClick={() => setColorMode(isDarkModeEnabled ? "light" : "dark")}
    >
      {isDarkModeEnabled ? <LightSwitchOff /> : <LightSwitchOn />}
    </IconButton>
  );
};
