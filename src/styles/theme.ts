// import { DefaultTheme } from "styled-components";

export const theme = {
  colors: {
    yellow: "#f7f8b8",
    yellowOpacity: "rgba(253, 255, 143, 0.8)",
    magenta: "#fc0076",
    magentaOpacity: "rgba(252,0,118, 0.5)",
    textDark: "#333",
    textMedium: "#999",
    textLight: "#eee",
  },
  dimensions: {
    navbarHeightSmall: "60px",
    filtersHeight: "70px",
    recipies: {
      heightSmall: "125px",
      imgWidthSmall: "160px",
      imgHeightSmall: "120px",
      imgHeightBig: "150px",
    },
  },
};

export type ThemeType = typeof theme;
