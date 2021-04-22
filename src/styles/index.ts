import styled, { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

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

    @media screen and (min-width: 768px) {
      html {
        font-size: 87.5%;
      }

      body {
        font-size: 1.2rem;
      }
    }

    @media screen and (min-width: 992px) {
      html {
        font-size: 100%;
      }

      body {
        font-size: 1rem;
      }
    }
`;

export default GlobalStyle;

export const MainContainer = styled.main`
  padding-top: ${({ theme }) => theme.dimensions.navbarHeightSmall};
`;

export const MainContainerAuth = styled(MainContainer)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `calc(${theme.dimensions.navbarHeightSmall} + 8px)`}
    8px 8px;
`;

export const SectionRecipies = styled.section<{ hasMargin?: boolean }>`
  padding: ${({ theme }) => `calc(${theme.dimensions.filtersHeight} + 16px)`}
    8px 8px;

  @media screen and (min-width: 768px) {
    padding: 16px;
    margin-left: ${({ hasMargin }) => hasMargin && "250px"};
  }
`;

export const RecipiesContainer = styled.ul`
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 450px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;

    & > *:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
