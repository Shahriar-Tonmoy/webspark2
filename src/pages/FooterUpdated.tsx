import React from 'react';
import Seperator from '../assets/images/separator-top.svg';
import Sepbtm from '../assets/images/separator-bottom.svg';
import logo from '../assets/images/glogo1.png';
import './Animatedline.scss'
import sslc from '../assets/images/sslcmrzz.png';
import stripe from '../assets/images/stwb.png';
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setHomeState } from '@/reducer/homestate';
import { Homeselector } from '@/functions/enums/homeselector';
export default function FooterUpdated() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col bg-[#06060E]'>
            <div className="w-full h-[10%]"></div>
            <div className="relative w-full">
                <img src={Seperator} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
            <div className="w-full h-[10%]"></div>
            <div className='flex w-full mt-10'>
                <div className='mx-auto'>
                    <img src={logo} className='w-52' />
                </div>
            </div>
            <div className='w-full lg:w-[40%] xl:w-[40%] mx-auto mb-24'>
                <p className="text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl font-bold text-slate-500 text-center mt-3 mb-5">Create Website By GenWebBuilder So Quick Download And Make Your Site.</p>
            </div>
            <div className='w-full h-[10%]'></div>
            <div className="relative w-full">
                <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
            <div className='flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-center gap-[50%] py-10 px-24 xs:px-3 sm:px-3 md:px-8 lg:px-24 xl:px-24'>
                <div className='flex flex-col'>
                    <p className='font-bold text-slate-200 mb-2 text-2xl'>NewsLetter</p>
                    <p className='mb-5 text-[#616390]'>SubsCribe to be up to date with our services</p>
                    <div className='flex-flex-row w-full mx-auto justify-center mb-10'>
                        <div className='flex flex-row mx-auto justify-center gap-2'>
                        <input type="email"
                            className="py-3 bg-[#06060E] border-2 border-[#272838] outline-0 active:outline-0 focus:outline-0 active:border-[#7064E9] focus:border-[#7064E9] rounded-lg px-2 w-[70%] m-0"
                            id="exampleInput91" placeholder="Email address" />
                        <button className='py-3 px-4 bg-[#7064E9] rounded-lg text-white m-0'>{'->'}</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="flex flex-col justify-center items-center h-fit">
                        <div className="p-2 bg-[#0F1021]">
                        <   p className="text-lg font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">Payment Partner</p>
                        </div>
                    </div>
                    <div className='flex flex-row mx-auto mt-5'>
                        <img src={sslc} className='w-24' />
                        <img src={stripe} className='w-24' />
                    </div>
                    <div className='mx-auto my-5'>
                        
                    </div>
                </div>

            </div>
            


            <div className='flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between bg-[#05050B] border-t-2 border-[#1E1E24] w-full py-4 px-24 xs:px-3 sm:px-3 md:px-8 lg:px-24 xl:px-24'>
                <div className='flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-2 my-auto my-3'>
                    <p className='my-auto text-[#616390] cursor-pointer' onClick={() => {navigate('/privacypolicy')}}>Privacy Policy</p>
                    <p className='my-auto text-[#1E1E24] hidden lg:block xl:block'>|</p>
                    <p className='my-auto text-[#616390] cursor-pointer' onClick={() => {navigate('/refundpolicy')}}>Refund Policy</p>
                    <p className='my-auto text-[#1E1E24] hidden lg:block xl:block'>|</p>
                    <p className='my-auto text-[#616390] cursor-pointer' onClick={() => {navigate('/deliverypolicy')}}>Delivery Policy</p>
                    <p className='my-auto text-[#1E1E24] hidden lg:block xl:block'>|</p>
                    <p className='my-auto text-[#616390] cursor-pointer' onClick={() => {
                        dispatch(setHomeState(Homeselector.CONTACT))
                        navigate('/')
                        }}>Contact US</p>
                </div>
                <div className='flex items-center mx-auto my-3'>
                    <div className="flex flex-row my-auto mx-auto">
                        <ul className="flex flex-row gap-4 my-auto justify-center m-0 p-0">
                            <li className='my-auto'><a className='my-auto hover:text-white' href="https://www.facebook.com/genwebbuilder/" target='_blank' rel="noopener noreferrer"><SiFacebook /></a></li>
                            <li className='my-auto'><a className='my-auto hover:text-white' href="https://twitter.com/gen_web_builder" target='_blank' rel="noopener noreferrer"><FaTwitter /></a></li>
                            <li className='my-auto'><a className='my-auto hover:text-white' href="https://www.linkedin.com/company/genwebbuilder/about/?viewAsMember=true" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a></li>
                            <li className='my-auto'><a className='my-auto hover:text-white' href="https://www.youtube.com/@GenWebBuilder" target='_blank' rel="noopener noreferrer"><ImYoutube /></a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row text-blue-600 my-auto items-center justify-center my-3'>
                    <p className='my-auto text-center'>&copy; 2024 <a href='https://contessabd.com' className='no-underline hover:text-white'>Contessa</a> & <a href='https://exciteai.org' className='no-underline hover:text-white'>ExciteAI</a> Limited</p>
                </div>
            </div>
        </div>
    )
}