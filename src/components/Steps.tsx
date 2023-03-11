import React from 'react';

const Steps: React.FC<any> = ({ heading, pageName }) => {
  return (
    <div className='h-[170px] bg-lightblue px-36 py-8'>
      <div className='font-josefinsans text-[36px] text-secondary'>
        {heading}
      </div>
      <p className='font-lato text-subtext'>
        Home - Pages - <span className='text-secondary'>{pageName}</span>
      </p>
    </div>
  );
};

export default Steps;
