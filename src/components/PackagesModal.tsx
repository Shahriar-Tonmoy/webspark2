import React, { useEffect, useState } from 'react'
import { getaccountinfo } from "@/functions/APIRequests/UserAPIRequests";
import { RootState } from "@/store/store";
import { useSelector } from 'react-redux';

function PackagesModal() {
    const [userinfo, setUserinfo] = useState({
        username: '',
        email: '',
        phone: '',
        token: 0,
      });
      const cookiest = useSelector((state: RootState) => state.item3.appcookie);
      useEffect(() => {
        getaccountinfo(setUserinfo, cookiest);
      }, [])
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white max-w-xl w-full p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3">Not Enough Tokens!</h2>
        <h2 className='text-center text-lg'>Your Current Balance is: {userinfo.token} tokens</h2>
        <div className="flex flex-col items-center mt-3">
            <h2 className='text-xl text-center font-bold'>Please Buy one of the following plans</h2>
        </div>
        <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
            {/* Add account details here */}
            {/* ... */}
            <div className='flex flex-row gap-4 justify between'>
                <div className='bg-slate-200 rounded-xl p-3 flex flex-col gap-3 box-content shadow-2xl w-1/2'>
                    <div className="flex justify-center">
                        <h3 className="font-extrabold text-xl text-gray-700">Pay as you go</h3>
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-3">
                        <div className='text-center italic font-semibold'>
                            <span className="mr-2">$</span>
                            <span className="text-lg">0.99</span>
                        </div>
                        <span className="text-center mb-1 font-bold">2 webpages</span>
                    </div>
                        
                    <div className="text-center">
                        <a href="#" className="main-button">Purchase Now</a>
                    </div>
                </div>
                <div className='bg-slate-200 rounded-xl p-3 flex flex-col gap-3 box-content shadow-2xl w-1/2'>
                    <div className="flex justify-center gap-2">
                        <h3 className="font-extrabold text-xl text-gray-700">Basic</h3>
                        <span className='font-light'>3 Months</span>
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-3">
                        <div className='text-center italic font-semibold'>
                            <span className="mr-2">$</span>
                            <span className="text-lg">14.99</span>
                        </div>
                        <span className="text-center mb-1 font-bold">50 webpages</span>
                    </div>
                        
                    <div className="text-center">
                        <a href="#" className="main-button">Purchase Now</a>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-row gap-4 justify between'>
                <div className='bg-slate-200 rounded-xl p-3 flex flex-col gap-3 box-content shadow-2xl w-1/2'>
                    <div className="flex justify-center gap-2">
                        <h3 className="font-extrabold text-xl text-gray-700">Pro</h3>
                        <span className='font-light'>6 Months</span>
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-3">
                        <div className='text-center italic font-semibold'>
                            <span className="mr-2">$</span>
                            <span className="text-lg">29.99</span>
                        </div>
                        <span className="text-center mb-1 font-bold">120 webpages</span>
                    </div>
                        
                    <div className="text-center">
                        <a href="#" className="main-button">Purchase Now</a>
                    </div>
                </div>
                <div className='bg-slate-200 rounded-xl p-3 flex flex-col gap-3 box-content shadow-2xl w-1/2'>
                    <div className="flex justify-center gap-2">
                        <h3 className="font-extrabold text-xl text-gray-700">Gold</h3>
                        <span className='font-light'>1 Year</span>
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-3">
                        <div className='text-center italic font-semibold'>
                            <span className="mr-2">$</span>
                            <span className="text-lg">51.99</span>
                        </div>
                        <span className="text-center mb-1 font-bold">250 webpages</span>
                    </div>
                        
                    <div className="text-center">
                        <a href="#" className="main-button">Purchase Now</a>
                    </div>
                </div>
            </div>
            {/* <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Plan Details
            </button> */}
        </div>
      </div>
    </div>
  )
}

export default PackagesModal