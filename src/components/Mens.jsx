import React from 'react';
import mens from '../data/mens';
import MensCover from './MensCover';

const mensData = mens.map((mens, index) => {
  return <MensCover key={index} {...mens} />;
});

const Mens = () => {
  return <div className='flex flex-wrap items-center justify-center mx-auto p-auto font-normal text-lg font-Nunito_Sans py-10'>{mensData}</div>;
};

export default Mens;
