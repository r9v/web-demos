import React from "react";
import { css, useTheme } from "@emotion/react";

const ConrnerIcons = () => {
  const theme = useTheme();

  return (
    <>
      <a
        href="/"
        css={css`
          position: fixed;
          z-index: 3;
          bottom: 0px;
          padding: 10px;
          height: 45px;
          width: 45px;
          background-color: ${theme.colors.primary};
          display: flex;
          justify-content: center;
          align-items: center;
          @media (min-width: 640px) {
            padding: 0px;
            height: 55px;
            width: 55px;
          }
        `}
      >
        <img
          src="/globe.svg"
          css={css`
            width: 29px;
            height: 29px;
            @media (min-width: 640px) {
              height: 35px;
              width: 35px;
            }
          `}
        />
      </a>
    </>
  );
};

export default ConrnerIcons;
