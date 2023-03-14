import isEmpty from 'lodash.isempty';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserOrders } from '../../Firebase/Functions';
import OrderCard from '../Order/OrderCard';
import Steps from '../Steps';

const Account: React.FC = () => {
  const [myOrders, setMyOrders] = useState<Array<any>>();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        if (localStorage.getItem('user')) {
          const user = JSON.parse(localStorage.getItem('user')!);
          console.log(user.email);
          if (user?.email) {
            const getOrders = await getUserOrders(user.email);
            console.log(getOrders);
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

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('vibes-cart');
    localStorage.removeItem('new-order');
    localStorage.removeItem('new-order-total');
    navigate('/login');
  };
  return (
    <section>
      <Steps heading='Account' pageName='Account' />
      <section className=' px-4 lg:px-32 py-[80px] relative'>
        <div className='absolute right-4'>
          {localStorage.getItem('user') && (
            <button
              className='bg-secondary px-3 py-2 rounded-md font-josefinsans text-white '
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
        <h2 className=' text-primary font-josefinsans text-[42px]'>
          Your Orders
        </h2>
        <div className='w-full py-14  '>
          {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

          {!isEmpty(myOrders) && myOrders ? (
            <div className='flex flex-col w-full  gap-4 '>
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
