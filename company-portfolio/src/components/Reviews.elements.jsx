import React, { useState } from "react";
import { css, useTheme } from "@emotion/react";

const Content = ({ items }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        position: absolute;
        top: 0px;
        height: 100%;
        width: 100%;
        padding: 90px 26px 0px;
        @media (min-width: 640px) {
          padding: 120px 10% 0px;
        }
        @media (min-width: 1024px) {
          padding: 120px 5% 100px;
        }
        @media (min-width: 1280px) {
          padding: 120px 10% 100px;
        }
        @media (min-width: 1440px) {
          padding: 120px 14% 100px;
        }
      `}
    >
      <h2
        css={css`
          color: ${theme.colors.light};
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: ${theme.colors.light};
          margin-bottom: 50px;
          margin-top: 0px;
          position: relative;
          font-weight: 700;
          line-height: 1;
          padding-bottom: 10px;
          font-size: 32px;
          @media (min-width: 1024px) {
            font-size: 40px;
          }
          @media (min-width: 1280px) {
            font-size: 48px;
          }
          @media (min-width: 1440px) {
            font-size: 54px;
          }
          @media (min-width: 1920px) {
            font-size: 64px;
          }
        `}
      >
        What our clients say
        <div
          css={css`
            height: 3px;
            width: 114px;
            background-color: ${theme.colors.additional};
            position: absolute;
            left: 0px;
            bottom: -2px;
            @media (min-width: 1024px) {
              width: 160px;
            }
            @media (min-width: 1280px) {
              width: 185px;
            }
            @media (min-width: 1440px) {
              width: 215px;
            }
          `}
        ></div>
      </h2>
      <Carousel items={items} />
    </div>
  );
};

const CarouseleButton = ({ active, onClick = () => {} }) => {
  const theme = useTheme();

  return (
    <div
      onClick={onClick}
      css={css`
        width: 30px;
        height: 30px;
        margin: 0px 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: ${theme.defaultTransition};
      `}
    >
      <div
        css={css`
          transition: ${theme.defaultTransition};
          width: 100%;
          height: 2px;
          background-color: ${active
            ? theme.colors.additional
            : theme.colors.nonactive};
        `}
      ></div>
    </div>
  );
};

const LeftColumn = ({ items }) => {
  const theme = useTheme();
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div
      css={css`
        position: relative;
        display: block;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 100px;
        box-sizing: border-box;
        @media (min-width: 1024px) {
          display: flex;
          width: 885px;
          padding-top: 16px;
          padding-right: 45px;
        }
        @media (min-width: 1280px) {
          padding-top: 50px;
        }
      `}
    >
      <img
        src="quote.svg"
        css={css`
          width: 36px;
          height: 28px;
          margin-bottom: 10px;
        `}
      />
      <p
        css={css`
          color: ${theme.colors.light};
          margin: 0px;
          overflow-y: auto;
          height: 220px;
          font-size: 20px;
          @media (min-width: 768px) {
            height: 150px;
          }
          @media (min-width: 1024px) {
            height: 170px;
          }
          @media (min-width: 1280px) {
            height: 150px;
          }
          @media (min-width: 1920px) {
            font-size: 30px;
            height: 250px;
          }
        `}
      >
        {items[activeItem].text}
      </p>
      <p
        css={css`
          color: rgb(204, 204, 204);
          margin-top: 36px;
          font-size: 13px;
          @media (min-width: 768px) {
            margin-top: 16px;
          }
          @media (min-width: 1024px) {
            text-align: right;
            margin-top: 60px;
          }
        `}
      >
        <span
          css={css`
            font-size: 16px;
            color: ${theme.colors.additional};
          `}
        >
          {items[activeItem].name}
        </span>
        <br />
        {items[activeItem].role}
        <br />
        {items[activeItem].company}
      </p>
      <div
        css={css`
          width: 100%;
          display: flex;
          margin-top: 28px;
          justify-content: center;
          align-items: center;
          @media (min-width: 768px) {
            width: auto;
            position: absolute;
            right: 60px;
            bottom: 10px;
            margin-top: 0px;
          }
        `}
      >
        <CarouseleButton
          active={activeItem == 0}
          onClick={() => {
            setActiveItem(0);
          }}
        />
        <CarouseleButton
          active={activeItem == 1}
          onClick={() => {
            setActiveItem(1);
          }}
        />
        <CarouseleButton
          active={activeItem == 2}
          onClick={() => {
            setActiveItem(2);
          }}
        />
      </div>
    </div>
  );
};

const RightColumn = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        color: ${theme.colors.light};
        border-bottom-style: solid;
        border-color: ${theme.colors.additional};
        border-bottom-width: 0.5px;
        padding-bottom: 36px;

        @media (min-width: 1024px) {
          height: fit-content;
          padding: 60px 0px 100px 50px;
          border-left-style: solid;
          border-left-width: 2px;
          border-bottom: none;
        }
      `}
    >
      <div
        css={css`
          width: 90%;
          margin-bottom: 30px;
          display: grid;
          grid-template-columns: auto 170px;
          grid-template-rows: 25px auto;
          @media (min-width: 640px) {
            width: 50%;
            grid-template-columns: auto 205px;
          }
          @media (min-width: 1024px) {
            width: 100%;
            grid-template-columns: auto 205px;
          }
        `}
      >
        <div
          css={css`
            height: 40px;
            width: 78px;
            margin-right: 30px;
            display: flex;
            align-items: center;
            @media (min-width: 640px) {
              height: 54px;
              width: 105px;
            }
          `}
        >
          <h1
            css={css`
              margin: 0;
              font-size: 54px;
              font-weight: 900;
              @media (min-width: 1024px) {
                font-size: 60px;
              }
            `}
          >
            5.0
          </h1>
        </div>
        <div
          css={css`
            background-image: url(rating.svg);
            background-size: cover;
            background-position: center center;
            width: 150px;
            height: 20px;
            margin-left: -8px;
            @media (min-width: 768px) {
              width: 160px;
              height: 22px;
            }
          `}
        />
        <span
          css={css`
            color: ${theme.colors.light};
            grid-area: 2 / 2 / 2 / 2;
            align-self: center;
            font-size: 16px;
            @media (min-width: 1024px) {
              font-size: 20px;
            }
          `}
        >
          Clients say we deliver!
        </span>
      </div>
      <div
        css={css`
          width: 125px;
          height: 37px;
          @media (min-width: 1024px) {
            width: 154px;
            height: 45px;
          }
        `}
      >
        <h1
          css={css`
            margin: 0;
            font-size: 44px;
            color: ${theme.colors.additional};
            font-weight: 900;

            @media (min-width: 1024px) {
              font-size: 60px;
            }
          `}
        >
          Clutch
        </h1>
      </div>
    </div>
  );
};

const Carousel = ({ items }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column-reverse;

        @media (min-width: 1024px) {
          flex-direction: row;
        }
      `}
    >
      <LeftColumn items={items} />
      <RightColumn />
    </div>
  );
};

export default Content;
