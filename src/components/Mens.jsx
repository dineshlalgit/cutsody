import React from 'react';
import mens from '../data/mens';
import MensCover from './MensCover';

const mensData = mens.map((mens, index) => {
  return <MensCover key={index} {...mens} />;
});

const Mens = () => {
  return <div>{mensData}</div>;
};

export default Mens;
