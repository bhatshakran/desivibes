import React from 'react';
import OrderItem from './OrderItem';

const OrderCard: React.FC<any> = ({ details }) => {
  console.log(details);
  return (
    <div className=' mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 border border-subtext px-8 py-4 rounded-xl border-opacity-70'>
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
