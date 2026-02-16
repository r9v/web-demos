import React from "react";
import { css, useTheme } from "@emotion/react";

export const Button = ({ onClick = () => {}, children }) => {
  const theme = useTheme();

  return (
    <button
      css={css`
        display: inline-flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 14px 30px 13px;
        border: none;
        border-radius: ${theme.defaultBorderRadius};
        background-color: ${theme.colors.primary};
        white-space: nowrap;
        color: ${theme.colors.light};
        cursor: pointer;
        transition: ${theme.buttonTransition};
      `}
    >
      <span
        css={css`
          font-family: ${theme.secondaryFont};
          font-weight: 700;
          font-size: 14px;
          @media (min-width: 1440px) {
            font-size: 17px;
          }
        `}
      >
        {children}
      </span>
      <span
        css={css`
          color: ${theme.colors.additional};
          display: inline-block;
          font-family: ${theme.secondaryFont};
          font-weight: 700;
          font-size: 22px;
          line-height: 18px;
          @media (min-width: 1440px) {
            font-size: 25px;
            line-height: 20px;
            padding-top: 2px;
          }
        `}
      >
        &nbsp;{" >"}
      </span>
    </button>
  );
};
