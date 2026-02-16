import React from "react";
import { css } from "@emotion/react";
import { Content } from "./Hero.elements";

export const Hero = () => {
  return (
    <div
      css={css`
        height: 100vh;
      `}
    >
      <div
        css={css`
          position: relative;
          height: 100%;
        `}
      >
        <div
          css={css`
            background-image: url(/img/backgrounds/p1.svg);
            background-size: cover;
            background-position: center center;
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: -1;
          `}
        />
        <div
          css={css`
            position: absolute;
            top: 0px;
            height: 100%;
            width: 100%;
          `}
        >
          <Content></Content>
        </div>
      </div>
    </div>
  );
};
