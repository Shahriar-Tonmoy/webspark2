import { getaccountinfo } from "@/functions/APIRequests/UserAPIRequests";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router";

const AccountModal = (props: {setclose: () => void}) => {
  
  const cookiest = useSelector((state: RootState) => state.item3.appcookie);
  const navigate = useNavigate();
  // const validationst = useSelector((state: RootState) => state.item4.uservalid);
  const [userinfo, setUserinfo] = useState({
    username: 'Please Wait ...',
    email: '',
    phone: '',
    token: 0,
  });

  useEffect(() => {
    getaccountinfo(setUserinfo, cookiest);
  }, []);
  function generateRandomColor() {
    const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        // Add more Tailwind CSS colors here as needed
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

  return (
    <div onClick={() => {props.setclose()}} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white max-w-xl w-full p-8 rounded-md shadow-md" onClick={() => {console.log('do nothing')}} >
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Account Information</h2>
        <div className="flex flex-col items-center mt-6">
          {/* <img
            className="rounded-full h-20 w-20 mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          /> */}
          <div className={'text-4xl text-white p-2 px-3 rounded-full '+generateRandomColor()}><p className="my-auto">{userinfo.username.charAt(0)}</p></div>
          <h3 className="text-lg font-semibold text-gray-900">{userinfo.username}</h3>
          <span className="font-light text-gray-700">Your balance is: {userinfo.token.toFixed(0).toString()}</span>
        </div>
        <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
          {/* Add account details here */}
          {/* ... */}
          <button className="p-2 text-sm text-white bg-indigo-500 hover:bg-indigo-600 rounded-sm mx-auto w-[97%]" onClick={ () => navigate('/services')}>
            Buy new Subscription
          </button>
          <button onClick={() => {navigate('/account')}} className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
