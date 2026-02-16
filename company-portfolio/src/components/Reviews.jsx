import React from "react";
import { css } from "@emotion/react";
import Content from "./Reviews.elements";

const Reviews = ({ items }) => {
  return (
    <div
      css={css`
        height: 999px;
        width: 100%;
        @media (min-width: 1024px) {
          height: 790px;
        }
        @media (min-width: 1280px) {
          height: 720px;
        }
        @media (min-width: 1440px) {
          height: 790px;
        }
        @media (min-width: 1920px) {
          height: 810px;
        }
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
            position: absolute;
            top: 0px;
            left: 0px;
            background-image: url(/img/backgrounds/p2.svg);
            background-size: cover;
            background-position: center center;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: -1;
          `}
        ></div>
        <Content items={items} />
      </div>
    </div>
  );
};

export default Reviews;
