import { getaccountinfo } from "@/functions/APIRequests/UserAPIRequests";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import NavigationBar from "@/components/NavigationBar";
import { ShimmerTitle } from "react-shimmer-effects";
import { useDispatch } from "react-redux";
import { setapptokenck } from "@/reducer/cookiestate";
import { APPCOOKIE, VALIDATIONCOOKIE, cookieAvailale, getAppCookie } from "./Fuctions/appcookie/appcookie";
import logout from "@/functions/logout/logout";
import { useNavigate } from "react-router";
import NavUpdated from "@/components/NavUpdated";
import { IoIosLogOut } from "react-icons/io";
import FooterUpdated from "./FooterUpdated";


const AccountInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
		if(cookieAvailale(APPCOOKIE)) {
			if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
			navigate('/activate')
			}
		}
		else {
			navigate('/')
		}
	}, [])
  const [userinfo, setUserinfo] = useState({
    username: '',
    email: '',
    phone: '',
    token: 0,
  });
  const navigate = useNavigate();
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

  const cookiest = useSelector((state: RootState) => state.item3.appcookie);
  useState(() => {
    dispatch(setapptokenck(getAppCookie(APPCOOKIE)));
  })
  useEffect(() => {
    getaccountinfo(setUserinfo, cookiest);
  }, [cookiest])
  const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };
  return (
    <div className="h-full w-full bg-[#06060E] overflow-y-auto" onScroll={handleScroll}>
      <NavUpdated scroll={scrollTop} />
    <div className="min-h-screen bg-[#06060D] flex flex-col items-center justify-center pb-12 px-4 sm:px-6 lg:px-8" onScroll={handleScroll}>
      
      <div className="max-w-xl w-full space-y-8 pb-16 mb-16">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-200">Account Information</h2>
        </div>
        <div className="bg-[#121326] p-6 rounded-md border-2 border-[#7064E9] shadow-xl shadow-[#7064E9]">
          <div className="flex flex-col items-center">
            {/* <img
              className="rounded-full h-20 w-20 mb-4"
              src="https://via.placeholder.com/150"
              alt="Profile"
            /> */}
            <div className={'text-4xl text-white p-2 px-3 rounded-full '+generateRandomColor()}><p className="my-auto">{userinfo.username.charAt(0)}</p></div>
            {userinfo.username === '' && <ShimmerTitle line={1} gap={10} variant="primary" />}
            <h3 className="text-lg font-semibold text-slate-200">{userinfo.username}</h3>
            {/* <p className="text-sm text-slate-200">{userinfo.email}</p> */}
            <span className="font-light text-slate-200">{'Your balance is: '+userinfo.token.toFixed(0).toString()}</span>
          </div>
          <div className="mt-6 border-t flex flex-col gap-4 border-gray-200 pt-6">
            <div className="flex flex-row gap-2 p-2">
              <div className="flex flex-col p-2 bg-[#121326] rounded-sm w-full">
                <span className="text-xs font-medium text-slate-200">Username:</span>
                {userinfo.username === '' && <ShimmerTitle line={1} gap={10} variant="primary" />}
                {userinfo.username !== '' && <span className="my-2 text-slate-200">{userinfo.username}</span>}
              </div>
              <div className="flex flex-col p-2 bg-[#121326] rounded-sm w-full">
                <span className="text-xs font-medium text-slate-200">Contact Number:</span>
                {userinfo.username === '' && <ShimmerTitle line={1} gap={10} variant="primary" />}
                <span className="my-2 text-slate-200">{userinfo.phone}</span>
              </div>
            </div>
            <div className="flex flex-row gap-2 p-2">
              <div className="flex flex-col p-2 bg-[#121326] rounded-sm w-full">
                <span className="text-xs font-medium text-slate-200">Email:</span>
                {userinfo.username === '' && <ShimmerTitle line={1} gap={10} variant="primary" />}
                <span className="my-2 text-slate-200">{userinfo.email}</span>
              </div>
              <div className="flex flex-col p-2 bg-[#121326] rounded-sm w-full">
                <span className="text-xs font-medium text-slate-200">Current Plan:</span>
                <span className="my-2 text-slate-200">{''}Gold</span>
              </div>
            </div>
            {/* occupation will be up there instead of current plan if ever needed  */}
            {/* <div className="flex flex-col p-2 bg-[#121326] rounded-sm mx-auto w-[97%]">
              <span className="text-xs font-medium text-slate-200">Current Plan:</span>
              <span className="my-2 text-slate-200">Basic</span>
            </div> */}
              
            <div className="flex flex-row gap-2 p-2">
              <div className="flex flex-col p-2 bg-[#121326] rounded-sm w-full">
                <span className="text-xs font-medium text-slate-200">Generation Left:</span>
                <span className="my-2 text-slate-200">{userinfo.token.toFixed(0).toString()}</span>
              </div>
              <div className="flex flex-col p-2 bg-[#121326] rounded-sm w-full">
                <span className="text-xs font-medium text-slate-200">Validity (Days):</span>
                <span className="my-2 text-slate-200">51</span>
              </div>
            </div>
            
            {/* Add more account details here */}
          </div>
          {/* <div className="mt-8">
            <button
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Edit Profile
            </button>
          </div> */}
          <div className="mt-8">
            <button
            onClick={() => {
              logout(() => {
                dispatch(setapptokenck(''))
                navigate('/')
              })
            }}
              className="flex flex-row w-full my-10 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 justify-center text-white"
            >
              <p className="my-auto text-3xl"><IoIosLogOut /></p>
              <p className="my-auto">Logout</p>
              
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <FooterUpdated />
    </div>
  );
};

export default AccountInfo;
