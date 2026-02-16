import React from "react";
import { css, useTheme } from "@emotion/react";
import { Button } from "../atoms/Button";

const Service = ({ odd, title, description, img }) => {
  const theme = useTheme();

  return (
    <section
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        padding: 50px 25px;
        position: relative;
        background-color: ${odd && theme.colors.serviceGray};
        @media (min-width: 768px) {
          flex-direction: ${odd ? "row-reverse" : "row"};
          padding: 100px 10% 170px;
        }
        @media (min-width: 1440px) {
          padding: 100px 14% 170px;
        }
        @media (min-width: 1920px) {
          height: 750px;
          padding-top: 175px;
          padding-bottom: 175px;
        }
      `}
    >
      <div
        css={css`
          margin-bottom: 45px;
          @media (min-width: 768px) {
            text-align: ${odd ? "right" : "left"};
          }
          @media (min-width: 1024px) {
            margin-bottom: 0px;
          }
        `}
      >
        <h2
          css={css`
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
          {title}
        </h2>
        <p
          css={css`
            max-width: 585px;
            margin-bottom: 18px;
            width: 80%;
            font-size: 18px;
            @media (min-width: 768px) {
              width: 40%;
              margin-left: ${odd && "auto"};
            }
            @media (min-width: 1024px) {
              margin-bottom: 36px;
              width: 60%;
            }
            @media (min-width: 1280px) {
              margin-bottom: 50px;
              width: 70%;
            }
            @media (min-width: 1440px) {
              margin-bottom: 50px;
              width: 80%;
            }
            @media (min-width: 1920px) {
              font-size: 22px;
              margin-bottom: 70px;
            }
          `}
        >
          {description}
        </p>
        <a
          href="/"
          css={css`
            display: block;
            width: fit-content;
            @media (min-width: 768px) {
              margin-left: ${odd && "auto"};
            }
          `}
        >
          <Button>READ MORE</Button>
        </a>
      </div>
      <img
        src={img}
        loading="lazy"
        css={css`
          width: 230px;
          @media (min-width: 768px) {
            position: absolute;
            right: 100px;
            top: 50%;
            transform: translateY(-50%);
            width: 240px;
            left: ${odd && "100px"};
          }
          @media (min-width: 1280px) {
            width: 270px;
            right: 130px;
            left: ${odd && "130px"};
          }
          @media (min-width: 1440px) {
            width: 330px;
            right: 14%;
            left: ${odd && "14%"};
          }
          @media (min-width: 1920px) {
            width: 400px;
          }
        `}
      />
    </section>
  );
};
const Services = ({ items }) => {
  return (
    <div id="services">
      {items.map((service, idx) => (
        <Service
          key={service.id}
          odd={idx % 2 !== 0}
          title={service.title}
          description={service.description}
          img={service.img}
        />
      ))}
    </div>
  );
};

export default Services;
