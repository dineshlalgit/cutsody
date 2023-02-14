import React from 'react';
import styled from 'styled-components';
import mens from '../data/mens';
import MensCover from './MensCover';
import Title from './Title';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { pricingAnimation1 } from 'animation';

const mensData = mens.map((mens, index) => {
  return <MensCover key={index} {...mens} />;
});

const Mens = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <Section ref={element} id="mens">
        <Title value="Mens" />
        <div className="background"></div>
        <div className="pricing__title">
          <p>Find your hair needs 😁</p>
          <h2 className="font-Roboto_Condensed font-medium">
            Finding the best salon service in your city could be time
            consuming... 😪
          </h2>
          <h4 className="text-md font-Roboto_Condensed font-bold text-pink-600">
            We have you covered 🥳✌🏻{' '}
          </h4>
        </div>
        <motion.div
          variants={pricingAnimation1}
          animate={controls}
          transition={{
            delay: 0.3,
            type: 'tween',
            duration: '0.8',
          }}
          className="p-auto mx-auto flex flex-wrap items-center justify-center gap-10 py-10 font-Roboto_Condensed text-lg font-normal"
        >
          {mensData}
        </motion.div>
      </Section>
    </>
  );
};

const Section = styled.section`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  min-height: 100vh;
  padding: 3rem 0.5rem;
  position: relative;
  overflow: hidden;
  .background {
    .bg1 {
      position: absolute;
      top: -60%;
      left: -5%;
      z-index: -1;
    }
  }
  .pricing__title {
    margin: 3rem 13rem;
    p {
      color: #dc1c1c;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 5rem;
    padding: 0 6rem;
    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0rem;
          border-left: 0.2rem gold;
          border-right: 0.2rem gold;
        }
      }
      &__name {
        background-color: black;
        width: 15rem;
        height: 15rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--secondary-color);
        h3 {
          font-size: 1.4rem;
          line-height: 2rem;
        }
        &__price {
          color: #dc3333;
          display: flex;
          position: relative;
          p {
            font-size: 0rem;
            font-weight: bold;
          }
        }
      }
      &__content {
        &__features {
          list-style-type: none;
          text-align: center;
          font-weight: 500;
          color: gold;
          display: flex;
          flex-direction: column;
          .line {
            text-decoration: line-through;
          }
        }
        &__actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-color);
          gap: 0.5rem;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    background-color: whitesmoke;
    .pricing__title {
      margin: 1rem;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.3rem;
      }
    }
    .background {
      display: none;
    }
    .pricing {
      grid-template-columns: 1fr;
      padding: 1.5rem;
      gap: -100rem;
      &__plan {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.3rem;
        &__name {
          height: 12rem;
          width: 12rem;
          h2 {
            font-size: 1.1rem;
            color: gold;
          }
          h3 {
            font-size: 1.3rem;
          }
          &__price {
            p {
              font-size: 1rem;
            }
          }
        }
        &__content {
          &__features {
            color: white;
          }
        }
        &:nth-child(2) {
          .pricing__plan__content {
            padding: 0rem;
            border: none;
          }
        }
      }
    }
  }
`;

export default Mens;
