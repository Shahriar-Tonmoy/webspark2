import Logo from '../assets/images/glogo.svg';
// import '../assets/css/bootstrap.min.css';
// import '../assets/css/font-awesome.css';
// import '../assets/css/templatemo-softy-pinko.css';
// import '../index.css';
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
import React from 'react';
import { APPCOOKIE, cookieAvailale } from '@/pages/Fuctions/appcookie/appcookie';
import { useDispatch } from 'react-redux';
import { setHomeState } from '@/reducer/homestate';
import { Homeselector } from '@/functions/enums/homeselector';
import { setapptokenck } from '@/reducer/cookiestate';
import { setuservalid } from '@/reducer/uservaliditystate';
import logout from '@/functions/logout/logout';
import { MdLogout } from "react-icons/md";
import { SiWebtrees } from "react-icons/si";
import { IoMdClose } from "react-icons/io";


function NavigationBar() {
  const [openLeft, setOpenLeft] = useState(false);
  const closeDrawerLeft = () => setOpenLeft(false);
  const navigate = useNavigate();
  const [loggecin, setloggedin] = useState(false)
  const dispatch = useDispatch();
  const [navopacity, setNavopacity] = useState(false)
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

  const changeOpacity = () => {

    if (window.scrollY >= 170) {
      setNavopacity(true);
    } else {
      setNavopacity(false);
    }
  };

  window.addEventListener('scroll', changeOpacity)
  
  return (
    <header className={`header-area header-sticky ${
      navopacity ? 'opacity-70' : ''
    }`}>
      <Drawer
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="bg-slate-200 w-52" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <div className="mb-6 flex items-center justify-between bg-slate-200">
          <img src={Logo} alt="GenWebBuilder" className='w-28 h-52 align-middle'/>
            <button
              className='text-3xl'
              onClick={() => {setOpenLeft(false)}}
            ><p className=''>
              <IoMdClose />
            </p>
            </button>
        </div>
        <div className='flex flex-col items-center justify-left'>
          <a onClick={() => {
            dispatch(setHomeState(Homeselector.HOME))
            setOpenLeft(false);
            navigate('/')

            }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto'>
            <AiTwotoneHome /><p className='text-left mx-2 my-auto'>  Home</p>
          </a>
          <a onClick={() => {
            dispatch(setHomeState(Homeselector.FEATURES))
            setOpenLeft(false)
            navigate('/')
            }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#features">
            <AiTwotoneInfoCircle /><p className='text-left mx-2 my-auto'>Features</p>
          </a>
          <a onClick={() => {
            dispatch(setHomeState(Homeselector.WORKPROCESS))
            setOpenLeft(false)
            navigate('/')
            }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#work-process">
            <FcProcess /><p className='text-left mx-2 my-auto'>Work Process</p>
          </a>
          <a onClick={() => {
            //dispatch(setHomeState(Homeselector.PRICING))
            setOpenLeft(false)
            navigate('/services')
            }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#pricing-plans">
            <FaRegMoneyBillAlt /><p className='text-left mx-2 my-auto'>Pricing Tables</p>
          </a>
          <a onClick={() => {
            dispatch(setHomeState(Homeselector.CONTACT))
            setOpenLeft(false)
            navigate('/')
            }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#contact-us">
            <LuContact2 /><p className='text-left mx-2 my-auto'>Contact Us</p>
          </a>
          {!loggecin && <><a onClick={() => {navigate('/login')}} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto'>
            <FaUserAlt /><p className='text-left mx-2 my-auto'>Login</p>
          </a>
          <a onClick={() => {navigate('/register')}} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto'>
            <FaUserPlus /><p className='text-left mx-2 my-auto'>Register</p>
          </a></>}
          {loggecin &&<> <a onClick={() => {navigate('/code')}} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto'>
            <SiWebtrees /><p className='text-left mx-2 my-auto'>Generate Website</p>
          </a><a onClick={() => {navigate('/account')}} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto'>
            <FaUserPlus /><p className='text-left mx-2 my-auto'>Account</p>
          </a><a onClick={() => {logout(logouthandle)}} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto'>
            <MdLogout /><p className='text-left mx-2 my-auto'>Logout</p>
          </a></>}
        </div>

      </Drawer>

      <div className={!openLeft ? "container" : "hidden"}>
        <div className="row">
          <div className="col-12">
            <nav className="main-nav align-middle">
              <a onClick={ () => navigate('/')} className="logo align-middle cursor-pointer">
                <img src={Logo} alt="GenWebBuilder" className='w-24 align-middle'/>
              </a>
              <ul className="nav content-center items-center">
                <li className=''><a onClick={() => {
                  dispatch(setHomeState(Homeselector.HOME))
                  navigate('/');
                  }} className="active cursor-default">Home</a></li>
                <li className=''><a onClick={() => {
                  dispatch(setHomeState(Homeselector.FEATURES))
                  navigate('/');
                  }} className="cursor-default">About</a></li>
                <li className=''><a onClick={() => {
                  dispatch(setHomeState(Homeselector.WORKPROCESS))
                  navigate('/');
                  }} className="cursor-default">Work Process</a></li>
                <li className='pl-1'><a onClick={() => {
                  //dispatch(setHomeState(Homeselector.PRICING))
                  navigate('/services');
                  }} className="cursor-default">Pricing Tables</a></li>
                <li className='pl-1'><a onClick={() => {
                  dispatch(setHomeState(Homeselector.CONTACT))
                  navigate('/')
                  }} className="cursor-default">Contact Us</a></li>
                {!loggecin && <>
                <li><button onClick={() => {navigate('/login')}} className='w-24 h-8 border-2 border-golapi rounded-xl hover:bg-golapi hover:text-white hover:font-bold'>Login</button></li>
                <li><button onClick={() => {navigate('/register')}} className='w-24 h-8 border-2 border-golapi rounded-xl hover:bg-golapi hover:text-white hover:font-bold'>Register</button></li></>}
                {loggecin && <>
                <li className=''><button onClick={() => {navigate('/account')}} className='w-24 h-8 border-2 border-golapi rounded-xl hover:bg-golapi hover:text-white hover:font-bold'>Account</button></li></>}
              </ul>
              <a onClick={() => {setOpenLeft(true)}} className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;