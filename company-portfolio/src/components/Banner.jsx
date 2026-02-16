import React from "react";
import { css, useTheme } from "@emotion/react";
import { Button } from "../atoms/Button";

export const Banner = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 50px 24px;
        background-color: ${theme.colors.additional};
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        @media (min-width: 1024px) {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          padding: 120px 8%;
        }
        @media (min-width: 1280px) {
          padding: 120px 10%;
        }
        @media (min-width: 1440px) {
          padding: 120px 14%;
        }
      `}
    >
      <div
        css={css`
          color: ${theme.colors.primary};
          text-align: center;
          margin-bottom: 25px;
          @media (min-width: 1024px) {
            margin: 0px 100px 0px 0px;
            text-align: left;
          }
        `}
      >
        <h2
          css={css`
            margin-block: 0px;
            font-size: 32px;
            font-weight: 700;
            line-height: 1;
            @media (min-width: 1024px) {
              font-size: 42px;
            }
            @media (min-width: 1280px) {
              font-size: 60px;
            }
            @media (min-width: 1920px) {
              font-size: 90px;
            }
          `}
        >
          Need a{" "}
          <strong
            css={css`
              font-weight: 900;
            `}
          >
            skilled team
          </strong>
        </h2>
        <h2
          css={css`
            margin-block: 0px;
            font-size: 32px;
            font-weight: 700;
            line-height: 1;
            @media (min-width: 1024px) {
              font-size: 42px;
            }
            @media (min-width: 1280px) {
              font-size: 60px;
            }
            @media (min-width: 1920px) {
              font-size: 90px;
            }
          `}
        >
          for your project?
        </h2>
      </div>
      <Button>Book discovery call</Button>
    </div>
  );
};
