import React, {useEffect, useState} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { APPCOOKIE, getAppCookie } from '../Fuctions/appcookie/appcookie';
import { useNavigate } from 'react-router';

function Completion() {
  const navigate = useNavigate();
  const [paystate, setpaystate] = useState(false);
  const [response, setresponse] = useState(false);
  const stripePromise = loadStripe('pk_live_51OY3D0FEWVesBqsKqxWWPPDzPhUW7aG0vmM7PBXwTaicWbEh17Y6BihkjLSyldsydp1gLIZQFqWeC24Fo3yNwfpt002SFrlfGh');
  let cookie = '';
  useEffect(() => {
    cookie = getAppCookie(APPCOOKIE)
}, [])
  const sendpaysuccess = () => {
    console.log(cookie);

if(cookie !== '') {
  cookie =  getAppCookie(APPCOOKIE)
}
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
if(this.readyState === 4) {
  console.log(this.responseText);
  try {
    const url = JSON.parse(this.response);
    setresponse(true);
    console.log(url)
    if(url.state == true) {
      setpaystate(true);
    }
  }
  catch(e) {
    console.log(e)
  }
  
}
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/updatestripe");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);
xhr.send();


  }

  useEffect(() => {
    if (!stripePromise) return;

    stripePromise.then(async (stripe) => {
      const url = new URL(window.location.href);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
      if(paymentIntent.status === 'succeeded'){
        sendpaysuccess();
      }

    });
  }, []);

  const Success = () => {
    return (
      <div className="flex bg-gray-100 h-screen w-screen content-center justify-center">
            <div className="bg-white p-6  w-1/2 h-1/2 my-auto mx-auto">
              <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                  <path fill="currentColor"
                      d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                  </path>
              </svg>
              <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                  <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                  <p> Have a great day!  </p>
                  <div className="py-10 text-center">
                      <a onClick={() => {navigate('/code')}} className="px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                          GO BACK 
                     </a>
                  </div>
              </div>
          </div>
        </div>);
  }

  const Failed = () => {
    return (
      <div className="flex bg-gray-100 h-screen w-screen content-center justify-center">
        <div className="bg-white p-6 w-1/2 h-1/2 my-auto mx-auto">
          <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0ZM16.949,7.051a1,1,0,0,1,0,1.414L13.414,12l3.536,3.536a1,1,0,0,1-1.414,1.414L12,13.414l-3.536,3.536a1,1,0,0,1-1.414-1.414L10.586,12,7.05,8.464a1,1,0,0,1,1.414-1.414L12,10.586l3.536-3.536a1,1,0,0,1,1.414,0Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Failed</h3>
            <p className="text-red-600 my-2">Oops! It seems there was an issue with your payment.</p>
            <p>Please try again or contact customer support for assistance.</p>
            <div className="py-10 text-center">
              <a onClick={() => {navigate('/code')}} className="px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                GO BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Loading = () => {
    return (
      <div className="flex bg-gray-100 h-screen w-screen content-center justify-center">
        <div className="bg-white p-6 w-1/2 h-1/2 my-auto mx-auto">
          <svg viewBox="0 0 24 24" className="text-blue-600 w-16 h-16 mx-auto my-6">
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0ZM13,16.973V19a1,1,0,0,1-2,0V16.974c-2.58-.336-4.608-1.976-5.029-4.005a1,1,0,0,1,.968-1.242,3.941,3.941,0,0,0,2.388,1.38,1,1,0,0,1,1.244.969ZM7.484,11.56c.566,1.073,1.61,2.037,3.021,2.784A9.5,9.5,0,0,1,3,12a1,1,0,0,1-2,0,11.94,11.94,0,0,0,10.58,6.448A8.471,8.471,0,0,0,12,20a8.46,8.46,0,0,0,5.471-2.014,1,1,0,0,1,1.232,1.567A10.471,10.471,0,0,1,12,22,10.6,10.6,0,0,1,4,12a10.477,10.477,0,0,1,3.921-8.12,1,1,0,0,1,1.566,1.232A8.461,8.461,0,0,0,12,4a8.46,8.46,0,0,0,5.471-2.014,1,1,0,0,1,1.232,1.567A10.47,10.47,0,0,1,12,6,10.6,10.6,0,0,1,7.484,11.56ZM22,12a1,1,0,0,1-2,0,11.94,11.94,0,0,0-10.58-6.448,8.471,8.471,0,0,0-3.02,2.784,1,1,0,0,1-1.566-1.232A10.471,10.471,0,0,1,12,2a10.6,10.6,0,0,1,8,3.554,10.477,10.477,0,0,1-3.922,8.12,1,1,0,0,1-1.566-1.232A8.461,8.461,0,0,0,12,20a8.46,8.46,0,0,0-5.471,2.014,1,1,0,0,1-1.232-1.567A10.471,10.471,0,0,1,12,18a10.6,10.6,0,0,1,7-3.554A10.477,10.477,0,0,1,22,12Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Processing Payment</h3>
            <p className="text-gray-600 my-2">Please wait while we process your payment.</p>
            <p>This may take a moment.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {(paystate && response) && <Success />}
    {(!paystate && response) && <Failed />}
    {!response && <Loading />}
    </>
  );
}

export default Completion;