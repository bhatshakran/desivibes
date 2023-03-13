import React from 'react';

const CartItem: React.FC<any> = ({ details }) => {
  return (
    <div className='flex flex-col w-full max-w-[150px] lg:max-w-[300px] py-4 lg:py-0 lg:flex-row mx-auto lg:mx-0'>
      <div
        className='w-full h-40 lg:max-h-[120px]  lg:w-2/5'
        style={{
          background: `url('${details.images[0]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img className=' h-full    ' src='' alt='' />
      </div>
      <div className='w-full flex  flex-col items-center lg:items-start justify-center gap-2 px-4 lg:w-2/5 mt-2'>
        <div>
          <div className='font-bold  text-primary font-lato'>
            {details.name}
          </div>
          <span className=' text-subtext'>42EU - 8.5US</span>
          <p className='text-md text-secondary'>${details.discountprice}</p>
        </div>
        <div className='custom-number-input flex flex-col items-center justify-center  '>
          <label className=' text-subtext  text-sm font-semibold'>Qty</label>
          <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 bg-red-200'>
            <input
              type='number'
              className=' focus:outline-none  w-full bg-gray-300 font-semibold text-subtext text-sm hover:text-black focus:text-black    outline-none border-subtext rounded-md'
              name='custom-input-number'
              value='0'
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
