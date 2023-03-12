import React from 'react';
import Steps from '../Steps';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  return (
    <section>
      <Steps heading='Shopping Cart' pageName='Cart' />
      <section className='py-16 lg:py-[120px]'>
        <div className='grid sm:px-10 lg:grid-cols-3 lg:px-20 xl:px-32'>
          <div className='px-4 pt-8 w-full col-span-3 lg:col-span-2'>
            <p className='text-3xl lg:text-[46px] font-josefinsans text-primary text-center lg:text-start'>
              Order Summary
            </p>
            <p className='text-subtext font-lato text-lg lg:text-2xl text-center lg:text-start'>
              Check your items. And proceed to checkout
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-4  mt-8 space-y-3  bg-white px-2 py-16 sm:px-6 '>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>

            <div className='lg:ml-16 mt-8 w-full flex justify-center lg:justify-start'>
              <button className='bg-secondary py-2 px-4 rounded-md text-white font-lato '>
                Clear Cart
              </button>
            </div>
          </div>
          <div className='flex flex-col  lg:mx-0 col-span-3  lg:col-span-1 overflow-hidden sm:p-10 font-lato  mt-16 lg:mt-36 '>
            <h2 className='text-2xl font-semibold font-josefinsans text-primary'>
              Order items
            </h2>

            <div className='flex flex-col  pt-4 space-y-2 '>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>$21.50</span>
              </div>
              <div className='flex items-center space-x-2 text-xs'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='w-3 h-3 mt-1 fill-current dark:text-violet-400'
                >
                  <path d='M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z'></path>
                  <path d='M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z'></path>
                </svg>
                <span className='dark:text-gray-400'>
                  Spend $20.00, get 20% off
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Discount</span>
                <span>-$4.30</span>
              </div>
            </div>
            <div className='pt-4 space-y-2'>
              <div className='flex justify-between'>
                <span>Service fee</span>
                <span>$0.50</span>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <span>Delivery fee</span>
                  <span>$4.00</span>
                </div>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  className='text-xs hover:underline dark:text-violet-400'
                >
                  How do our fees work?
                </a>
              </div>
              <div className='space-y-6'>
                <div className='flex justify-between'>
                  <span>Total</span>
                  <span className='font-semibold'>$22.70</span>
                </div>
                <button
                  type='button'
                  className='w-full py-2 bg-secondary text-white font-lato rounded-md max-w-[200px]'
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;
