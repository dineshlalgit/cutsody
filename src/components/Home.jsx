import React from 'react';
import styled from 'styled-components';
import home from 'assets/home3.png';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { homeAnimation, homeInfoAnimation } from 'animation';

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <div className="content">
        
          <div className="subTitle">
            <p>
            Discover inner beauty and consciousness at Cut Studio, where self-love takes center stage.
            </p>
            <a href="#services">
              <button className="h-12 w-56 -my-4 rounded-lg border-4">
                Check Our Services
              </button>

            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <div className="grid">
          <div className="col">
            <strong>Salon and Spa</strong>
            <p>CUT STUDIO</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>cutstudioandamans@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>Phoenix Bay - +91-8001818888</p>
            <p>Goal Ghar - +91-9474218888</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Unisex Men & Women Services</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to Sunday</p>
            <p>08:00 AM to 09:00 PM</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home {
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 0.2rem;
      margin-top: 6rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 4rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2.2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -4rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1320px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home;
