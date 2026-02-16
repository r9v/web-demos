import React, { useState } from "react";
import { css, useTheme } from "@emotion/react";

export const Icon = ({ src }) => {
  return (
    <a
      href="/"
      css={css`
        margin-right: 16px;
      `}
    >
      <img
        src={src}
        alt=""
        css={css`
          width: 42px;
          height: 42px;
        `}
      />
    </a>
  );
};

const ListItem = ({ text, isOpen }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        font-size: 18px;
        display: ${isOpen ? "initial" : "none"};
        color: ${theme.colors.light};
        margin-bottom: 14px;
        white-space: nowrap;
        transition: ${theme.defaultTransition};
        @media (min-width: 640px) {
          display: initial;
        }
      `}
    >
      {text}
    </div>
  );
};

const ExpandableList = ({ name, items }) => {
  const [isOpen, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        @media (min-width: 640px) {
          margin-right: 50px;
          margin-bottom: 0px;
        }
        @media (min-width: 1024px) {
        }
        @media (min-width: 1280px) {
          margin-right: 45px;
        }
        @media (min-width: 1440px) {
          margin-right: 50px;
        }
      `}
    >
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        css={css`
          margin-right: 16px;
          color: ${theme.colors.light};
          text-transform: uppercase;
          margin-bottom: 20px;
          transition: ${theme.defaultTransition};
          font-weight: 900;
          letter-spacing: 0.05em;
          font-size: 20px;
          cursor: pointer;
          @media (min-width: 1024px) {
            margin-right: 0px;
          }
          @media (min-width: 1440px) {
            font-size: 22px;
          }
        `}
      >
        {name}
        <span
          css={css`
            display: inline-block;
            vertical-align: middle;
            color: ${theme.colors.additional};
            transition: ${theme.buttonTransition};
            transform: rotate(90deg) translate(-6px, 0px);
            font-family: ${theme.secondaryFont};
            font-weight: 700;
            font-size: 1.2em;
            @media (min-width: 640px) {
              display: none;
            }
          `}
        >
          &nbsp; &gt;
        </span>
      </div>
      {items.map((item) => {
        return <ListItem isOpen={isOpen} text={item.text} key={item.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-image: url(/img/backgrounds/p5.svg);
      `}
    >
      <div
        css={css`
          width: 85%;
          margin: 0px auto;
          padding: 50px 0px;
          display: flex;
          flex-flow: column wrap;
          justify-content: space-between;
          @media (min-width: 768px) {
            padding-top: 80px;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (min-width: 1280px) {
            width: 100%;
            margin: 0px;
            flex-wrap: nowrap;
            padding: 80px 150px;
          }
          @media (min-width: 1440px) {
            padding: 60px 200px;
          }
          @media (min-width: 1920px) {
            padding: 60px 275px;
            justify-content: space-around;
          }
        `}
      >
        <div
          css={css`
            @media (min-width: 640px) {
              margin-right: 70px;
            }
            @media (min-width: 768px) {
              margin-right: 20px;
            }
            @media (min-width: 1280px) {
              margin-right: 45px;
            }
            @media (min-width: 1440px) {
              width: 175px;
            }
            @media (min-width: 1920px) {
            }
          `}
        >
          <img
            src="lo2.svg"
            css={css`
              width: 175px;
              height: 92px;
              @media (min-width: 768px) {
                width: 132px;
                height: 75px;
              }
              @media (min-width: 1920px) {
                width: 175px;
                height: 92px;
              }
            `}
          />
          <p
            css={css`
              font-size: 18px;
              color: ${theme.colors.light};
              margin: 35px 0px;
              @media (min-width: 640px) {
                margin: 40px 0px 56px;
                width: 250px;
              }
              @media (min-width: 1280px) {
                margin: 36px 0px 60px;
              }
              @media (min-width: 1440px) {
                width: auto;
                margin: 32px 0px 60px;
              }
              @media (min-width: 1920px) {
                font-size: 22px;
                width: 260px;
                margin: 42px 0px 60px;
              }
            `}
          >
            Bringing ideas to life using latest technology and beautiful design
          </p>
          <div
            css={css`
              display: flex;
              margin-bottom: 56px;
              @media (min-width: 1280px) {
                margin-bottom: initial;
              }
            `}
          >
            <Icon src="/fb.svg" />
            <Icon src="/gh.svg" />
            <Icon src="/lii.svg" />
          </div>
        </div>
        <ExpandableList
          name="Services"
          items={[
            { id: 1, text: "Product Design" },
            { id: 2, text: "Mobile Development" },
            { id: 3, text: "Web Development" },
            { id: 4, text: "Team Enhancement" },
          ]}
        />
        <ExpandableList
          name="Company"
          items={[
            { id: 1, text: "Careers" },
            { id: 2, text: "Contact" },
            { id: 3, text: "About" },
          ]}
        />
        <ExpandableList
          name="Technologies"
          items={[
            { id: 1, text: "Flutter" },
            { id: 2, text: "Kotlin" },
            { id: 3, text: "Swift" },
            { id: 4, text: "Google Cloud Platform" },
            { id: 5, text: "Node.js" },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
