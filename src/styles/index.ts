import styled, { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: #deddce;
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
`;

export default GlobalStyle;

export const MainContainer = styled.main`
  padding-top: ${({ theme }) => theme.dimensions.navbarHeightSmall};
`;

export const MainContainerAuth = styled(MainContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const SectionRecipies = styled.section`
  padding: ${({ theme }) => `calc(${theme.dimensions.filtersHeight} + 16px)`}
    8px 8px;

  @media screen and (min-width: 850px) {
    padding: 16px;
    margin-left: 250px;
  }
`;

export const RecipiesContainer = styled.ul`
  display: grid;
  gap: 8px;

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    gap: 16px;
  }

  @media screen and (min-width: 1200px) {
    gap: 24px;
  }
`;
