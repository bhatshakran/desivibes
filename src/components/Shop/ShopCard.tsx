import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  addToCart,
  checkIfInCart,
  removeFromCart,
} from '../../helpers/AddtoCart';

const ShopCard: React.FC<any> = ({ details }) => {
  const [inCart, setInCart] = useState(() => checkIfInCart(details));

  return (
    <div className='max-w-[150px]   sm:mx-auto  '>
      <img
        className='h-40 lg:w-full w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden '
        src={details.images[0]}
      />
      <div className=' bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className=''>
          <Link
            to={`/shop/${details.id}`}
            className='text-primary hover:underline  font-josefinsans text-xl mb-2'
          >
            {details.name}
          </Link>

          <p className='text-primary font-lato text-[14px] '>
            <span className='line-through'>${details.price}</span>
            <span className='text-secondary  mx-2'>
              ${details.discountprice}
            </span>
          </p>
        </div>
        <div className='flex items-center justify-center gap-4 mt-4'>
          <p
            className='text-primary leading-none bg-white rounded-full shadow-sm p-2 hover:bg-secondary hover:text-white cursor-pointer'
            onClick={() => {
              if (!inCart) {
                addToCart(details);
                setInCart(!inCart);
              } else {
                removeFromCart(details);
                setInCart(!inCart);
              }
            }}
          >
            {!inCart ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </p>

          <p className='text-primary bg-white rounded-full shadow-sm p-2 hover:bg-secondary hover:text-white cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'
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
