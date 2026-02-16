import * as React from "react";
import { Global, css, ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#141a52",
    light: "white",
    lightGray: "#f2f2f2",
    gray: "#fefefe",
    darkGray: "#949494",
    errorRed: "#D32F2F",
  },
  secondaryFont: "DM-Sans",
  defaultTransition: "all 0.2s ease-in-out",
  buttonTransition: "all 0.2s ease-out",
  defaultBorderRadius: "30px",
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: Avenir;
            font-weight: 500;
            font-style: normal;
            src: url("fonts/AvenirMedium.woff2") format("woff2");
          }
          @font-face {
            font-family: Avenir;
            font-weight: 700;
            font-style: normal;
            src: url("fonts/AvenirHeavy.woff2") format("woff2");
          }
          @font-face {
            font-family: Avenir;
            font-weight: 900;
            font-style: normal;
            src: url("fonts/AvenirBlack.woff2") format("woff2");
          }
          @font-face {
            font-family: DM-Sans;
            font-weight: 700;
            font-style: normal;
            src: url("fonts/DMSans700.woff2") format("woff2");
          }
          html,
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            height: 100%;
            width: 100%;
          }
          * {
            box-sizing: border-box;
          }
          body {
            padding: 0;
            margin: 0;
            background: white;
            min-height: 100%;
            color: ${theme.colors.primary};
            overflow: auto;
            overscroll-behavior-y: none;
            margin: 0;
            padding: 0;
            font-display: block;
            font-family: Avenir;
            font-weight: 500;
            font-size: 12px;
          }
          a {
            text-decoration: none;
          }
          div p,
          div br {
            display: block;
            margin-top: 10px;
            content: "";
          }
          input {
            margin: 0;
            font-size: 12px;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
