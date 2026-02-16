import React from "react";
import { css, useTheme } from "@emotion/react";

const TextContent = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        margin-left: 25px;
        margin-right: 25px;

        @media (min-width: 640px) {
          margin-left: 14%;
        }
      `}
    >
      <span
        css={css`
          position: absolute;
          margin: -45px 0px 0px -16px;
          user-select: none;
          color: ${theme.colors.nonactive};
          opacity: 0.1;
          text-transform: lowercase;
          font-family: ${theme.secondaryFont};
          font-weight: 700;
          font-size: 60px;
          @media (min-width: 640px) {
            margin-left: -75px;
          }
          @media (min-width: 1024px) {
            margin-top: -54px;
            font-size: 70px;
          }
          @media (min-width: 1280px) {
            margin-bottom: -132px;
            font-size: 85px;
          }
          @media (min-width: 1440px) {
            margin: -75px 0px 0px -136px;
            font-size: 100px;
          }
          @media (min-width: 1920px) {
            margin: -100px 0px 0px -180px;
            font-size: 126px;
          }
        `}
      >
        services
      </span>
      <h1
        css={css`
          font-size: 42px;
          line-height: 1.4;
          @media (min-width: 640px) {
            margin: 16px 0px;
          }
          @media (min-width: 1280px) {
            font-size: 65px;
            line-height: 75px;
          }
          @media (min-width: 1920px) {
            font-size: 4.5vw;
            line-height: 1.05;
          }
        `}
      >
        High-quality product design and development
      </h1>
      <p
        css={css`
          display: none;
          font-size: 18px;
          margin-bottom: 60px;
          @media (min-width: 640px) {
            margin-bottom: 35px;
            display: block;
            width: 450px;
          }
          @media (min-width: 1440px) {
            font-size: 20px;
            width: 575px;
          }
          @media (min-width: 1920px) {
            font-size: 22px;
            margin-bottom: 48px;
          }
        `}
      >
        We take care of your project from start to finish, meaning you'll never
        have to worry about a thing
      </p>
    </div>
  );
};

const ScrollDown = () => {
  const theme = useTheme();

  return (
    <div
      onClick={() => {
        document.getElementById("services").scrollIntoView({
          behavior: "smooth",
        });
      }}
      css={css`
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        height: 36px;
        text-align: center;
        color: ${theme.colors.primary};
        cursor: pointer;
        @media (min-width: 1024px) {
          bottom: 32px;
        }
        @media (min-width: 1920px) {
          bottom: 64px;
        }
      `}
    >
      <span
        css={css`
          font-size: 14px;
          @media (min-width: 1920px) {
            font-size: 16px;
          }
        `}
      >
        SCROLL DOWN
      </span>
      <span
        css={css`
          display: block;
          padding-left: 25px;
          color: ${theme.colors.secondary};
          transform: rotate(90deg);
          font-family: ${theme.secondaryFont};
          font-size: 38px;
          font-weight: 700;
          line-height: 0;
        `}
      >
        {">"}
      </span>
    </div>
  );
};

export const Content = () => {
  const theme = useTheme();

  return (
    <main
      css={css`
        padding-top: calc(48px + ${theme.navbarHeight});
        width: 100%;
        height: 100%;

        @media (min-width: 640px) {
          padding-top: calc(12vh + ${theme.navbarHeight});
        }
        @media (min-width: 1280px) {
          padding-top: calc(12vh + ${theme.navbarHeight});
        }
        @media (min-width: 1440px) {
          padding-top: calc(20vh + ${theme.navbarHeight});
        }
      `}
    >
      <TextContent />
      <ScrollDown />
    </main>
  );
};
