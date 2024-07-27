import React from "react";
import { useNavigate } from "react-router";
export default function PaymentFailed() {
    const navigate = useNavigate()
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
              <a onClick={() => {navigate('/code')}} className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                GO BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }