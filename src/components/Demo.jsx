import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import pricing1 from '../assets/pricing1.png';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { pricingAnimation1 } from 'animation';
import Modal from 'react-modal';

const Demo = (props) => {
  const [element, controls] = useScroll();
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);

  

  return (
    <Section ref={element} id="mens">
      <Title value="Demo" className="text-slate-50" />
      <div className="background">
        <img src={pricing1} alt="background" className="bg1" />
      </div>
      <div className="pricing__title">
        {/* <p>Find the need of your Manly Hair😁</p> */}
        {/* <h2 className='font-Roboto_Condensed font-medium'>Finding the best salon service in your city could be time consuming... 😪</h2> */}
        <h2 className="text-md font-Roboto_Condensed font-bold text-pink-600">
          Men's Professional Service's
        </h2>
      </div>
      <div className="pricing">
        <motion.div
          className="pricing__plan"
          variants={pricingAnimation1}
          animate={controls}
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
        >
          <div className="pricing__plan__name mb-10">
            <h2 className="mb-10 font-mono text-2xl">{props.category}</h2>
            <h3 className="font-serif text-white">{props.name}</h3>
          </div>

          <Modal
            isOpen={showContent1}
            onRequestClose={() => setShowContent1(false)}
          >
            <div className="pricing__plan__content mb-14">
              <ul className={`pricing__plan__content__features ${props.name}`}>
                <li>{props.value1}</li>
                <li>{props.value2}</li>
                <li>{props.value3}</li>
                <li>{props.value4}</li>
                <li>{props.value5}</li>
                <li>{props.value6}</li>
                <li>{props.value7}</li>
                <li>{props.value8}</li>
                <li>{props.value9}</li>
              </ul>
            </div>
          </Modal>
        </motion.div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  min-height: 100vh;
  padding: 1rem 1rem;
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
    margin: 5rem 10rem;
    p {
      color: #dc1c1c;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--primary-color);
      font-size: 2rem;
      margin: auto;
    }
  }
  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10rem;
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
        background-color: #181414;
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
    background-color: var(--secondary-color);
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
export default Demo;
