import React from 'react';

const Steps: React.FC<any> = ({ heading, pageName }) => {
  return (
    <div className='h-[80px]  bg-lightblue px-16 lg:px-36 py-4'>
      <div className='font-josefinsans text-[16px] lg:text-[24px] text-secondary'>
        {heading}
      </div>
      <p className='font-lato text-subtext text-[11px] lg:text-[13px]'>
        Home - Pages - <span className='text-secondary'>{pageName}</span>
      </p>
    </div>
  );
};

export default Steps;
