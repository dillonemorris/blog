import React from "react";
import { useThemeColor } from "../../hooks/useThemeColors";

export const SpeechBubble = () => {
  const color = useThemeColor("text");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
      viewBox="0 0 32 32"
      strokeWidth={0.1}
    >
      <path
        fill={color}
        d="M22.1 15.24v1.52h-3.05v1.53H9.91v1.52h4.57v1.52H16v1.53h1.53v1.52h6.09v1.52h1.53v1.53h1.52v1.52h1.52v-6.09h1.53v-1.53h1.52v-6.09h-1.52v-1.53h-1.53v-1.52h-3.04V7.62h-1.53v7.62H22.1zM22.1 6.09h1.52v1.53H22.1z"
      />
      <path
        fill={color}
        d="M17.53 10.67h3.04v3.04h-3.04zM19.05 4.57h3.05v1.52h-3.05zM11.43 10.67h3.05v3.04h-3.05zM8.38 19.81h1.53v1.52H8.38zM6.86 3.05h12.19v1.52H6.86zM6.86 18.29H5.34v6.09h1.52v-1.52h1.52v-1.53H6.86v-3.04zM5.34 10.67h3.04v3.04H5.34zM3.81 4.57h3.05v1.52H3.81zM3.81 16.76h1.53v1.53H3.81zM2.29 15.24h1.52v1.52H2.29zM2.29 6.09h1.52v1.53H2.29zM.76 7.62h1.53v7.62H.76z"
      />
    </svg>
  );
};
