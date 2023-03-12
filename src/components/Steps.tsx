import React from 'react';

const Steps: React.FC<any> = ({ heading, pageName }) => {
  return (
    <div className='h-[140px]  bg-lightblue px-16 lg:px-36 py-8'>
      <div className='font-josefinsans text-[24px] lg:text-[36px] text-secondary'>
        {heading}
      </div>
      <p className='font-lato text-subtext text-[14px] lg:text-[16px]'>
        Home - Pages - <span className='text-secondary'>{pageName}</span>
      </p>
    </div>
  );
};

export default Steps;
