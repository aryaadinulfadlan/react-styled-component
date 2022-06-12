import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        padding: 5rem;
        line-height: 1.5;
        letter-spacing: 2px;
        font-family: 'Sora', sans-serif;
    }
    img, svg {
        display: block;
        max-width: 100%;
        height: auto;
    }
    input, textarea, button, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
    }
`