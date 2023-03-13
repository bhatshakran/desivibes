import React from 'react';

import Banner from '../Banner';
import FeaturedProducts from '../FeaturedProducts';
import LatestProducts from '../LatestProducts';
import Services from '../Services';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
      <Services />
    </>
  );
};

export default Home;
