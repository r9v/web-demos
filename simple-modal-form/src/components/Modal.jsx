import React from "react";
import { css, useTheme } from "@emotion/react";
import { Button } from "../atoms/Button";
import Form from "./Form";
import { useDisclosure } from "react-use-disclosure";

const Header = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.lightGray};
        width: 100%;
        padding: 0.8em;
      `}
    >
      Export report
    </div>
  );
};

const Content = ({ close }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 12px;
      `}
    >
      <Header />
      <Form close={close} />
    </div>
  );
};

const Modal = () => {
  const theme = useTheme();
  const { isOpen, open, close } = useDisclosure();

  return (
    <section
      css={css`
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Button onClick={open}>OPEN MODAL</Button>
      <div
        css={css`
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          display: ${isOpen ? "flex" : "none"};
          align-items: center;
          justify-content: center;
          background-color: ${theme.colors.darkGray}66;
        `}
      >
        <div
          css={css`
            background-color: ${theme.colors.gray};
            width: 100%;
            max-width: 600px;
            border-top: 1px solid ${theme.colors.darkGray};
            border-bottom: 1px solid ${theme.colors.darkGray};
            transition: ${theme.defaultTransition};

            @media (min-width: 510px) {
              width: 80%;
              border: 1px solid ${theme.colors.darkGray};
            }
            @media (min-width: 768px) {
              width: 70%;
            }
            @media (min-width: 1024px) {
              width: 50%;
            }
          `}
        >
          <Content close={close} />
        </div>
      </div>
    </section>
  );
};

export default Modal;
