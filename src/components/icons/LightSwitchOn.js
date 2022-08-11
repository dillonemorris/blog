import React from "react";
import { THEME_COLORS } from "../../styles/theme";

export const LightSwitchOn = () => {
  const color = THEME_COLORS.light.text;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="40"
      stroke={color}
      strokeWidth={0.1}
    >
      <path
        fill={color}
        d="M30.48 3.05H32v25.9h-1.52zM28.95 28.95h1.53v1.53h-1.53zM28.95 1.52h1.53v1.53h-1.53zM27.43 25.9h1.52v1.53h-1.52zM27.43 4.57h1.52v1.52h-1.52zM3.05 30.48h25.9V32H3.05zM22.86 6.09h-3.05V4.57h-1.52V3.05H7.62v1.52h7.62v1.52H7.62V4.57H6.1v4.57h1.52V7.62h10.67v1.52h1.52v1.53h1.53v1.52h1.52v1.52H12.19v-1.52h-1.52v12.19h1.52v-9.14h10.67v9.14h1.52V7.62h-1.52V6.09zM12.19 24.38h10.67v1.52H12.19z"
      />
      <path
        fill={color}
        d="M19.81 19.81h1.53v1.52h-1.53zM19.81 16.76h1.53v1.52h-1.53zM15.24 21.33h4.57v1.53h-4.57zM13.72 19.81h1.52v1.52h-1.52zM13.72 16.76h1.52v1.52h-1.52zM9.15 10.67h1.52v1.52H9.15zM7.62 9.14h1.53v1.53H7.62zM3.05 0h25.9v1.52H3.05zM3.05 25.9h1.52v1.53H3.05zM3.05 4.57h1.52v1.52H3.05zM1.53 28.95h1.52v1.53H1.53zM1.53 1.52h1.52v1.53H1.53zM0 3.05h1.53v25.9H0z"
      />
    </svg>
  );
};
