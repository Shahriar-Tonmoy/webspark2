// import React from 'react'
import React, { useEffect, useState } from "react"
import "../style/css/bootstrap.css"
import "../style/css/style.css"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux";
import { setHomeState } from "@/reducer/homestate";
import { Homeselector } from "@/functions/enums/homeselector";
import LOGO from '../assets/images/GWBICONBK-82.png';
import SSLC from '../assets/images/sslc.jpeg';

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect( () => {
        const intervalId = setInterval(() => {
          setCurrentYear(new Date().getFullYear());
        }, 1000);
    
        return () => clearInterval(intervalId);
    },[])
  return (
    <>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a onClick={() => {navigate('/')}} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={LOGO} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-golapi">GenWebBuilder</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                <li>
                    <a onClick={() => {
                      dispatch(setHomeState(Homeselector.FEATURES))
                      navigate('/')
                      }} className="hover:underline me-4 md:me-6 cursor-pointer">About</a>
                </li>
                <li>
                    <a onClick={() => {navigate('/privacypolicy')}} className="hover:underline me-4 md:me-6 cursor-pointer">Privacy Policy</a>
                </li>
                <li>
                    <a onClick={() => {navigate('/deliverypolicy')}} className="hover:underline me-4 md:me-6 cursor-pointer">Delivery Policy</a>
                </li>
                <li>
                    <a onClick={() => {navigate('/refundpolicy')}} className="hover:underline me-4 md:me-6 cursor-pointer">Refund Policy</a>
                </li>
                <li>
                    <a onClick={() => {
                      dispatch(setHomeState(Homeselector.CONTACT))
                      navigate('/')
                      }} className="hover:underline cursor-pointer">Contact</a>
                </li>
            </ul>
        </div>
        <img src={SSLC} />
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </div>
        <footer>
            <div className="container">
            

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <ul className="social">
                            <li><a href="https://www.facebook.com/genwebbuilder/" target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook" style={{color: '#1773EA'}}></i></a></li>
                            <li><a href="https://twitter.com/gen_web_builder" target='_blank' rel="noopener noreferrer"><i className="fa fa-twitter" style={{color: '#1C96E8'}}></i></a></li>
                            <li><a href="https://www.linkedin.com/company/genwebbuilder/about/?viewAsMember=true" target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin" style={{color: '#0076B3'}}></i></a></li>
                            <li><a href="https://www.youtube.com/@GenWebBuilder" target='_blank' rel="noopener noreferrer"><i className="fa fa-youtube-play" style={{color: 'red'}}></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="copyright">Copyright &copy; {currentYear} Contessa Exciteai Limited</p>
                        <p className='text-center text-white text-xs mb-5'> Address: Ataturk Tower, Floor: 12B, 22 Kemal Ataturk Avenue, Banani; Gulshan PS; Dhaka-1213; Bangladesh</p>
                    </div>
                </div>
            </div>
        </footer></>
  )
}

export default Footer