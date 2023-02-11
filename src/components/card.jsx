import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const CardHeader = styled.h2`
  font-size: 24px;
  padding: 20px;
`;

const CardSubheader = styled.h3`
  font-size: 18px;
  padding: 10px;
`;

const CardContent = styled.p`
  font-size: 16px;
  padding: 20px;
`;

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>Cut And Style</CardHeader>
      <CardSubheader>Hair Trim (Basic) 450/-</CardSubheader>
      <CardContent>
        Hair Trim (inclusive of Hair wash, Conditioning & Blast Dry) 650/-
        <br />
        Layered Cut (Inclusive of Hair wash Conditioning Brow Dry a Styling)
        800/-
        <br />
        Change of Style (inclusive of Hair wash Conditioning Blow Dry &
        Styling) 1000/-
        <br />
        Fix Cut 350/-
        <br />
        Hair wash (Shampoo, Conditioning & Blow Dry) 350/-
        <br />
        Kids Cut (Below 10 Years) xpress Glow (Hair wash Shampoo massage &
        Conditioning) 400/- Onwards
        <br />
        Hair wash. Conditioning and quick dry for that instant fresh look
        Straight Straight Shine 1000/- Onwards
        <br />
        Thermal irons to give you that straight look and shiny hair Flat iron /
        Tonging 1000/- Onwards
        <br />
        Choose the classic blow dry for those natural looking curls Fashionable
        Hair Do's 1200/- Onwards
        <br />
        Style it in braid or chignon Roller set 1000/- Onwards
      </CardContent>
    </CardContainer>
  );
};

export default Card;
