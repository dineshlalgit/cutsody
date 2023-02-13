import React, { useState } from 'react';
import styled from 'styled-components';
import service1 from 'assets/men.png';
import service2 from 'assets/women2.jpg';

import Title from './Title';
import { useScroll } from 'components/useScroll';
import { motion } from 'framer-motion';
import { servicesAnimations } from 'animation';

function Services() {
  const [element, controls] = useScroll();
  const [loadMore1, setLoadMore1] = useState(false);
  const [hideLoadMore1, setHideLoadMore1] = useState(true);
  const [hideShowLess1, setHideShowLess1] = useState(false);

  const data = [
    {
      type: "Men's",
      text1:
        "Step into our men's section and experience luxury grooming at its finest. With a commitment to quality and customer satisfaction, our skilled stylists provide a range of top-notch hair services tailored to your individual needs.",
      text2:
        'Be pampered and treated like royalty as we strive to enhance your appearance with 100% dedication and excellence. Your transformation begins here, at our salon where the customer is truly King.',
      image: service1,
      page: '#mens',
    },
    {
      type: "Women's",
      text1:
        "Unleash your inner glamour at our women's salon section. Our experienced stylists are dedicated to providing the highest quality hair services, personalized to your unique beauty needs. Relax and feel pampered as we elevate your look with 100% dedication and excellence.",
      text2:
        'You are our top priority, and we treat you like the goddess you are. Indulge in a transformative salon experience at our customer-centric salon.',
      image: service2,
      page: '#womens',
    },
  ];
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services">
        {data.map(({ type, text1, text2, text3, image, page }, index) => {
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
              <p className="services__service__description font-Roboto_Condensed text-lg text-amber-600 hover:text-slate-900">
                {text1}
              </p>
              {hideLoadMore1 && (
                <p
                  className="font-Nunito_Sans hover:font-semibold hover:text-green-500"
                  onClick={() => {
                    setLoadMore1(true);
                    setHideLoadMore1(false);
                    setHideShowLess1(true);
                  }}
                >
                  Load More...
                </p>
              )}
              {loadMore1 && (
                <p className="services__service__description font-Roboto_Condensed text-lg text-amber-600 hover:text-slate-900">
                  {text2}
                </p>
              )}
              {hideShowLess1 && (
                <p
                  className='font-Nunito_Sans hover:font-semibold hover:text-red-500'
                  onClick={() => {
                    setLoadMore1(false);
                    setHideLoadMore1(true);
                    setHideShowLess1(false);
                  }}
                >
                  Show Less...
                </p>
              )}
              <a href={page}>
                <button className="mt-3 mb-8 h-10 w-24 rounded-md bg-gradient-to-r from-red-600 to-amber-600 font-mono text-base text-slate-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-amber-600">
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
    margin-top: 8rem;
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
