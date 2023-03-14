import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import type { PayPalScriptOptions } from '@paypal/paypal-js/types/script-options';
import type { PayPalButtonsComponentOptions } from '@paypal/paypal-js/types/components/buttons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrderInDb } from '../Firebase/Functions';

const paypalScriptOptions: PayPalScriptOptions = {
  'client-id':
    'AVoOeut-MlNH-iuUsHV7zRa6OvTY5_cGqUlyejMmQLGO6UNuAlTCOA9gonD2zt7tSu2EK73l9xs13AFq',
  // currency: 'USD',
};

interface Props {
  price: number;
  setTransactionCompleted: any;
}

function Button({ price, setTransactionCompleted }: Props) {
  // const [tranState, setTranState] = React.useState(false)

  const tranComplete = () => {
    setTransactionCompleted(true);
  };

  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentOptions = {
    style: { layout: 'vertical' },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: `${price / 100}`,
            },
          },
        ],
      });
    },
    async onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */

      return actions.order?.capture().then(async (details) => {
        // setTranState(true)
        tranComplete();
      });
    },
  };
  return (
    <>
      {isPending ? <h2>Loading... Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}

export default function Checkout() {
  const total = localStorage.getItem('new-order-total');
  const navigate = useNavigate();

  const [transactionCompleted, setTransactionCompleted] = React.useState(false);

  const price = 24;

  React.useEffect(() => {
    (async function () {
      if (transactionCompleted === true) {
        console.log(transactionCompleted);

        const order = JSON.parse(localStorage.getItem('new-order')!);
        const total = JSON.parse(localStorage.getItem('new-order-total')!);
        const items = JSON.parse(localStorage.getItem('vibes-cart')!);
        const orderInDb = await createOrderInDb({
          ...order,
          total,
          items,
          buyerEmail: JSON.parse(localStorage.getItem('user')!).email,
        });
        console.log(orderInDb);
        localStorage.setItem('new-order', '');
        localStorage.setItem('new-order-total', '');
        localStorage.setItem('vibes-cart', '[]');
        navigate('/ordercomplete');
      }
    })();
  }, [transactionCompleted]);

  return (
    <div className='mt-20 py-[120px] flex items-center flex-col w-full '>
      <h2>Your total is: {total}$</h2>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button
          setTransactionCompleted={setTransactionCompleted}
          price={Number(price)}
        />
        {transactionCompleted && 'completed transaction'}
      </PayPalScriptProvider>
    </div>
  );
}
