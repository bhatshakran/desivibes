import React, { useRef } from 'react';

const CartItem: React.FC<any> = ({ details, updateQty }) => {
  const numRef = useRef<HTMLInputElement>(null);

  const incrementQty = () => {
    if (numRef.current) {
      let value = parseInt(numRef.current.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      numRef.current.value = value.toString();
      updateQty(details.discountprice);
    }
  };

  const decrementQty = () => {
    if (numRef.current) {
      let value = parseInt(numRef.current.value, 10);
      value = isNaN(value) ? 0 : value;
      if (value === 1) {
        return;
      }
      value--;
      numRef.current.value = value.toString();
      updateQty(-Math.abs(details.discountprice));
    }
  };

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
          <div className='flex flex-row items-center gap-1 h-10 w-full rounded-lg relative bg-transparent mt-1 bg-red-200'>
            <span role={'button'} onClick={decrementQty}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                  clipRule='evenodd'
                />
              </svg>
            </span>

            <input
              ref={numRef}
              id='qty-input'
              type='text'
              className=' focus:outline-none  w-12 bg-gray-300 font-semibold text-subtext text-sm hover:text-black focus:border-none    outline-none border-subtext rounded-md'
              name='custom-input-number'
              defaultValue='1'
              readOnly
            ></input>
            <span role={'button'} onClick={incrementQty}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
