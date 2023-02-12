import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import pricing1 from '../assets/pricing1.png';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { pricingAnimation1 } from 'animation';

const Womens = () => {
  const [element, controls] = useScroll();
  const plans = [
    {
      category: 'Cut & Colour',
      name: 'Cuts',
    },
    {
      category: 'Cut & Colour',
      name: 'Colour',
    },
    {
      category: 'Healthy Hair',
      name: 'Hair Spa',
    },
    {
      category: 'Healthy Hair',
      name: 'Hair Care',
    },
    {
      category: 'Healthy Hair',
      name: 'Hair Massage',
    },
    {
      category: 'Facial',
      name: 'Essential Facial',
    },
    {
      category: 'Facial',
      name: 'Luxury Facial',
    },
    {
      category: 'Manicure/Pedicure',
      name: 'Premium',
    },
    {
      category: 'Manicure/Pedicure',
      name: 'Regular',
    },
    {
      category: 'Reflexology',
      name: 'Reflexology',
    },
    {
      category: 'Body Care',
      name: 'Body Care',
    },
    {
      category: 'Groom Package',
      name: 'Instant Package',
    },
    {
      category: 'Groom Package',
      name: 'Premium Package',
    },
    {
      category: 'Groom Package',
      name: 'Makeup & Hairstyle',
    },
  ];

  const data = [
    {
      value: 'Hair Cut ~ Cut for Every Lifestyle',
      type: 'Cuts',
    },
    {
      value: 'Hair Cut ~ Change of Style',
      type: 'Cuts',
    },
    {
      value: 'Hair Cut Executive',
      type: 'Cuts',
    },
    {
      value: 'Hair Wash & Basic Blow Dry',
      type: 'Cuts',
    },
    {
      value: 'Shave ~ As Smooth As Possible',
      type: 'Cuts',
    },
    {
      value: 'Beard Designing ~ Look cool! Flaunt differently',
      type: 'Cuts',
    },
    {
      value: 'Kids Cut ~ Below 5 Yrs',
      type: 'Cuts',
    },
    {
      value: 'Head Shave',
      type: 'Cuts',
    },
    {
      value: 'Grey Coverage ~ Ammonia/Ammonia free',
      type: 'Colour',
    },
    {
      value: 'Fashion Hair Colour ~ Ammonia/Ammonia free',
      type: 'Colour',
    },
    {
      value: 'Streaking ~ Per Streak',
      type: 'Colour',
    },
    {
      value: 'Beard Colouring',
      type: 'Colour',
    },
    {
      value: 'Moustache Colouring',
      type: 'Colour',
    },
    {
      value: 'Revitalizing ~ Dry & Frizzy Hair',
      type: 'Hair Spa',
    },
    {
      value: 'Healthy Hair Spa ~ Damaged Hair',
      type: 'Hair Spa',
    },
    {
      value: 'Colour Shine Spa ~ Colored Hair',
      type: 'Hair Spa',
    },
    {
      value: 'Hair Fiber Treatment',
      type: 'Hair Spa',
    },
    {
      value: 'Anti Dandruff',
      type: 'Hair Care',
    },
    {
      value: 'Anti Hairfall',
      type: 'Hair Care',
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
      value: 'Aroma Oil Massage ~ 30 mins',
      type: 'Hair Massage',
    },
    {
      value: 'Almond Oil Massage ~ 30 mins',
      type: 'Hair Massage',
    },
    {
      value: 'Olive Oil Massage ~ 30 mins',
      type: 'Hair Massage',
    },
    {
      value: 'Reflection Oil Massage ~ 30 mins',
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
      type: 'Premium',
    },
    {
      value: 'ICECREAM - Premium',
      type: 'Premium',
    },
    {
      value: 'ICECREAM - Signature',
      type: 'Premium',
    },
    {
      value: 'Regular',
      type: 'Regular',
    },
    {
      value: 'Aroma',
      type: 'Regular',
    },
    {
      value: 'Chocolate',
      type: 'Regular',
    },
    {
      value: 'Crystal Spa',
      type: 'Regular',
    },
    {
      value: 'Pedilogix',
      type: 'Regular',
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
      value: 'Neck & Back Massage ~ 30 mins / 45 mins',
      type: 'Body Care',
    },
    {
      value: 'Aroma Massage ~ 45 mins / 60 mins',
      type: 'Body Care',
    },
    {
      value: 'Swedish Massage ~ 45 mins / 60 mins',
      type: 'Body Care',
    },
    {
      value: 'Coco Butter Massage ~ 45 mins / 60 mins',
      type: 'Body Care',
    },
    {
      value: 'Body Exfoliation & Pack ~ 60 mins',
      type: 'Body Care',
    },
    {
      value: 'Body Steam Bath',
      type: 'Body Care',
    },
    {
      value: 'Hair Cut',
      type: 'Instant Package',
    },
    {
      value: 'Hair Spa',
      type: 'Instant Package',
    },
    {
      value: 'Shave Bleach ~ Face & Neck',
      type: 'Instant Package',
    },
    {
      value: 'Skin Whitening Facial',
      type: 'Instant Package',
    },
    {
      value: 'Manicure',
      type: 'Instant Package',
    },
    {
      value: 'Pedicure',
      type: 'Instant Package',
    },
    {
      value: 'Body Massage',
      type: 'Instant Package',
    },
    {
      value: 'Hair Cut',
      type: 'Premium Package',
    },
    {
      value: 'Hair Spa',
      type: 'Premium Package',
    },
    {
      value: 'Shave',
      type: 'Premium Package',
    },
    {
      value: 'Bleach ~ Face & Neck',
      type: 'Premium Package',
    },
    {
      value: 'Skin Lightening Facial',
      type: 'Premium Package',
    },
    {
      value: 'Body Polish Treatment',
      type: 'Premium Package',
    },
    {
      value: 'Manicure',
      type: 'Premium Package',
    },
    {
      value: 'Pedicure',
      type: 'Premium Package',
    },
    {
      value: 'Krylon',
      type: 'Makeup & Hairstyle',
    },
    {
      value: 'MAC',
      type: 'Makeup & Hairstyle',
    },
    {
      value: 'Bridal Makeup Outdoor',
      type: 'Makeup & Hairstyle',
    },
  ];

  return (
    <Section ref={element} id="mens">
      <Title value="Men's" />
      <div className="background">
        <img src={pricing1} alt="background" className="bg1" />
      </div>
      <div className="pricing__title">
        <p>Find your hair needs 😁</p>
        <h2 className='font-Roboto_Condensed font-medium'>Finding the best salon service in your city could be time consuming... 😪</h2>
        <h4 className='text-md text-pink-600 font-Roboto_Condensed font-bold'>We have you covered 🥳✌🏻 </h4>
      </div>
      <div className="pricing">
        {plans.map(({ name, category, price }, index) => {
          return (
            <motion.div
              className="pricing__plan"
              key={index}
              variants={pricingAnimation1}
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
              <div className="pricing__plan__content mb-14">
                <ul className={`pricing__plan__content__features ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <Fragment key={index2}>
                        { 
                        name === 'Cuts' ? (
                          type === name ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Colour' ? (
                          type === 'Colour' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Hair Spa' ? (
                          type === 'Hair Spa' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Hair Care' ? (
                          type === 'Hair Care' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Hair Massage' ? (
                          type === 'Hair Massage' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Essential Facial' ? (
                          type === 'Essential Facial' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Luxury Facial' ? (
                          type === 'Luxury Facial' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Premium' ? (
                          type === 'Premium' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Regular' ? (
                          type === 'Regular' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Reflexology' ? (
                          type === 'Reflexology' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Body Care' ? (
                          type === 'Body Care' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Instant Package' ? (
                          type === 'Instant Package' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Premium Package' ? (
                          type === 'Premium Package' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Makeup & Hairstyle' ? (
                          type === 'Makeup & Hairstyle' ? (
                            <li className='text-slate-900 py-0.5 font-Roboto_Condensed font-medium text-lg hover:text-amber-500 hover:font-semibold'>{value}</li>
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
        border-radius: 10rem;
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
export default Womens;
