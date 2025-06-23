// theme.js

export const tokensDark = {
  grey: {
    0: "#ffffff",
    50: "#f9f9f9",
    100: "#f0f0f0",
    200: "#d6d6d6",
    300: "#bdbdbd",
    400: "#a3a3a3",
    500: "#8a8a8a",
    600: "#6e6e6e",
    700: "#525252",
    800: "#3b3b3b",
    900: "#1e1e1e",
    1000: "#121212",
  },
  primary: {
    // Indigo
    100: "#e8eaf6",
    200: "#c5cae9",
    300: "#9fa8da",
    400: "#7986cb",
    500: "#5c6bc0", // main
    600: "#3f51b5",
    700: "#3949ab",
    800: "#303f9f",
    900: "#283593",
  },
  secondary: {
    // Amber
    100: "#fff8e1",
    200: "#ffecb3",
    300: "#ffe082",
    400: "#ffd54f",
    500: "#ffca28", // main
    600: "#ffc107",
    700: "#ffb300",
    800: "#ffa000",
    900: "#ff8f00",
  },
};

function reverseTokens(tokens) {
  const reversed = {};
  Object.entries(tokens).forEach(([key, shades]) => {
    const reversedShades = Object.entries(shades).reduce((acc, [shade, color], i, arr) => {
      acc[shade] = arr[arr.length - i - 1][1];
      return acc;
    }, {});
    reversed[key] = reversedShades;
  });
  return reversed;
}
export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode) => {
  const tokens = mode === "dark" ? tokensDark : tokensLight;
  return {
    palette: {
      mode,
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[300],
        dark: tokens.primary[700],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
        light: tokens.secondary[300],
        dark: tokens.secondary[700],
      },
      neutral: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: mode === "dark" ? "#10131A" : "#ffffff",
        alt: mode === "dark" ? "#161B25" : "#f5f7fa",
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
};
