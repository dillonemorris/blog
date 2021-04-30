import React from "react";
import "../styles/globals.css";
import "../fonts/fonts.css";

export const Layout = ({ children }) => {
  return <div className="m-auto max-w-prose pt-20">{children}</div>;
};
