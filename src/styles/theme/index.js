export const COLORS = {
  GRAY_900: "#1F2933",
  GRAY_800: "#323F4B",
  GRAY_500: "#616E7C",
  GRAY_100: "#E4E7EB",

  BLUE_600: "#2563EB",
  BLUE_400: "#60A5FA",
  BLUE_200: "#BFDBFE",
  BLUE_100: "#DBEAFE",

  PURPLE_200: "#DAC4FF",
  PURPLE_100: "#F2EBFE",

  CYAN_200: "#E1FCF8",
  CYAN_100: "#edfffc",

  GREEN_300: "#6EE7B7",
  GREEN_700: "#047857",

  RED_300: "#FCA5A5",
  RED_700: "#B91C1C",

  PINK_500: "#c94788",
  PINK_200: "#f0a3c9",
  PINK_100: "#FFD1DC",
};

export const THEME_COLORS = {
  light: {
    text: COLORS.GRAY_900,
    background: "#fff",
    secondaryBackground: COLORS.CYAN_200,
    tertiaryBackground: COLORS.GRAY_100,
    darkBackground: COLORS.GRAY_900,
    secondaryText: COLORS.GRAY_500,
    primary: COLORS.PINK_500,
    success: COLORS.GREEN_700,
    danger: COLORS.RED_700,
  },
  dark: {
    text: "#fff",
    background: COLORS.GRAY_900,
    secondaryBackground: COLORS.GRAY_800,
    tertiaryBackground: COLORS.GRAY_800,
    darkBackground: COLORS.GRAY_800,
    secondaryText: COLORS.CYAN_200,
    primary: COLORS.PINK_200,
    success: COLORS.GREEN_300,
    danger: COLORS.RED_300,
  },
};

export const SCREENS = {
  DESKTOP: "1024px",
};
