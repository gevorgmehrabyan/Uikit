import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const GlobalStyles = createGlobalStyle`
      ${normalize}
      
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Inter", Helvetica, Roboto, "San Francisco", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
        font-style: normal;
        line-height: 1.2;
        font-weight: 400;
        background-color: white;
      }

      html,
      body,
      #root {
        height: 100%;
        scrollbar-color: #E9E9E9 #fff;
        scrollbar-width: thin;      
      }
      /* add custom scroll styles*/
      ::-webkit-scrollbar {
        background-color:#fff;
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background-color:#fff;
      }

      ::-webkit-scrollbar-thumb {
        background-color:#E9E9E9;
        border-radius: 16px;
        border: 2px solid #fff;
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color:#C7C7C7;
        border:2px solid #fff;
      }

      ::-webkit-scrollbar-button {display:none;}

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
      }

      img {
        max-width: 100%;
      }
      footer,
      header,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
      }

      a {
        text-decoration: none;
        color: inherit;
        margin: 0;
      }

      ul,
      li,
      ol {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      dl,
      dd {
        margin-bottom: 0;
      }

      figure {
        margin: 0;
      }

      button {
        padding: 0;
        border: none;
        background: none;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      p {
        margin: 0;
      }

      a,button {
        cursor: pointer;
        display: block;
      }

      input, button {
        border: none;
      }

      input {
        padding: 0;
      }

      input:focus, button:focus {
        outline: none;
      }

      .visually-hidden {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }

      .inactive {
        pointer-events: none;
      }

      .overlayed {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }

      /* Inter font family */
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Medium.ttf");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }
      @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter/Inter-Bold.ttf");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }
`;

export default GlobalStyles;
