import React from 'react';
import plansDemo from '../data/mens';
import Demo from './Demo';

const plansDemoData = plansDemo.map((plansDemo, index) => {
  return <Demo key={index} {...plansDemo} />;
});

const PlansDemo = () => {
  return (
    <div className='flex flex-wrap items-center m-auto p-auto font-normal text-lg font-Nunito_Sans py-10'>
      {plansDemoData}
    </div>
  );
};

export default PlansDemo;
