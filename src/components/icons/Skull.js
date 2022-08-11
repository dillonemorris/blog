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
      viewBox="0 0 32 32"
    >
      <path d="M28.955 6.86h1.52v13.71h-1.52zM27.435 20.57h1.52v1.52h-1.52zM27.435 5.33h1.52v1.53h-1.52zM25.905 22.09h1.53v1.53h-1.53zM25.905 3.81h1.53v1.52h-1.53zM24.385 23.62h1.52v6.09h-1.52zM24.385 12.95h-3.05v1.52h-1.52v3.05h1.52v1.53h3.05v-1.53h1.52v-3.05h-1.52v-1.52zM22.855 2.28h3.05v1.53h-3.05zM19.815 29.71h4.57v1.53h-4.57zM18.285 25.14h1.53v4.57h-1.53zM13.715 29.71h4.57v1.53h-4.57zM13.715 20.57h4.57v1.52h-4.57zM12.195 25.14h1.52v4.57h-1.52zM9.145.76h13.71v1.52H9.145zM7.625 29.71h4.57v1.53h-4.57zM10.665 12.95h-3.04v1.52h-1.53v3.05h1.53v1.53h3.04v-1.53h1.53v-3.05h-1.53v-1.52zM6.095 2.28h3.05v1.53h-3.05zM6.095 23.62h1.53v6.09h-1.53zM4.575 22.09h1.52v1.53h-1.52zM4.575 3.81h1.52v1.52h-1.52zM3.055 20.57h1.52v1.52h-1.52zM3.055 5.33h1.52v1.53h-1.52zM1.525 6.86h1.53v13.71h-1.53z" />
    </svg>
  );
};
