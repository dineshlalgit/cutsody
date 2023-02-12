import React from 'react';
import styled from 'styled-components';
import service1 from 'assets/men.png';
import service2 from 'assets/women2.jpg';

import Mens from 'components/Mens';
import Womens from 'components/Womens';

import play from 'assets/play.png';
import Title from './Title';
import { useScroll } from 'components/useScroll';
import { motion } from 'framer-motion';
import { servicesAnimations } from 'animation';

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Men's",
      text: 'Shampoo and blow dry. If you are looking to celebrate your special day with us, please note we only have 3 stylists scheduled',
      image: service1,
      page: '#mens',
    },
    {
      type: "Women's",
      text: 'We bring to you a bouquet of services to remain worry free about your looks. We have made effortless beauty equipment and products.',
      image: service2,
      page: '#womens',
    },
  ];
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services">
        {data.map(({ type, text, image, page }, index) => {
          return (
            <motion.div
              className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: 'tween',
                duration: 0.8,
              }}
            >
              <div className="services__service__image">
                <img src={image} alt="Service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">{text}</p>
              <a href={page}>
                <button className="h-10 w-24 rounded-md bg-gradient-to-r from-red-600 to-amber-600 font-mono text-base text-slate-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-amber-600">
                  Menu
                </button>
              </a>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 25rem;
    margin-top: 10rem;
    gap: 10rem;
    &__service {
      padding: 1rem;

      &__image {
        margin-bottom: 1rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 3rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

export default Services;
