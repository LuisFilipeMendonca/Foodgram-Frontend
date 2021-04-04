import { createGlobalStyle } from "styled-components";
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
`;

export default GlobalStyle;
