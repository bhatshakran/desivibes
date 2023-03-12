import React from 'react';

import tshirt from '../../images/tshirt.png';

const ShopCard: React.FC = () => {
  return (
    <div className='max-w-[250px] mx-auto sm:w-auto    '>
      <img
        className='h-48 lg:w-full w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden '
        src={tshirt}
      />
      <div className=' bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className=''>
          <div className='text-primary  font-josefinsans text-xl mb-2'>
            Hoodie epic
          </div>

          <p className='text-primary font-lato text-[14px] '>
            <span className='line-through'>$26</span>
            <span className='text-secondary  mx-2'>$14</span>
          </p>
          <p className='w-full text-filterTxt text-[14px] mt-2 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla!
          </p>
        </div>
        <div className='flex items-center gap-8 mt-4'>
          <p className='text-primary leading-none bg-white rounded-full shadow-sm p-2 hover:bg-secondary hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
              />
            </svg>
          </p>
          <p className='text-primary bg-white rounded-full shadow-sm p-2 hover:bg-secondary hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </p>
          <p className='text-primary bg-white rounded-full shadow-sm p-2 hover:bg-secondary hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6'
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
