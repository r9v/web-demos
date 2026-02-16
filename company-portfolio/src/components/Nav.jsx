import React, { useEffect, useState } from "react";
import { css, useTheme } from "@emotion/react";
import { Links, Logo, MenuButton } from "./Nav.elements";

export const Nav = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let prevScroll;
    const onScroll = () => {
      setMenuOpen(false);
      if (window.scrollY === 0) {
        setAtTop(true);
        setHidden(false);
        return;
      }
      setAtTop(false);
      if (window.scrollY < prevScroll) setHidden(false);
      else setHidden(true);
      prevScroll = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: ${atTop ? "absolute" : "fixed"};
        height: ${theme.navbarMobileHeight};
        top: ${atTop || !hidden ? 0 : `calc(-1 * ${theme.navbarMobileHeight})`};
        left: 0;
        right: 0;
        width: 100%;
        z-index: 3;
        padding: 10px 26px;
        transition: ${theme.defaultTransition};
        background-color: ${atTop && !menuOpen
          ? undefined
          : `${theme.colors.light}`};
        box-shadow: ${atTop
          ? undefined
          : "rgb(0 0 0 / 15%) 0px 20px 22px -22px"};
        background-color: ${!atTop && theme.colors.light};

        @media (min-width: 1280px) {
          height: ${theme.navbarHeight};
          top: ${atTop || !hidden ? 0 : `calc(-1 * ${theme.navbarHeight})`};
          padding: 10px 80px 10px 90px;
        }
        @media (min-width: 1440px) {
          padding: 10px 68px 10px 120px;
        }
        @media (min-width: 1920px) {
          padding: 10px 7%;
        }
      `}
    >
      <Logo />
      <Links open={menuOpen} />
      <MenuButton onClick={() => setMenuOpen(!menuOpen)} />
    </nav>
  );
};
