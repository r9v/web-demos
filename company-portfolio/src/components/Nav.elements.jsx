import React from "react";
import { css, useTheme } from "@emotion/react";
import { Button } from "../atoms/Button";

export const Logo = () => {
  return (
    <a
      href="/"
      css={css`
        height: 60px;
        width: 100px;
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={css`
          height: 100%;
          width: 100%;
          background-image: url(/L4.svg);
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
        `}
      ></div>
    </a>
  );
};

export const Links = ({
  open = true,
  links = [
    { id: 1, text: "Services", link: "/services/" },
    { id: 2, text: "Featured projects", link: "/projects/" },
    { id: 3, text: "Blog", link: "/blog/" },
  ],
}) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        transition: ${theme.defaultTransition};
        visibility: ${open ? "visible" : "hidden"};
        opacity: ${open ? 1 : 0};
        display: flex;
        flex-direction: column;
        position: fixed;
        top: ${theme.navbarMobileHeight};
        left: 0px;
        width: 100%;
        padding-left: 16px;
        padding-bottom: 16px;
        background-color: ${theme.colors.light};

        @media (min-width: 1024px) {
          visibility: visible;
          opacity: 1;
          position: initial;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          padding: initial;
          background-color: transparent;
        }
      `}
    >
      {links.map((link) => {
        return (
          <a
            key={link.id}
            href="/"
            css={css`
              color: ${theme.colors.primary};
              margin: 10px 16px;
              transition: ${theme.defaultTransition};
              font-size: 16px;
              @media (min-width: 1024px) {
                margin-left: 0px;
                margin-right: 30px;
              }
              @media (min-width: 1280px) {
                margin-right: 36px;
              }
              @media (min-width: 1440px) {
                margin-right: 50px;
                font-size: 18px;
              }
              @media (min-width: 1920px) {
                margin-right: 70px;
              }
            `}
          >
            {link.text}
          </a>
        );
      })}
      <a
        href="/"
        css={css`
          margin-left: 16px;
          @media (min-width: 1280px) {
            margin-left: 34px;
          }
          @media (min-width: 1440px) {
            margin-left: 20px;
          }
          @media (min-width: 1920px) {
            margin-left: 0px;
          }
        `}
      >
        <Button>ESTIMATE PROJECT</Button>
      </a>
    </div>
  );
};

export const MenuButton = ({ onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      css={css`
        width: 50px;
        height: 60px;
        background-image: url(/menu-icon.svg);
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        cursor: pointer;
        @media (min-width: 1024px) {
          display: none;
        }
      `}
    />
  );
};
