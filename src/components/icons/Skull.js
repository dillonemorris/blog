import React from "react";
import { useThemeColor } from "../../hooks/useThemeColors";

export const Skull = () => {
  const stroke = useThemeColor("danger");
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
          d="M14.5 7a6.5 6.5 0 10-11 4.683V14a1.5 1.5 0 003 0 1.5 1.5 0 003 0 1.5 1.5 0 003 0v-2.317A6.476 6.476 0 0014.5 7z"
          strokeWidth="1.000005"
        />
        <path
          d="M3.5 7a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0zm6 0a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0zM8 10v1.5"
          strokeWidth="1.000005"
        />
      </g>
    </svg>
  );
};
