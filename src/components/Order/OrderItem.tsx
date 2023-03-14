import React from 'react';

const OrderItem: React.FC<any> = ({ details }) => {
  console.log(details);
  return (
    <article>
      <div className='w-20 flex flex-col items-center text-center'>
        <img src={details.images[0]} alt='' />
        <p className='text-primary font-josefinsans'>{details.name}</p>
      </div>
    </article>
  );
};

export default OrderItem;
