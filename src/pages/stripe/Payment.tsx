import React, { useEffect, useState } from 'react';

import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import Logo from '../../assets/images/GWBICONBK-82.png';

function Payment() {
    const stripePromise = loadStripe('pk_live_51OY3D0FEWVesBqsKqxWWPPDzPhUW7aG0vmM7PBXwTaicWbEh17Y6BihkjLSyldsydp1gLIZQFqWeC24Fo3yNwfpt002SFrlfGh');
  const [clientSecret, setClientSecret] = useState<string>(null);

    useEffect(() => {
        const url = new URL(window.location.href);
      const clientSecret1 = url.searchParams.get('pid');
      setClientSecret(clientSecret1)
    }, [])

  return (
    <div className='flex flex-col bg-slate-200 w-screen h-screen justify-center items-center'>
      <div className='flex flex-col bg-white p-4 rounded'>
        <img src={Logo} className='mx-auto w-10'/>
      <h4 className='text-center mb-5 text-success-emphasis'>Confirm payment</h4>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, }}>
          <CheckoutForm />
        </Elements>
      )}
      </div>
    </div>
  );
}

export default Payment;