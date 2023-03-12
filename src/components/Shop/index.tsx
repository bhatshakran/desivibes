import React from 'react';
import Steps from '../Steps';
import ShopContent from './ShopContent';

const Shop: React.FC = () => {
  return (
    <section>
      <Steps heading='Shop' pageName='Shop' />
      <ShopContent />
    </section>
  );
};

export default Shop;
