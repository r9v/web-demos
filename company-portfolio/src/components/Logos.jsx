import React from "react";
import { css, useTheme } from "@emotion/react";

const Logo = ({ src, w, h, wideScreenOnly }) => {
  const theme = useTheme();

  return (
    <a
      href="/"
      css={css`
        justify-content: center;
        display: ${wideScreenOnly ? "none" : "flex"};
        align-items: center;
        @media (min-width: 1280px) {
          margin: 0px 25px;
          display: initial;
        }
      `}
    >
      <img
        src={src}
        css={css`
          place-self: center;
          width: ${w};
          height: ${h};
          @media (min-width: 1024px) {
            width: 75%;
            height: auto;
          }
          @media (min-width: 1440px) {
            width: auto;
          }
        `}
      />
    </a>
  );
};

const Logos = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.light};
        width: 100%;
        padding: 50px 25px 0px;
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
        place-items: center;
        padding-bottom: 50px;
        row-gap: 50px;

        @media (min-width: 768px) {
          display: flex;
          padding: 72px 50px;
          justify-content: space-around;
          padding-bottom: 50px;
        }
        @media (min-width: 1024px) {
          padding: 75px 5% 0px;
          padding-bottom: 50px;
        }
        @media (min-width: 1280px) {
          padding: 75px 5% 0px;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        @media (min-width: 1440px) {
          padding: 100px 5% 0px;
          padding-bottom: 100px;
        }
      `}
    >
      <Logo src="/img/client-logos/q4.svg" w="103px" h="21px" />
      <Logo src="/img/client-logos/q3.svg" w="91px" h="35px" />
      <Logo src="/img/client-logos/q2.svg" w="52px" h="47px" />
      <Logo src="/img/client-logos/q1.svg" w="103px" h="17px" />
      <Logo src="/img/client-logos/q7.svg" w="103px" h="17px" wideScreenOnly />
      <Logo src="/img/client-logos/q6.svg" w="103px" h="17px" wideScreenOnly />
      <Logo src="/img/client-logos/q5.svg" w="103px" h="17px" wideScreenOnly />
    </div>
  );
};

export default Logos;
