import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,*::after, *::before{

    box-sizing: border-box;
    
}

body{
    margin: 0;
    font-size: clamp(.5rem,2.5vmin,1.5rem);
    background-color: hsl(240, 3%, 7%);
    display: flex;
    flex-direction: column;
    padding: 0px;
    min-height: 100vh
}

`;
