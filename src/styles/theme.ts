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
    toastSuccessLight: "#a7ccad",
    toastSuccessDark: "#5c9c65",
    toastErrorLight: "#ed9393",
    toastErrorDark: "#e01212",
  },
  dimensions: {
    navbarHeightSmall: "5rem",
    navbarHeightBig: "6rem",
    filtersHeightSmall: "60px",
    filtersHeightBig: "85px",
    filtersWidth: "250px",
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
