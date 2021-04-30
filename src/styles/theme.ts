// import { DefaultTheme } from "styled-components";

export const theme = {
  colors: {
    white: "#f5f5f5",
    yellow: "#f7f8b8",
    yellowOpacity: "rgba(253, 255, 143, 0.8)",
    magenta: "#fc0076",
    magentaOpacity: "rgba(252,0,118, 0.5)",
    textDark: "#333",
    textMedium: "#999",
    textLight: "#eee",
    successLight: "#a7ccad",
    successDark: "#5c9c65",
    errorLight: "#ed9393",
    errorDark: "#e01212",
  },
  dimensions: {
    navbarHeightSmall: "5rem",
    navbarHeightBig: "6rem",
    filtersHeightSmall: "60px",
    filtersHeightBig: "85px",
    filtersWidthSmall: "250px",
    filtersWidthBig: "300px",
    recipies: {
      heightSmall: "125px",
      heightBig: "245px",
      imgWidthSmall: "160px",
      imgHeightSmall: "120px",
      imgHeightBig: "150px",
    },
  },
};

export type ThemeType = typeof theme;
