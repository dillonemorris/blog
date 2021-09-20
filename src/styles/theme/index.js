export const COLORS = {
  GRAY_900: "#111827",
  GRAY_800: "#1F2937",
  GRAY_500: "#6B7280",
  GRAY_100: "#F3F4F6",

  BLUE_600: "#2563EB",
  BLUE_400: "#60A5FA",
  BLUE_200: "#BFDBFE",
  BLUE_100: "#DBEAFE",

  GREEN_300: "#6EE7B7",
  GREEN_700: "#047857",

  RED_300: "#FCA5A5",
  RED_700: "#B91C1C",
};

export const THEME_COLORS = {
  light: {
    text: COLORS.GRAY_900,
    background: "#fff",
    secondaryBackground: COLORS.BLUE_100,
    tertiaryBackground: COLORS.GRAY_100,
    darkBackground: COLORS.GRAY_900,
    secondaryText: COLORS.GRAY_500,
    primary: COLORS.BLUE_600,
    success: COLORS.GREEN_700,
    danger: COLORS.RED_700,
  },
  dark: {
    text: "#fff",
    background: COLORS.GRAY_900,
    secondaryBackground: COLORS.GRAY_800,
    tertiaryBackground: COLORS.GRAY_800,
    darkBackground: COLORS.GRAY_800,
    secondaryText: COLORS.BLUE_200,
    primary: COLORS.BLUE_400,
    success: COLORS.GREEN_300,
    danger: COLORS.RED_300,
  },
};
