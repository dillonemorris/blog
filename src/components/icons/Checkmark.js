import React from "react";
import { useThemeColor } from "../../hooks/useThemeColors";

export const Checkmark = () => {
  const stroke = useThemeColor("success");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      height="16"
      width="16"
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          d="M4 8.815l1.633 2.318a.7.7 0 001.138.034L12 4.552"
          strokeWidth="1.000005"
        />
        <path
          d="M.5 8a7.5 7.5 0 1015 0 7.5 7.5 0 10-15 0z"
          strokeWidth="1.000005"
        />
      </g>
    </svg>
  );
};
