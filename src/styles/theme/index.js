const BASE_COLORS = {
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
    text: BASE_COLORS.GRAY_900,
    background: "#fff",
    secondaryBackground: BASE_COLORS.BLUE_100,
    tertiaryBackground: BASE_COLORS.GRAY_100,
    secondaryText: BASE_COLORS.GRAY_500,
    primary: BASE_COLORS.BLUE_600,
    success: BASE_COLORS.GREEN_700,
    danger: BASE_COLORS.RED_700,
  },
  dark: {
    text: "#fff",
    background: BASE_COLORS.GRAY_900,
    secondaryBackground: BASE_COLORS.GRAY_800,
    tertiaryBackground: BASE_COLORS.GRAY_800,
    secondaryText: BASE_COLORS.BLUE_200,
    primary: BASE_COLORS.BLUE_400,
    success: BASE_COLORS.GREEN_300,
    danger: BASE_COLORS.RED_300,
  },
};
