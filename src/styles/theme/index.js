const BASE_COLORS = {
  GRAY_900: "#111827",
  GRAY_800: "#1F2937",
  GRAY_500: "#6B7280",

  BLUE_600: "#2563EB",
  BLUE_400: "#60A5FA",
  BLUE_200: "#BFDBFE",
};

export const THEME_COLORS = {
  light: {
    text: BASE_COLORS.GRAY_900,
    background: "#fff",
    secondaryBackground: "#fff",
    secondaryText: BASE_COLORS.GRAY_500,
    primary: BASE_COLORS.BLUE_600,
  },
  dark: {
    text: "#fff",
    background: BASE_COLORS.GRAY_900,
    secondaryBackground: BASE_COLORS.GRAY_800,
    secondaryText: BASE_COLORS.BLUE_200,
    primary: BASE_COLORS.BLUE_400,
  },
};
