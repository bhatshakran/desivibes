import React from 'react';

const OrderItem: React.FC<any> = ({ details }) => {
  console.log(details);
  return (
    <article>
      <div className='w-20 flex flex-col items-center text-center'>
        <img src={details.images[0]} alt='' />
        <h3 className='text-primary font-josefinsans'>{details.name}</h3>
      </div>
    </article>
  );
};

export default OrderItem;
