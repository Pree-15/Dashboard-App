// theme.js (Light Mode Only - Teal + Orange)

export const tokensLight = {
  grey: {
    0: "#ffffff",
    50: "#f9f9f9",
    100: "#f0f0f0",
    200: "#e0e0e0",
    300: "#c2c2c2",
    400: "#a3a3a3",
    500: "#858585",
    600: "#666666",
    700: "#4d4d4d",
    800: "#2e2e2e",
    900: "#141414",
  },
  primary: {
    // Teal
    100: "#e0f2f1",
    200: "#b2dfdb",
    300: "#80cbc4",
    400: "#4db6ac",
    500: "#26a69a", // main
    600: "#009688",
    700: "#00897b",
    800: "#00796b",
    900: "#004d40",
  },
  secondary: {
    // Orange
    100: "#fff3e0",
    200: "#ffe0b2",
    300: "#ffcc80",
    400: "#ffb74d",
    500: "#ffa726", // main
    600: "#ff9800",
    700: "#fb8c00",
    800: "#f57c00",
    900: "#ef6c00",
  },
};

export const themeSettings = {
  palette: {
    mode: "light",
    primary: {
      ...tokensLight.primary,
      main: tokensLight.primary[500],
      light: tokensLight.primary[300],
      dark: tokensLight.primary[700],
    },
    secondary: {
      ...tokensLight.secondary,
      main: tokensLight.secondary[500],
      light: tokensLight.secondary[300],
      dark: tokensLight.secondary[700],
    },
    neutral: {
      ...tokensLight.grey,
      main: tokensLight.grey[500],
    },
    background: {
      default: tokensLight.grey[0],
      alt: tokensLight.grey[50],
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 13,
    h1: { fontSize: 40 },
    h2: { fontSize: 32 },
    h3: { fontSize: 24 },
    h4: { fontSize: 20 },
    h5: { fontSize: 16 },
    h6: { fontSize: 14 },
  },

};
