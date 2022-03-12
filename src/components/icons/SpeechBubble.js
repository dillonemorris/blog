import React from "react";
import { useThemeColor } from "../../hooks/useThemeColors";

export const SpeechBubble = () => {
  const color = useThemeColor("background");
  return (
    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.475-3.083A10.5 10.5 0 1012.75.75z" />
        <path d="M15.006 10.5a.75.75 0 000-1.5h0a.75.75 0 000 1.5" />
        <path d="M15.171 13.755a2.785 2.785 0 001.616-2.378c0-1.045-.557-2.377-1.844-2.377M9.756 10.5a.75.75 0 000-1.5h0a.75.75 0 000 1.5" />
        <path d="M9.921 13.755a2.785 2.785 0 001.616-2.378C11.537 10.332 10.98 9 9.693 9" />
      </g>
    </svg>
  );
};
