import React from 'react';

const CartItem: React.FC = () => {
  return (
    <div className='flex flex-col w-full py-4 lg:py-0 lg:flex-row'>
      <div
        className='w-full h-40 lg:max-h-[120px]  lg:w-2/5'
        style={{
          background:
            "url('https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img className=' h-full    ' src='' alt='' />
      </div>
      <div className='w-full flex  flex-col items-center lg:items-start justify-center gap-2 px-4 lg:w-2/5 mt-2'>
        <div>
          <div className='font-bold  text-primary font-lato'>
            Nike Air Max Pro 8888 - Super Light
          </div>
          <span className=' text-subtext'>42EU - 8.5US</span>
          <p className='text-md text-secondary'>$138.99</p>
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
