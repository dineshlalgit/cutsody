import React, { useState } from 'react';
import loadmore from "assets/loadmore.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "animation";
import Title from './Title';

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "Teacher",
      name: "Tanushri Ramesh",
      review:
      "Had a great experience. The results are awesome . I have done keratin treatment which was done by monica a very good hairstylist . Love the place and ambiance."
    },
    {
      designation: "Local Guide",
      name: "Tiwari Anuj",
      review:
      "One of best salon in the islands the barber's are very interactive too..you will be also served with coffee tea and food if you are having a time consuming process on your hair."
    },
    {
      designation: "Model",
      name: "Nargis Hussain",
      review:
      "The saloon is clean and comfortable. I got my services from the stylish name Srijana. She did my massage, facial and mani - pedi. Attendants were courteous, professional and thorough. I would go back and definitely recommend this saloon."
    },
  ];
  return (
    <Section ref={element}>
      <Title value="Review's" />
      <div className="container">
        <motion.div className="testimonials"
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        >
          {
            testimonials.map(({ designation, name, review}, index)=> {
              return (
                <div className={`testimonial ${selected === index ? "active" : "hidden"}`} key={index}>
                  <div className="image">
                    <div className="circle2">
                      <img src={loadmore} alt="Loadmore" />
                    </div>
                  </div>
                  <div className="title-container">
                    <span className="designation">
                      {designation}
                    </span>
                    <h3 className='title'>{name}</h3>
                  </div>
                  <p className="description">{review}</p>
                </div>
              );
            })
          }
        </motion.div>
        <motion.div className="controls"
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        >
        <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}>
        </button>
        <button
            className={selected === 1 ? "active" : ""}
            onClick={() => {
              setSelected(1);
            }}>
        </button>
        <button
            className={selected === 2 ? "active" : ""}
            onClick={() => {
              setSelected(2);
            }}>
        </button>
        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.section`
overflow: hidden;

.container {
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .testimonials {
    display: flex;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    width: 30%;
    .testimonial {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .image {
        position: relative;
        .circle2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10rem;
          width: 10rem;
          border-radius: 10rem;
          background-color: #8860e6b0;
        }
      }
    }
    .hidden {
      display: none;
    }
    color: #fff;
    .designation {
      height: 8rem;
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button {
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: var(--secondary-color);
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active {
      background-color: transparent;
      border: 0.1rem solid var(--secondary-color);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .background {
    display: none;
  }
  .container {
    padding: 4rem 0;
    .testimonials {
      width: 80%;
      .testimonial {
        .description {
          height: 18rem;
        }
      }
    }
  }
}
`;

export default Testimonials