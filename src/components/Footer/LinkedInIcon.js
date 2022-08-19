import React from "react";

export const LinkedInIcon = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32">
      <path
        d="M6.5 22.5h-5v-13h5Zm9-9a2 2 0 0 0-2 2v7h-5v-13h5v1.485a6.307 6.307 0 0 1 3.99-1.495c2.962 0 5.01 2.2 5.01 6.355V22.5h-5v-7a2 2 0 0 0-2-2ZM6.5 5A2.5 2.5 0 1 1 4 2.5 2.5 2.5 0 0 1 6.5 5Z"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
