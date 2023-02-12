import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import pricing1 from '../assets/pricing1.png';
import pricing2 from '../assets/pricing2.png';
import play from '../assets/play.png';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { pricingAnimation } from 'animation';

const Womens = () => {
  const [element, controls] = useScroll();
  const plans = [
    {
      category: 'Cut & Colour',
      name: 'Cuts',
      price: 13,
    },
    {
      category: 'Cut & Colour',
      name: 'Colour',
      price: 35,
    },
    {
      category: 'Healthy Hair',
      name: 'Hair Spa',
      price: 77,
    },
    {
      category: '',
      name: 'Premium',
      price: 109,
    },
  ];

  const data = [
    {
      value: 'HAIR CUT (Cut for Every Lifestyle)',
      type: 'Cuts',
    },
    {
      value: 'HAIR CUT (Change of Style)',
      type: 'Cuts',
    },
    {
      value: 'HAIR CUT Executive',
      type: 'Cuts',
    },
    {
      value: 'HAIR WASH & BASIC BLOW DRY',
      type: 'Cuts',
    },
    {
      value: 'SHAVE',
      type: 'Cuts',
    },
    {
      value: 'BEARD DESIGNING',
      type: 'Cuts',
    },
    {
      value: 'Kids Cut',
      type: 'Cuts',
    },
    {
      value: 'HEAD SHAVE',
      type: 'Cuts',
    },
    {
      value: 'GREY COVERAGE',
      type: 'Colour',
    },
    {
      value: 'FASHION HAIR COLOUR',
      type: 'Colour',
    },
    {
      value: 'BEARD COLOURING',
      type: 'Colour',
    },
    {
      value: 'MOUSTACHE COLOURING',
      type: 'Colour',
    },
    {
      value: 'Revitalizing: For Dry & Frizzy Hair',
      type: 'Hair Spa',
    },
    {
      value: 'Healthy Hair spa For Damaged Hair',
      type: 'Hair Spa',
    },
    {
      value: 'COLOUR SHINE SPA For Colored Hair',
      type: 'Hair Spa',
    },
    {
      value: 'HAIR Fiber Treatment',
      type: 'Hair Spa',
    },
    {
      value: 'Anti Dandruff',
      type: 'Hair Remedy',
    },
    {
      value: 'Anti Hairfall',
      type: 'Hair Remedy',
    },
    {
      value: 'Smoothing',
      type: 'Hair Care',
    },
    {
      value: 'Straightening',
      type: 'Hair Care',
    },
    {
      value: 'Keratin',
      type: 'Hair Care',
    },
    {
      value: 'Kerafusion',
      type: 'Hair Care',
    },
    {
      value: 'Aroma Oil Massage',
      type: 'Hair Massage',
    },
    {
      value: 'Almond Oil Massage',
      type: 'Hair Massage',
    },
    {
      value: 'Olive Oil Massage',
      type: 'Hair Massage',
    },
    {
      value: 'Reflection Oil Massage',
      type: 'Hair Massage',
    },
    {
      value: 'Oxy Glow Beach ',
      type: 'Essential Facial',
    },
    {
      value: 'De Tan',
      type: 'Essential Facial',
    },
    {
      value: 'Regular Clean Up',
      type: 'Essential Facial',
    },
    {
      value: 'Under Eye',
      type: 'Essential Facial',
    },
    {
      value: 'Regular Clean (Acne)',
      type: 'Essential Facial',
    },
    {
      value: 'Fruit Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Aroma Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Insta Fair Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Pearl Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Shahnaz Gold Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'Shahnaz Diamond Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'Skin Whitening Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'Skin Lightening Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'O3+ Radiant & GLowing Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'ICECREAM - Regular',
      type: 'Premium (Manicure/Pedicure)',
    },
    {
      value: 'ICECREAM - Premium',
      type: 'Premium (Manicure/Pedicure)',
    },
    {
      value: 'ICECREAM - Signature',
      type: 'Premium (Manicure/Pedicure)',
    },
    {
      value: 'Regular',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Aroma',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Chocolate',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Crystal',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Pedilogix',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Foot Reflexology',
      type: 'Reflexology',
    },
    {
      value: 'Hand Reflexology',
      type: 'Reflexology',
    },
    {
      value: 'Neck & Back Massage',
      type: 'Body Care',
    },
    {
      value: 'Aroma Massage',
      type: 'Body Care',
    },
    {
      value: 'Swedish Massage',
      type: 'Body Care',
    },
    {
      value: 'Coco Butter Massage',
      type: 'Body Care',
    },
    {
      value: 'Body Exfoliation & Pack',
      type: 'Body Care',
    },
    {
      value: 'Body Steam Bath',
      type: 'Body Care',
    },
    {
      value: 'Hand Reflexology',
      type: 'Instant Package',
    },
    {
      value: 'Neck & Back Massage',
      type: 'Instant Package',
    },
    {
      value: 'Aroma Massage',
      type: 'Instant Package',
    },
    {
      value: 'Swedish Massage',
      type: 'Instant Package',
    },
    {
      value: 'Coco Butter Massage',
      type: 'Instant Package',
    },
    {
      value: 'Body Exfoliation & Pack',
      type: 'Instant Package',
    },
    {
      value: 'Body Steam Bath',
      type: 'Instant Package',
    },
    {
      value: 'Body Steam Bath',
      type: 'Instant Package',
    },
    
    {
      value: 'Hand Reflexology',
      type: 'Instant Package',
    },
    {
      value: 'Neck & Back Massage',
      type: 'Premium Package',
    },
    {
      value: 'Aroma Massage',
      type: 'Premium Package',
    },
    {
      value: 'Swedish Massage',
      type: 'Premium Package',
    },
    {
      value: 'Coco Butter Massage',
      type: 'Premium Package',
    },
    {
      value: 'Body Exfoliation & Pack',
      type: 'Premium Package',
    },
    {
      value: 'Body Steam Bath',
      type: 'Premium Package',
    },
    {
      value: 'Body Steam Bath',
      type: 'Premium Package',
    },
    {
      value: 'Body Steam Bath',
      type: 'Premium Package',
    },
    
    {
      value: 'Body Steam Bath',
      type: 'Makeup & Hairstyle',
    },
    {
      value: 'Body Steam Bath',
      type: 'Makeup & Hairstyle',
    },
    {
      value: 'Body Steam Bath',
      type: 'Makeup & Hairstyle',
    },
  ];

  return (
    <Section ref={element} id="mens">
      <Title value="Men's" />
      <div className="background">
        <img src={pricing1} alt="background" className="bg1" />
        <img src={pricing2} alt="background" className="bg2" />
      </div>
      <div className="pricing__title">
        <p>Find your pricing plan</p>
        <h2>Finding the best salons in your city could be time consuming..</h2>
      </div>
      <div className="pricing">
        {plans.map(({ name, category, price }, index) => {
          return (
            <motion.div
              className="pricing__plan"
              key={index}
              variants={pricingAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: 'tween',
                duration: 0.8,
              }}
            >
              <div className="pricing__plan__name">
                <h2 className='text-2xl mb-10 font-mono'>{category}</h2>
                <h3 className='text-white font-serif'>{name}</h3>
              </div>
              <div className="pricing__plan__content">
                <ul className={`pricing__plan__content__features ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <Fragment key={index2}>
                        { 
                        name === 'Cuts' ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Colour' ? (
                          type === 'Colour' ? (
                            <li>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Hair Spa' ? (
                          type === 'Hair Spa' ? (
                            <li>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Something'
                  }
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
  .background {
    .bg1 {
      position: absolute;
      top: -60%;
      left: -5%;
      z-index: -1;
    }
    .bg2 {
      position: absolute;
      right: 0;
      bottom: 50rem;
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
      /* &:nth-child(2) {
        .pricing__plan__content {
          padding: 0rem;
          border-left: 0.2rem gold;
          border-right: 0.2rem gold;
        }
      } */
      &__name {
        background-color: black;
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--secondary-color);
        h3 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: #fff;
          display: flex;
          position: relative;
          p {
            font-size: 4rem;
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
          gap: 0.1rem;
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
            font-size: 1.3rem;
            color: gold;
          }
          h3 {
            font-size: 1.5rem;
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
export default Womens;
