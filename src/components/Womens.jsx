import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import pricing1 from '../assets/pricing1.png';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { pricingAnimation2 } from 'animation';


// The women's content fading out in screen sizes under 1321px width and showing blank page because of the men's menu content fading out animation 
// when it goes out of view.
// I solved it by decreasing the threshold amount to 0 in useScroll component file located in components directory inside src directory, 
// previous it was {thresh = 0.1} now its {thresh = 0}.


const Womens = () => {
  const [element, controls] = useScroll();
  const plans1 = [
    {
      category: 'Cut & Style',
      name: 'Cuts',
    },
    {
      category: 'Cut & Colour',
      name: 'Style',
    },
    {
      category: 'Hair Colour',
      name: 'Grey Coverage',
    },
    {
      category: 'Hair Colour',
      name: 'Creative Colouring',
    },
    {
      category: 'Straightening',
      name: 'Straightening',
    },
    {
      category: 'Hair Treatment',
      name: 'Hair Treatment',
    },
    {
      category: 'Hair Treatment',
      name: 'Cysteine Keratin',
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
      category: 'Lotus Facial',
      name: 'Basic Facial',
    },
    {
      category: 'Lotus Facial',
      name: 'Innovative Facial',
    },
    {
      category: 'Lotus Facial',
      name: 'Facial & Spa',
    },
    {
      category: 'Manicure/Pedicure',
      name: 'Manicure/Pedicure',
    },
    {
      category: 'Waxing/Threading',
      name: 'Waxing',
    },
    {
      category: 'Waxing/Threading',
      name: 'Body Bright',
    },
    {
      category: 'Waxing/Threading',
      name: 'Threading',
    },
    {
      category: 'Waxing/Threading',
      name: 'Rica Wax',
    },
    {
      category: 'Body Care',
      name: 'Body Care',
    },
    {
      category: 'Bridal Package',
      name: 'Instant Package',
    },
    {
      category: 'Bridal Package',
      name: 'Premium Package',
    },
    {
      category: 'Bridal Package',
      name: 'Mehendi',
    },
    {
      category: 'Bridal Makeup',
      name: 'Bridal Makeup',
    },
    {
      category: "Bridal Makeup",
      name: "Bride's Friend",
    },
    {
      category: 'Party Makeup',
      name: 'Party Makeup',
    },
  ];

  const data1 = [
    {
      value: 'Hair Trim ~ Basic',
      type: 'Cuts',
    },
    {
      value: 'Hair Trim (Inclusive ~ Hair Wash, Conditioning, Blow Dry)',
      type: 'Cuts',
    },
    {
      value:
        'Layered Cut (Inclusive ~ Hair Wash, Conditioning, Blow Dry & Styling)',
      type: 'Cuts',
    },
    {
      value:
        'Style Change (Inclusive ~ Hair Wash, Conditioning, Blow Dry & Styling)',
      type: 'Cuts',
    },
    {
      value: 'Fix Cut',
      type: 'Cuts',
    },
    {
      value: 'Hair Wash ~ Shampoo, Conditioning & Blow Dry',
      type: 'Cuts',
    },
    {
      value: 'Kids Cut ~ Below 10 Yrs',
      type: 'Cuts',
    },
    {
      value: 'Express Glow ~ Hair Wash, Shampoo, Massage & Conditioning',
      type: 'Style',
    },
    {
      value: 'Straight Shine',
      type: 'Style',
    },
    {
      value: 'Flat Iron/Tonging',
      type: 'Style',
    },
    {
      value: 'Fashionable Hair Do"s',
      type: 'Style',
    },
    {
      value: 'Roller Set',
      type: 'Style',
    },
    {
      value: 'Root Touch Up ~ Ammonia / Ammonia Free',
      type: 'Grey Coverage',
    },
    {
      value: 'Global ~ Ammonia',
      type: 'Grey Coverage',
    },
    {
      value: 'Global ~ Ammonia Free',
      type: 'Grey Coverage',
    },
    {
      value: 'Fashion Colour ~ Ammonia',
      type: 'Grey Coverage',
    },
    {
      value: 'Fashion Colour ~ Ammonia Free',
      type: 'Grey Coverage',
    },
    {
      value: 'High Lights ~ Per Streak',
      type: 'Creative Colouring',
    },
    {
      value: 'Block Colouring ~ Per Dock (S.M/L)',
      type: 'Creative Colouring',
    },
    {
      value: 'Global ~ Full Head Highlight',
      type: 'Creative Colouring',
    },
    {
      value: 'Creative Colouring - Balayage / Ombre',
      type: 'Creative Colouring',
    },
    {
      value: 'Smoothening',
      type: 'Straightening',
    },
    {
      value: 'Straightening',
      type: 'Straightening',
    },
    {
      value: 'Retouch For Smooth Straight',
      type: 'Straightening',
    },
    {
      value: 'Twist & Twirls (Perming)',
      type: 'Straightening',
    },
    {
      value: 'Partial Straightening and Perming',
      type: 'Straightening',
    },
    {
      value: 'Anti Hairfall Treatment',
      type: 'Hair Treatment',
    },
    {
      value: 'Anti Dandruff',
      type: 'Hair Treatment',
    },
    {
      value: 'Hair Spa',
      type: 'Hair Treatment',
    },
    {
      value: 'Dry Frizzy Hair ~ Revitalizing',
      type: 'Hair Treatment',
    },
    {
      value: 'Damaged Hair ~ Repair Rejuvenate',
      type: 'Hair Treatment',
    },
    {
      value: 'Chemically Treated Hair ~ Power Surge',
      type: 'Hair Treatment',
    },
    {
      value: 'Hair Fibre Treatment',
      type: 'Hair Treatment',
    },
    {
      value: 'Organic Hair Spa ~ Moroccan',
      type: 'Hair Treatment',
    },
    {
      value: 'Cysteine Master Kit',
      type: 'Cysteine Keratin',
    },
    {
      value: 'Remedy Protein Kit',
      type: 'Cysteine Keratin',
    },
    {
      value: 'Hair BTX',
      type: 'Cysteine Keratin',
    },
    {
      value: 'The One Master Kit',
      type: 'Cysteine Keratin',
    },
    {
      value: 'Fibre Treatment',
      type: 'Cysteine Keratin',
    },
    {
      value: 'Fibre Treatment ~ Colour',
      type: 'Cysteine Keratin',
    },
    {
      value: 'Kerafusion',
      type: 'Cysteine Keratin',
    },
    {
      value: 'Oxy Glow Bleach',
      type: 'Essential Facial',
    },
    {
      value: 'De-Tan',
      type: 'Essential Facial',
    },
    {
      value: 'Regular Cleanup',
      type: 'Essential Facial',
    },
    {
      value: 'Regular Cleanup Acne',
      type: 'Essential Facial',
    },
    {
      value: 'Under Eye Treatment',
      type: 'Essential Facial',
    },
    {
      value: 'Fruit / Herbal Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Aroma Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Insta - Fair Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Pearl Facial',
      type: 'Essential Facial',
    },
    {
      value: 'Skin Whitening Facial',
      type: 'Luxury Facial',
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
      value: 'Skin Lightening Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'O3+ Radiant & GLowing Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'Cut Studio Signature Facial',
      type: 'Luxury Facial',
    },
    {
      value: 'Basic Clean up ~ Dry Skin / Oily Skin',
      type: 'Basic Facial',
    },
    {
      value: 'Basic Hydra Facial ~ Dry Skin',
      type: 'Basic Facial',
    },
    {
      value: 'Basic Hydra Facial ~ Oily Skin',
      type: 'Basic Facial',
    },
    {
      value: 'Basic Facial with De-Tan Mask',
      type: 'Basic Facial',
    },
    {
      value: 'ACNEX ~ pimple & acne treatment',
      type: 'Basic Facial',
    },
    {
      value: 'DIPIGMENTONE ~ removing pigmentation and other spots',
      type: 'Basic Facial',
    },
    {
      value: 'GLOWDERMIE ~ Lonization Facial for enhanced skin glow',
      type: 'Basic Facial',
    },
    {
      value: 'INSTAFAIR ~ melanin control and skin lightening',
      type: 'Basic Facial',
    },
    {
      value: 'GOLDSHEEN ~ Instant gold like lustering complexion',
      type: 'Basic Facial',
    },
    {
      value: '4-Layer Radiance Facial',
      type: 'Innovative Facial',
    },
    {
      value: '4-Layer Anti Ageing Facial',
      type: 'Innovative Facial',
    },
    {
      value: '4-Layer Skin Whitening Facial',
      type: 'Innovative Facial',
    },
    {
      value: 'Preservita Advanceed Anti Biemish Facial with papaya marmalade',
      type: 'Innovative Facial',
    },
    {
      value: 'Preservita Anti-Ageing Facial with Fruit marmalade',
      type: 'Innovative Facial',
    },
    {
      value:
        'Preservita Advance skin Radiance facial with Vino Grapes marmalade',
      type: 'Innovative Facial',
    },
    {
      value: 'Preservita Sensitive skin Facial with pineapple marmalade',
      type: 'Innovative Facial',
    },
    {
      value: 'Preservita skin whitening Facial Kit Bearberry marmalade',
      type: 'Innovative Facial',
    },
    {
      value: 'Ultimo Pearl ~ Skin whitening Facial Treatment',
      type: 'Facial & Spa',
    },
    {
      value: 'Ultimo Gold ~ 24 Carate Gold Facial Treatment',
      type: 'Facial & Spa',
    },
    {
      value: 'Ultimo Platinum ~ Anti—Ageing Facial Treatment',
      type: 'Facial & Spa',
    },
    {
      value: 'Japanese Sakura Skin Whitening S Lightening Facial',
      type: 'Facial & Spa',
    },
    {
      value: 'Bulgarian Rose Glow a Brightening Facial',
      type: 'Facial & Spa',
    },
    {
      value: 'Brazilian Anti Ageing Facial',
      type: 'Facial & Spa',
    },
    {
      value: 'Nail Care',
      type: 'Manicure/Pedicure',
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
      value: 'Citrus Luxury Pedicure',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Citrus Luxury Manicure',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Crystal Spa Pediicure',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Crystai Spa Manicure',
      type: 'Manicure/Pedicure',
    },
    {
      value: 'Full Arms',
      type: 'Waxing',
    },
    {
      value: 'Full Legs',
      type: 'Waxing',
    },
    {
      value: 'Half Arms',
      type: 'Waxing',
    },
    {
      value: 'Half Legs',
      type: 'Waxing',
    },
    {
      value: 'Under Arms',
      type: 'Waxing',
    },
    {
      value: 'Stomach',
      type: 'Waxing',
    },
    {
      value: 'Full Back',
      type: 'Waxing',
    },
    {
      value: 'Bikini Line',
      type: 'Waxing',
    },
    {
      value: 'Bikini Wax',
      type: 'Waxing',
    },
    {
      value: 'Upper Lip',
      type: 'Waxing',
    },
    {
      value: 'Chin',
      type: 'Waxing',
    },
    {
      value: 'Sides',
      type: 'Waxing',
    },
    {
      value: 'Full Body Wax',
      type: 'Waxing',
    },
    {
      value: 'Face & Neck',
      type: 'Body Bright',
    },
    {
      value: 'Full Arms',
      type: 'Body Bright',
    },
    {
      value: 'Full Legs',
      type: 'Body Bright',
    },
    {
      value: 'Half Arms',
      type: 'Body Bright',
    },
    {
      value: 'Half Legs',
      type: 'Body Bright',
    },
    {
      value: 'Under Arms',
      type: 'Body Bright',
    },
    {
      value: 'Stomach',
      type: 'Body Bright',
    },
    {
      value: 'Full Back',
      type: 'Body Bright',
    },
    {
      value: 'Blouse Line',
      type: 'Body Bright',
    },
    {
      value: 'Upper Lip',
      type: 'Body Bright',
    },
    {
      value: 'Chin',
      type: 'Body Bright',
    },
    {
      value: 'Full Body Bleach',
      type: 'Body Bright',
    },
    {
      value: 'Eyebrows',
      type: 'Threading',
    },
    {
      value: 'Upper Lip',
      type: 'Threading',
    },
    {
      value: 'Lower Lip',
      type: 'Threading',
    },
    {
      value: 'Forehead',
      type: 'Threading',
    },
    {
      value: 'Chin',
      type: 'Threading',
    },
    {
      value: 'Side and Jaw Line',
      type: 'Threading',
    },
    {
      value: 'Full Face',
      type: 'Threading',
    },
    {
      value: 'Full Arms',
      type: 'Rica Wax',
    },
    {
      value: 'Full Legs',
      type: 'Rica Wax',
    },
    {
      value: 'Half Arms',
      type: 'Rica Wax',
    },
    {
      value: 'Half Legs',
      type: 'Rica Wax',
    },
    {
      value: 'Under Arms',
      type: 'Rica Wax',
    },
    {
      value: 'Stomach',
      type: 'Rica Wax',
    },
    {
      value: 'Full Back',
      type: 'Rica Wax',
    },
    {
      value: 'Bikini Line',
      type: 'Rica Wax',
    },
    {
      value: 'Bikini Wax',
      type: 'Rica Wax',
    },
    {
      value: 'Upper Lip',
      type: 'Rica Wax',
    },
    {
      value: 'Chin',
      type: 'Rica Wax',
    },

    {
      value: 'Sides',
      type: 'Rica Wax',
    },
    {
      value: 'Full Body',
      type: 'Rica Wax',
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
      value: 'Aroma Oil Head Massage',
      type: 'Body Care',
    },
    {
      value: 'Olive Oil Head Massage',
      type: 'Body Care',
    },
    {
      value: 'Almond Oil Head Massage',
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
      value: 'Manicure',
      type: 'Instant Package',
    },
    {
      value: 'Pedicure',
      type: 'Instant Package',
    },
    {
      value: 'Bleach ~ Face & Neck',
      type: 'Instant Package',
    },
    {
      value: 'Essential Facial',
      type: 'Instant Package',
    },
    {
      value: 'Hair Spa',
      type: 'Instant Package',
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
      value: 'Body Bleach',
      type: 'Premium Package',
    },
    {
      value: 'Luxurious Facial',
      type: 'Premium Package',
    },
    {
      value: 'Hair Spa',
      type: 'Premium Package',
    },
    {
      value: 'Full Arms',
      type: 'Mehendi',
    },
    {
      value: 'Half Arms',
      type: 'Mehendi',
    },
    {
      value: 'Half Legs',
      type: 'Mehendi',
    },
    {
      value: 'Arabic Bridal Mehendi',
      type: 'Mehendi',
    },
    {
      value: 'Bridal Package',
      type: 'Mehendi',
    },
    {
      value: 'Makeup',
      type: 'Bridal Makeup',
    },
    {
      value: 'MAC Makeup',
      type: 'Bridal Makeup',
    },
    {
      value: 'Bridal Makeup - Outdoor',
      type: 'Bridal Makeup',
    },
    {
      value: 'Makeup',
      type: "Bride's Friend",
    },
    {
      value: 'Hair Do',
      type: "Bride's Friend",
    },
    {
      value: 'Saree Drape',
      type: "Bride's Friend",
    },
    {
      value: 'Krylon Makeup',
      type: 'Party Makeup',
    },
    {
      value: 'MAC Makeup',
      type: 'Party Makeup',
    },
    {
      value: 'Krylon Makeup & Hairstyle',
      type: 'Party Makeup',
    },
    {
      value: 'MAC Makeup & Hairstyle',
      type: 'Party Makeup',
    },
  ];

  return (
    <Section ref={element} id="womens">
      <Title value="Women's" />
      <div className="background">
        <img src={pricing1} alt="background" className="bg1" />
      </div>
      <div className="pricing__title">
        <p>Find your hair needs 😁</p>
        <h2 className="font-Roboto_Condensed font-medium">
          Finding the best salon service in your city could be time consuming...
          😪
        </h2>
        <h4 className="text-md font-Roboto_Condensed font-bold text-pink-600">
          We have you covered 🥳✌🏻{' '}
        </h4>
      </div>
      <div className="pricing">
        {plans1.map(({ name, category, price }, index4) => {
          return (
            <motion.div
              className="pricing__plan"
              key={index4}
              variants={pricingAnimation2}
              animate={controls} 
              transition={{
                delay: 0.2,
                type: 'tween',
                duration: 0.8,
              }}
            >
              <div className="pricing__plan__name">
                <h2 className="mb-10 font-mono text-2xl">{category}</h2>
                <h3 className="font-serif text-white">{name}</h3>
              </div>
              <div className="pricing__plan__content mb-14">
                <ul className={`pricing__plan__content__features ${name}`}>
                  {data1.map(({ value, type }, index6) => {
                    return (
                      <Fragment key={index6}>
                        {name === 'Cuts' ? (
                          type === name ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Style' ? (
                          type === 'Style' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Grey Coverage' ? (
                          type === 'Grey Coverage' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Creative Colouring' ? (
                          type === 'Creative Colouring' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Straightening' ? (
                          type === 'Straightening' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Hair Treatment' ? (
                          type === 'Hair Treatment' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Cysteine Keratin' ? (
                          type === 'Cysteine Keratin' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Essential Facial' ? (
                          type === 'Essential Facial' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Luxury Facial' ? (
                          type === 'Luxury Facial' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Basic Facial' ? (
                          type === 'Basic Facial' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Facial Treatment' ? (
                          type === 'Facial Treatment' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Innovative Facial' ? (
                          type === 'Innovative Facial' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Facial & Spa' ? (
                          type === 'Facial & Spa' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Waxing' ? (
                          type === 'Waxing' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Body Bright' ? (
                          type === 'Body Bright' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Threading' ? (
                          type === 'Threading' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Rica Wax' ? (
                          type === 'Rica Wax' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Premium' ? (
                          type === 'Premium' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Manicure/Pedicure' ? (
                          type === 'Manicure/Pedicure' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Body Care' ? (
                          type === 'Body Care' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Instant Package' ? (
                          type === 'Instant Package' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Premium Package' ? (
                          type === 'Premium Package' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Mehendi' ? (
                          type === 'Mehendi' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Bridal Makeup' ? (
                          type === 'Bridal Makeup' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === "Bride's Friend" ? (
                          type === "Bride's Friend" ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : name === 'Party Makeup' ? (
                          type === 'Party Makeup' ? (
                            <li className="py-0.5 font-Roboto_Condensed text-lg font-medium text-slate-900 hover:font-semibold hover:text-amber-500">
                              {value}
                            </li>
                          ) : (
                            <li></li>
                          )
                        ) : (
                          name === 'Something'
                        )}
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
export default Womens;
