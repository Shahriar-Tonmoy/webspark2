import React from "react";
import logo from '../assets/images/GWBICONBK-82.png';
import Logo from '../assets/images/glogo.svg';
import { BiGridAlt } from "react-icons/bi";
import { BsMenuButtonWide } from "react-icons/bs";
import './Navcss.css';
import { Drawer } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { FcProcess } from "react-icons/fc";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuContact2 } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { APPCOOKIE, cookieAvailale, getAppCookie } from '@/pages/Fuctions/appcookie/appcookie';
import { useDispatch } from 'react-redux';
import { setHomeState } from '@/reducer/homestate';
import { Homeselector } from '@/functions/enums/homeselector';
import { setapptokenck } from '@/reducer/cookiestate';
import { setuservalid } from '@/reducer/uservaliditystate';
import logout from '@/functions/logout/logout';
import { MdLogout } from "react-icons/md";
import { SiWebtrees } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";

export default function NavUpdated(props: {scroll: number}) {
    // const { innerWidth: width } = window;
    const [openLeft, setOpenLeft] = useState(false);
  const closeDrawerLeft = () => setOpenLeft(false);
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
  const logouthandle = () => {
    dispatch(setapptokenck(''));
    dispatch(setuservalid(false));
    setloggedin(false);
  }
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
    return (<nav className={`w-full py-3 border-t-0 border-l-0 border-r-0 border-b-2 border-slate-800 ${animate?`sticky`:``}`}>
    <div className="flex flex-row justify-between items-center mx-10 xs:mx-6 sm:mx-6 md:mx-6 lg:mx-6 xl:mx-6 text-slate-300">
        <div onClick={() => {
          navigate('/')
          dispatch(setHomeState(Homeselector.HOME))
          }} className="flex flex-row m-1 p-0 w-[20%] cursor-pointer">
            <img src={logo} className="h-10 m-0 p-0" />
            <p className="my-auto font-bold text-lg md:text-xl lg:text-2xl mx-0 p-0">GenWebBuilder</p>
        </div>
        <div className="xs:hidden sm:hidden md:hidden lg:flex lg:flex-row xl:flex xl:flex-row gap-4 w-[80%] lg:w-[70%] xl:w-[70%] 2xl:w-[50%]">
            <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => {
                navigate('/');
                dispatch(setHomeState(Homeselector.HOME))
            }}><p className="text-lg my-auto">Home</p></div>
            <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => {
                navigate('/');
                dispatch(setHomeState(Homeselector.PRICING))
            }}><p className="text-lg my-auto">Pricing</p></div>
            <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => {
                navigate('/about');
                // dispatch(setHomeState(Homeselector.FEATURES))
            }}><p className="text-lg my-auto">About Us</p></div>
            <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => {
                navigate('/');
                dispatch(setHomeState(Homeselector.CONTACT))
            }}><p className="text-lg my-auto">Contact Us</p></div>
            {!loggecin && <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => {
                navigate('/login');
            }}><p className="text-lg my-auto">Sign In</p></div>}
            {loggecin && <div className="my-auto transition duration-0 hover:duration-150 hover:text-pink-500 cursor-pointer" onClick={() => {
                navigate('/account');
            }}><p className="text-lg my-auto">Account</p></div>}
            <div className="flex flex-row gap-2">
            <div className="px-3 py-2.5 rounded-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer" onClick={loggecin ? () => {navigate('/code')} :() => {navigate('/register')}}><p className="text-lg my-auto">{loggecin ?'Start Generating':'Get Started Free'}</p></div>

            <div className="my-auto p-2.5 bg-[#7064E9] rounded-full text-xl cursor-pointer"><BiGridAlt /></div>
            </div>
        </div>
        <div className="xl:hidden lg:hidden sm:flex xs:flex md:flex">
            <div className="hidden md:flex px-3 py-2.5 rounded-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer" onClick={() => {navigate('register')}}>Get Started Free</div>
            <div className="my-auto p-2.5 bg-[#35316F] rounded-full text-xl cursor-pointer" onClick={() => {setOpenLeft(true)}}>
                <BsMenuButtonWide />
            </div>
        </div>
        </div>
        <Drawer
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="bg-[#0F1021] w-52 text-slate-300 fixed z-50"
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      >
        <div className="mb-0 flex items-center justify-between bg-[#0F1021] h-fit">
          <img onClick={() => {
            navigate('/');
            dispatch(setHomeState(Homeselector.HOME));
            setOpenLeft(false);
          }} src={Logo} alt="GenWebBuilder" className='w-28 h-32 align-middle my-0'/>
            <button
              className='text-2xl bg-blue-500 p-1.5 rounded-full mx-2 my-0'
              onClick={() => {setOpenLeft(false)}}
            ><p className='text-white m-0 p-0'>
              <IoMdClose />
            </p>
            </button>
        </div>
        <hr className="w-full bg-slate-300" />
        <div className='flex flex-col items-center justify-left'>
          {/* <a onClick={() => {
            dispatch(setHomeState(Homeselector.HOME))
            setOpenLeft(false);
            navigate('/')

            }} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <AiTwotoneHome /><p className='text-left mx-2 my-auto'>  Home</p>
          </a> */}
          <a onClick={() => {
            dispatch(setHomeState(Homeselector.HOME))
            setOpenLeft(false)
            navigate('/')
            }} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto' >
            <AiTwotoneHome /><p className='text-left mx-2 my-auto'>Home</p>
          </a>
          <a onClick={() => {
            // dispatch(setHomeState(Homeselector.FEATURES))
            setOpenLeft(false)
            navigate('/about')
            }} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto' >
            <AiTwotoneInfoCircle /><p className='text-left mx-2 my-auto'>About Us</p>
          </a>
          <a onClick={() => {
            dispatch(setHomeState(Homeselector.WORKPROCESS))
            setOpenLeft(false)
            navigate('/')
            }} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <FcProcess /><p className='text-left mx-2 my-auto'>Work Process</p>
          </a>
          <a onClick={() => {
            //dispatch(setHomeState(Homeselector.PRICING))
            setOpenLeft(false)
            navigate('/services')
            }} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <FaRegMoneyBillAlt /><p className='text-left mx-2 my-auto'>Pricing Tables</p>
          </a>
          <a onClick={() => {
            dispatch(setHomeState(Homeselector.CONTACT))
            setOpenLeft(false)
            navigate('/')
            }} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <LuContact2 /><p className='text-left mx-2 my-auto'>Contact Us</p>
          </a>
          {!loggecin && <><a onClick={() => {navigate('/login')}} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <FaUserAlt /><p className='text-left mx-2 my-auto'>Login</p>
          </a>
          <a onClick={() => {navigate('/register')}} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <FaUserPlus /><p className='text-left mx-2 my-auto'>Register</p>
          </a></>}
          {loggecin &&<> <a onClick={() => {navigate('/code')}} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <SiWebtrees /><p className='text-left mx-2 my-auto'>Generate Website</p>
          </a><a onClick={() => {navigate('/account')}} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <FaUserPlus /><p className='text-left mx-2 my-auto'>Account</p>
          </a><a onClick={() => {logout(logouthandle)}} className='h-10 w-full m-1 flex items-center justify-left text-slate-300 rounded-md hover:text-blue-700 hover:bg-[#06060E] px-2 my-auto'>
            <MdLogout /><p className='text-left mx-2 my-auto'>Logout</p>
          </a></>}
        </div>

      </Drawer>

    </nav>)
}