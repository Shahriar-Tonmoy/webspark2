import React from "react";
import logo from '../assets/images/GWBICONBK-82.png';
// import Logo from '../assets/images/glogo.svg';
import { BiGridAlt } from "react-icons/bi";
// import { BsMenuButtonWide } from "react-icons/bs";
import './Navcss.css';
// import { Drawer } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
// import { AiTwotoneHome } from "react-icons/ai";
// import { AiTwotoneInfoCircle } from "react-icons/ai";
// import { FcProcess } from "react-icons/fc";
// import { FaRegMoneyBillAlt } from "react-icons/fa";
// import { LuContact2 } from "react-icons/lu";
// import { FaUserAlt } from "react-icons/fa";
// import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { APPCOOKIE, cookieAvailale, getAppCookie } from '@/pages/Fuctions/appcookie/appcookie';
import { useDispatch } from 'react-redux';
import { setHomeState } from '@/reducer/homestate';
import { Homeselector } from '@/functions/enums/homeselector';
import { setapptokenck } from '@/reducer/cookiestate';
// import logout from '@/functions/logout/logout';
// import { MdLogout } from "react-icons/md";
// import { SiWebtrees } from "react-icons/si";
// import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import { TbLayoutSidebar } from "react-icons/tb";
import { TbLayoutSidebarRight } from "react-icons/tb";
import { MdOutlineElectricBolt } from "react-icons/md";
import usermes from '../assets/images/usermes.png';
import { SELECTION } from "@/types";

export default function NavInner(props: {scroll: number, tdl: () => void, tdr: () => void, setappselection: (data: SELECTION) => void}) {
    // const { innerWidth: width } = window;
  const navigate = useNavigate();
  const [loggecin, setloggedin] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
		if(cookieAvailale(APPCOOKIE)) {
      setloggedin(true)
		}
		else {
			setloggedin(false)
		}
	}, [])
  // const logouthandle = () => {
  //   dispatch(setapptokenck(''));
  //   dispatch(setuservalid(false));
  //   setloggedin(false);
  // }
  useEffect(() => {
    dispatch(setapptokenck(getAppCookie(APPCOOKIE)))
}, [])
const cookiest = useSelector((state: RootState) => state.item3.appcookie);
useEffect(() => {
  if(cookiest !== '') {
    setloggedin(true);
  }
}, [])


    const animate = props.scroll > 60
    return (<nav className={`w-full py-3 border-t-0 border-l-0 border-r-0 border-b-2 border-slate-800 ${animate ? `sticky` : `nonsticky`}`}>
    <div className="flex justify-between items-center mx-4 xs:mx-2 sm:mx-2 md:mx-4 lg:mx-2 xl:mx-4 text-slate-300 p-0">
      <div className="flex flex-row w-full h-fit">
        <div onClick={() => { props.tdl() }} className="bg-[#0F1021] rounded-full p-2.5 m-0 h-fit my-auto">
          <p className="text-[#7064E9] text-2xl font-bold p-0 m-0"><TbLayoutSidebar /></p>
        </div>
        <div onClick={() => { 
          navigate('/'); 
          dispatch(setHomeState(Homeselector.HOME)) 
          }} className="flex flex-row m-1 p-0 w-[20%] cursor-pointer">
          <img src={logo} className="h-10 m-0 p-0" />
          <p className="my-auto font-bold text-lg md:text-xl lg:text-2xl mx-0 p-0">GenWebBuilder</p>
        </div>
      </div>
      <div className="flex flex-row gap-16">
        <div className="hidden lg:flex lg:flex-row xl:flex xl:flex-row gap-4">
          <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => { navigate('/'); dispatch(setHomeState(Homeselector.HOME)) }}><p className="text-lg my-auto">Home</p></div>
          <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => { navigate('/'); dispatch(setHomeState(Homeselector.PRICING)) }}><p className="text-lg my-auto">Pricing</p></div>
          <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer flex flex-shrink-0" onClick={() => { navigate('/'); dispatch(setHomeState(Homeselector.HOME)) }}><p className="text-lg my-auto">About Us</p></div>
          <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer flex flex-shrink-0" onClick={() => { navigate('/'); dispatch(setHomeState(Homeselector.PRICING)) }}>
            <p className="text-lg my-auto">Contact Us</p>
          </div>
          {!loggecin && <div className="my-auto w-full transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => { navigate('/login'); }}><p className="text-lg my-auto">Sign In</p></div>}
        </div>
        <div className="flex flex-row gap-2">
          <div className="hidden lg:flex lg:flex-row xl:flex xl:flex-row px-3 rounded-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer flex-shrink-0" onClick={loggecin ? () => { navigate('/services') } : () => { navigate('/register') }}><p className="text-lg my-auto">{'Upgrade'} </p><p className="my-auto text-white text-md"><MdOutlineElectricBolt /></p></div>
          <div className="hidden lg:flex lg:flex-row xl:flex xl:flex-row my-auto p-2.5 bg-[#7064E9] rounded-full text-xl cursor-pointer mx-2"><BiGridAlt /></div>
          <div onClick={() => {props.setappselection(SELECTION.ACCOUNT)}} className="xs:hidden sm:hidden md:flex lg:flex xl:flex my-auto p-2 bg-black rounded-full text-xl cursor-pointer border-2 border-[#7064E9] mx-2 w-11"><img src={usermes} className="w-28 h-6" /></div>
          <div onClick={() => { props.tdr() }} className="bg-[#0F1021] rounded-full p-2.5 m-0 h-fit my-auto">
            <p className="text-[#7064E9] text-2xl font-bold p-0 m-0"><TbLayoutSidebarRight /></p>
          </div>
        </div>
      </div>
    </div>
  </nav>)
}