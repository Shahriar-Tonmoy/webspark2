import React from "react";
import lock from '../assets/images/icons8-lock-64.png'
import { useNavigate } from "react-router";
export default function LowBalanceModal() {
    const navigate = useNavigate()
    return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
    <div className="flex flex-col bg-white w-4/5 lg:w-1/4 p-8 rounded-md shadow-md" onClick={() => {console.log('do nothing')}} >
        <div className="my-auto mx-auto"><img src={lock} /></div>
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-10">Not Enough Balance</h2>
      <div className="flex flex-col items-center mt-6">
        {/* <img
          className="rounded-full h-20 w-20 mb-4"
          src="https://via.placeholder.com/150"
          alt="Profile"
        /> */}
        {/* <div className={'text-4xl text-white p-2 px-3 rounded-full '+generateRandomColor()}><p>{userinfo.username.charAt(0)}</p></div>
        <h3 className="text-lg font-semibold text-gray-900">{userinfo.username}</h3>
        <span className="font-light text-gray-700">Your balance is: {userinfo.token.toString()}</span> */}
      </div>
      <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
        {/* Add account details here */}
        {/* ... */}
        <button onClick={() => {navigate('/services')}} className="p-2 text-sm text-white bg-indigo-500 hover:bg-indigo-600 rounded-sm mx-auto w-[97%] font-bold">
          Unlock
        </button>
      </div>
    </div>
  </div>);
  }