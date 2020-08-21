import React from "react";
import { Global, css } from "@emotion/core";
import schwiftSrc from "./assets/get_schwifty.ttf";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-image: linear-gradient(
            to right top,
            #02afc5,
            #49c0d2,
            #6dd1e0,
            #8ce2ee,
            #a9f3fd
          );
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }
        a {
          text-decoration: none;
          color: #e5e5e5;
        }

        @font-face {
          font-family: "schwifty";
        src: url("${schwiftSrc}");
        }

        *::-webkit-scrollbar {
          width: 5px;
        }

        *::-webkit-scrollbar-thumb {
          background-color: #e5e5e5;
          border-radius: 5px;
        }
      `}
    />
  );
}

export default GlobalStyle;
