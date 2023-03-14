import isEmpty from 'lodash.isempty';
import React, { useEffect, useState } from 'react';
import { getUserOrders } from '../../Firebase/Functions';
import OrderCard from '../Order/OrderCard';
import Steps from '../Steps';

const Account: React.FC = () => {
  const [myOrders, setMyOrders] = useState<Array<any>>();

  useEffect(() => {
    (async function () {
      try {
        if (localStorage.getItem('user')) {
          const user = JSON.parse(localStorage.getItem('user')!);
          if (user?.email) {
            const getOrders = await getUserOrders(user.email);
            setMyOrders(getOrders);
          } else {
            console.log('No orders found');
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <section>
      <Steps heading='Account' pageName='Account' />
      <section className=' px-4 lg:px-32 py-[80px]'>
        <h2 className=' text-primary font-josefinsans text-[42px]'>
          Your Orders
        </h2>
        <div className='w-full py-14  '>
          {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

          {!isEmpty(myOrders) && myOrders ? (
            <div className='flex flex-col lg:flex-row gap-4 '>
              {myOrders.map((order: any, id: number) => {
                return <OrderCard key={id} details={order} />;
              })}
            </div>
          ) : (
            <div>Nothing here</div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Account;
