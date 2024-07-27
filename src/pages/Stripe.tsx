import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51OY3D0FEWVesBqsKZCeSy8Yhl0TyAqAAVIHZpSCg2Qy4WgLmDLmZ3sZ3jxCAcElYEhKVzNWsvmJc0aI6TGAliagZ00d5h1ytM7');

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
            name: 'Nobab',
            email: 'knirob880@gmail.com',
            address: {city: 'NY', country: 'US', line1: 'dhaka-1216', state: 'NY'},
            phone: '+8801766632383'

          // Include relevant billing details
        },
      }
    });
    console.log(result)
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      // Payment completed successfully
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{style: {
    base: {
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      }}}} />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const Stripetest = () => {
  const [clientSecret, setClientSecret] = useState('pi_3OnMknFEWVesBqsK0EP6GnSy_secret_wmnNGj3HMNz06p4tSHtCouTvY');
  const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         const response = await axios.post('http://localhost:8000/create-payment-intent', { amount: 1000 });
//         const { clientSecret } = response.data;
//         setClientSecret(clientSecret);
//         setErrorMessage('');
//       } catch (error) {
//         setErrorMessage('Failed to create payment intent');
//       }
//     };
    
//     fetchClientSecret();
//   }, []);
useEffect(() => {
    setClientSecret('pi_3OnMknFEWVesBqsK0EP6GnSy_secret_wmnNGj3HMNz06p4tSHtCouTvY')
    setErrorMessage('')
}, [])

  return (
    <div className='flex bg-white w-screen h-screen'>
      <div className=''>
      {clientSecret ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <p>Loading...</p>
      )}
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Stripetest;
