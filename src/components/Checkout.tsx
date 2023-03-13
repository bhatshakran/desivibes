import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import type { PayPalScriptOptions } from '@paypal/paypal-js/types/script-options';
import type { PayPalButtonsComponentOptions } from '@paypal/paypal-js/types/components/buttons';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}

export default function Checkout() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const [transactionCompleted, setTransactionCompleted] = React.useState(false);

  const price = 24;

  React.useEffect(() => {
    if (transactionCompleted === true) {
      console.log(transactionCompleted);
      navigate('/ordercomplete');
    }
  }, [transactionCompleted]);

  return (
    <div className='mt-20 py-[120px] flex items-center flex-col w-full '>
      <h2>Your total is: {state}$</h2>
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
