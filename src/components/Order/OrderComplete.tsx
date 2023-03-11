import React from 'react';
import Steps from '../Steps';
import tick from '../../images/tick.png';
import checklist from '../../images/checklist.png';
import clock from '../../images/clock.png';

const OrderComplete: React.FC = () => {
  return (
    <div>
      <Steps heading='Order Completed' pageName='Order Completed' />
      <section className='flex px-12 lg:px-36 w-full justify-center py-20 lg:py-[100px]'>
        <div className='flex flex-col justify-center items-center max-w-3xl gap-2 border-l  border-b border-dashed  border-subtext px-8 lg:px-24 py-16 relative rounded-xl'>
          <div>
            <img src={tick} alt='' className='h-[80px]' />
          </div>
          <h2 className='text-center w-full  font-josefinsans text-primary text-[28px] lg:text-[46px] '>
            Your order is complete!
          </h2>
          <p className='font-lato text-subtext  text-base text-center'>
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className='bg-secondary mt-8 font-lato text-[18px] text-white px-4 py-3 rounded-md hover:bg-opacity-90'>
            Continue Shopping
          </button>
          <div className='absolute -top-2 -left-9'>
            <img src={clock} alt='' className='w-[70px]' />
          </div>
          <div className='absolute -bottom-8 -right-6'>
            <img src={checklist} alt='' className='w-[70px]' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderComplete;
