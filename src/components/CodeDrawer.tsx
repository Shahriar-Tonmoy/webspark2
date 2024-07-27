import Logo from '../assets/images/glogo.svg';
// import '../assets/css/bootstrap.min.css';
// import '../assets/css/font-awesome.css';
// import '../assets/css/templatemo-softy-pinko.css';
import '../index.css';
import { Drawer } from '@material-tailwind/react';
import { Dispatch, SetStateAction } from 'react';
import { AiTwotoneHome } from "react-icons/ai";
// import { AiTwotoneInfoCircle } from "react-icons/ai";
//import { FcProcess } from "react-icons/fc";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import React from 'react';
import { useNavigate } from 'react-router';
import logout from '@/functions/logout/logout';
import { useDispatch } from 'react-redux';
import { setapptokenck } from '@/reducer/cookiestate';
//import { FaUserAlt } from "react-icons/fa";


type setDrawer = Dispatch<SetStateAction<boolean>>;
export default function CodeDrawer(props: {setOpen: setDrawer; open: boolean}) {

  const closeDrawerLeft = () => {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
<Drawer
        placement="left"
        open={props.open}
        onClose={closeDrawerLeft}
        className="p-4 bg-slate-200 w-52"
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      >
        <div className="mb-6 flex items-center justify-between bg-slate-200">
        <img src={Logo} alt="GenWebBuilder" className='w-40 align-middle'/>
          <button
            onClick={() => {props.setOpen(false)}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
        </div>
        <div className='flex flex-col items-center justify-left'>
    <a onClick={() => {
      console.log('clicked')
      // props.setOpen(false)
      navigate('/')
      }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#welcome">
        <AiTwotoneHome /><p className='text-left mx-2 my-auto'>  Home</p>
    </a>
    <a onClick={() => {
      props.setOpen(false)
      navigate('/account')
      }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#work-process">
        <FaUser /><p className='text-left mx-2 my-auto'>Profile</p>
    </a>
    <a onClick={() => {
      props.setOpen(false)
      navigate('/services')
      }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#pricing-plans">
        <FaRegMoneyBillAlt /><p className='text-left mx-2 my-auto'>Pricing</p>
    </a>
    <a onClick={() => {
      props.setOpen(false)
      navigate('/history')
      }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#pricing-plans">
        <GrHistory /><p className='text-left mx-2 my-auto'>History</p>
    </a>
    <a onClick={() => {
      props.setOpen(false)
      logout(() => {
        dispatch(setapptokenck(''));
        navigate('/')
      })
      }} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2 my-auto' href="#contact-us">
        <LuLogOut /><p className='text-left mx-2 my-auto'>Log Out</p>
    </a>
    {/* <a onClick={() => {navigate('/login')}} className='h-10 w-full m-1 flex items-center justify-left text-black rounded-md hover:text-blue-700 hover:bg-slate-300 px-2'>
        <FaUserAlt /><p className='text-left mx-2'>Account</p>
    </a> */}
</div>

      </Drawer>
      );
}