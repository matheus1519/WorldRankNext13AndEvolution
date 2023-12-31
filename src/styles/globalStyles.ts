import { createGlobalStyle } from 'styled-components'
import { colors } from './constants/colors'

export const GlobalStyles = createGlobalStyle`
    :root {
        --text-color: ${colors.primary};
        --text-color-secondary: #b3c5cd;

        --primary-color: #21b6b7;

        --background-color: #f9f9f9;
        --background-color-dark: #eef3f6;
        --background-color-light: white;

        --font-family: var(--font-poppins), sans-serif;
        --box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    }

    [data-theme="dark"] {
        --text-color: #f0f0f0;
        --text-color-secondary: #b3c5cd;

        --primary-color: #21b6b7;

        --background-color: #252329;
        --background-color-dark: #3c393f;
        --background-color-light: #120f13;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: var(--font-family);
        background-color: var(--background-color);
        color: var(--text-color);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        color: inherit;
        font: inherit;
    }
`
