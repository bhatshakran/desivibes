import React from 'react';
import OrderItem from './OrderItem';

const OrderCard: React.FC<any> = ({ details }) => {
  console.log(details);
  return (
    <div className=' w-full lg:w-1/2 flex border border-subtext px-2 lg:px-8 py-4 rounded-xl border-opacity-70'>
      <div className='w-full md:w-40'>
        {details.items.map((item: any, id: number): any => {
          return <OrderItem details={item} key={id} />;
        })}
      </div>
      <div className='flex flex-col  items-start w-full space-y-2'>
        <p className='text-sm text-subtext'>OrderId :{details.id}</p>
        <p className='text-sm text-subtext'>First Name :{details.firstName}</p>
        <p className='text-sm text-subtext'>Last Name :{details.lastName}</p>
        <p className='text-sm text-subtext'>Email :{details.email}</p>
        <p className='text-sm   text-subtext'>Total: ${details.total}</p>
        <p className='text-sm   text-subtext'>
          Address: {details.country}-{details.pincode}
        </p>
        <p className='text-sm   text-subtext'>
          Phone:
          {details.phone}
        </p>
        <p className='text-sm   text-subtext'>Status: In transit</p>
      </div>
    </div>
  );
};

export default OrderCard;
