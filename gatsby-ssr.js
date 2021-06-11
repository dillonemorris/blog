import React from "react";
import { Layout } from "./src/components/Layout";
import { THEME_COLORS } from "./src/styles/theme";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
    const getInitialColorMode = () => {
      const persistedColorPreference = window.localStorage.getItem("color-mode");
      const hasPersistedPreference = typeof persistedColorPreference === "string";
    
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
    
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof mql.matches === "boolean";
      if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light";
      }
    
      return "light";
    };

    const colorMode = getInitialColorMode();
    const root = document.documentElement;

    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${THEME_COLORS.light.text}'
        : '${THEME_COLORS.dark.text}'
    );

    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${THEME_COLORS.light.background}'
        : '${THEME_COLORS.dark.background}'
    );

    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${THEME_COLORS.light.primary}'
        : '${THEME_COLORS.dark.primary}'
    );

    root.style.setProperty(
      '--color-secondary-background',
      colorMode === 'light'
        ? '${THEME_COLORS.light.secondaryBackground}'
        : '${THEME_COLORS.dark.secondaryBackground}'
    );

    root.style.setProperty(
      '--color-secondary-text',
      colorMode === 'light'
        ? '${THEME_COLORS.light.secondaryText}'
        : '${THEME_COLORS.dark.secondaryText}'
    );

    root.style.setProperty(
      '--color-tertiary-background',
      colorMode === 'light'
        ? '${THEME_COLORS.light.tertiaryBackground}'
        : '${THEME_COLORS.dark.tertiaryBackground}'
    );

    root.style.setProperty(
      '--color-success',
      colorMode === 'light'
        ? '${THEME_COLORS.light.success}'
        : '${THEME_COLORS.dark.success}'
    );

    root.style.setProperty(
      '--color-danger',
      colorMode === 'light'
        ? '${THEME_COLORS.light.danger}'
        : '${THEME_COLORS.dark.danger}'
    );

    root.style.setProperty('--initial-color-mode', colorMode);
  })()
  `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
