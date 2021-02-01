import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body,
    #root {
        display: flex;
        flex-direction: column;
        flex: 1 ;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
`;
