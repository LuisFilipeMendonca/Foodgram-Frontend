import styled, { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";
import "react-toastify/dist/ReactToastify.css";

type SectionType = {
  hasMarginLeft?: boolean;
  hasPaddingTop?: boolean;
};

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        scroll-behavior: smooth;
    }

    html {
      font-size: 62.5%;
    }

    body {
        background: #deddce;
        font-size: 1.3rem;
    }

    body,
    a,
    textarea,
    input {
      font-family: 'Open Sans', sans-serif;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    @media screen and (min-width: 576px) {
      html {
        font-size: 75%;
      }
    }
`;

export default GlobalStyle;

export const MainContainer = styled.main`
  padding-top: ${({ theme }) => theme.dimensions.navbarHeightSmall};

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.dimensions.navbarHeightBig};
  }
`;

export const Section = styled.section<SectionType>`
  padding: ${({ theme, hasPaddingTop }) =>
      hasPaddingTop ? `calc(${theme.dimensions.filtersHeight} + 16px)` : "16px"}
    8px 8px;

  @media screen and (min-width: 768px) {
    padding: 16px;
    margin-left: ${({ hasMarginLeft }) => hasMarginLeft && "250px"};
  }
`;
