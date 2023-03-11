import React from 'react';
import Steps from './Steps';
import notfound from '../images/notfound.png';

const NotFound: React.FC = () => {
  return (
    <section className=''>
      <Steps heading='404 Not Found' pageName='Not Found' />
      <div className='container mx-auto w-full flex justify-center'>
        <img src={notfound} alt='' className='w-96 lg:w-[600px]' />
      </div>
    </section>
  );
};

export default NotFound;
