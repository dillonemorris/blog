import React from "react";
import { THEME_COLORS } from "../../styles/theme";

export const LightSwitchOff = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="40"
      stroke={THEME_COLORS.dark.text}
      strokeWidth={0.1}
    >
      <path
        fill={THEME_COLORS.dark.text}
        d="M30.48 3.05H32v25.9h-1.52zM28.95 28.95h1.53v1.53h-1.53zM28.95 1.52h1.53v1.53h-1.53zM27.43 25.9h1.52v1.53h-1.52zM27.43 4.57h1.52v1.52h-1.52zM3.05 30.48h25.9V32H3.05zM22.86 6.09H12.19v1.53h-1.52v6.09h1.52v-1.52h9.15v1.52h-1.53v1.53h-1.52v1.52h-1.53v1.52H7.62v-1.52H6.1v4.57h1.52v-1.52h7.62v1.52H7.62v1.53h3.05v1.52h1.52v-1.52h6.1v-1.53h1.52v-3.05h1.53v-1.52h1.52v7.62h1.52V7.62h-1.52V6.09z"
      />
      <path
        fill={THEME_COLORS.dark.text}
        d="M12.19 24.38h10.67v1.52H12.19zM9.15 13.71h1.52v1.53H9.15zM7.62 15.24h1.53v1.52H7.62zM3.05 0h25.9v1.52H3.05zM3.05 25.9h1.52v1.53H3.05zM3.05 4.57h1.52v1.52H3.05zM1.53 28.95h1.52v1.53H1.53zM1.53 1.52h1.52v1.53H1.53zM0 3.05h1.53v25.9H0z"
      />
    </svg>
  );
};
