import React, { useState, useEffect, useRef } from "react";
import ServiceSection from "@/components/Services";
import banner from '../assets/images/aif.png';
import Seperator from '../assets/images/separator-top.svg';
import Sepbtm from '../assets/images/separator-bottom.svg';
import NavUpdated from "../components/NavUpdated";
import { CARDIMG } from "@/components/json/imgs";
import work from '../assets/images/work3.svg';
import { CiPlay1 } from "react-icons/ci";
import alim from '../assets/images/Group 1.svg';
import Pricing from "./Pricing";
import { InfiniteSlider } from "./sslcoomerz/pages/IconSlider";
import RelatedServices from "./RelatedServices";
import ContactUs from "./ContactUs";
import FooterUpdated from "./FooterUpdated";
import VideoModal from "@/components/VideoModal";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import { Homeselector } from '@/functions/enums/homeselector';
import { APPCOOKIE, VALIDATIONCOOKIE, cookieAvailale, getAppCookie } from "./Fuctions/appcookie/appcookie";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setHomeState } from "@/reducer/homestate";
import Teams from "./Teams";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomepageParallax() {

    useEffect(() => {
        AOS.init();
      }, [])

    const pagestate = useSelector((state: RootState) => state.item6.homestate);
    const [scrollTop, setScrollTop] = useState(0);
    const navigate = useNavigate();
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };
    const homesectionref = useRef(null);
    const pricingSectionRef = useRef(null);
    const contactsectionref = useRef(null);
    const featuresref = useRef(null);
    const workprocessref = useRef(null);
    const dispatch = useDispatch();
    const [loggenin, setLoggedin] = useState(false);
    useEffect(() => {
        if(cookieAvailale(APPCOOKIE)) {
          if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
            navigate('/activate')
          }
          else{
            setLoggedin(true);
          }
        }
        else {
            setLoggedin(false);
        }
      }, [])
    useEffect(() => {
        const scrollToSection = (ref) => {
            if (ref && ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
    
        switch (pagestate) {
            case Homeselector.HOME:
                scrollToSection(homesectionref);
                break;
            case Homeselector.CONTACT:
                scrollToSection(contactsectionref);
                break;
            case Homeselector.FEATURES:
                // scrollToSection(featuresref);
                navigate('/about')
                break;
            case Homeselector.PRICING:
                scrollToSection(pricingSectionRef);
                break;
            case Homeselector.WORKPROCESS:
                scrollToSection(workprocessref);
                break;
            default:
                break;
        }
    }, [pagestate]);
    const [videomodal, setvideomodal] = useState(false);
    return (
        <div className="bg-[#06060E] h-screen overflow-y-auto" onScroll={handleScroll} >
            <div ref={homesectionref} className="w-full p-0 m-0"></div>
            {videomodal && <VideoModal setclose={() => {setvideomodal(false)}} />}
            <NavUpdated scroll={scrollTop} />
            <div className="h-[5%]">

            </div>
            <div className="flex flex-col justify-center items-center h-full mt-32 mb-4">
                <div className="my-auto">
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-slate-200 text-center">Unlock The Power Of</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center">
                        <p className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent mr-4 text-center">GenWebBuilder</p>
                        <p className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold text-slate-200 text-center">with</p>
                    </div>
                    <p className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold text-slate-500 text-center">Cutting-Edge Generative AI!</p>
                    <p className="text-lg text-gray-400 mb-8 text-center">AI-Powered Website generator A Game-Changer in Web Development.</p>
                </div>
                <div onClick={loggenin ? () => {navigate('/code')} : () => {navigate('/register')}} className="p-4 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:shadow-pink-500 shadow-2xl text-white font-bold text-lg cursor-pointer" style={{backgroundImage: 'radial-gradient(85% 142% at 50% 75%, #ff3bd4 .74%, #7130c3 65%, #0f1021 100%)'}}>
                    Start Generating Free
                </div>
                <div className="flex items-center my-4">
                    <img className="w-10 my-auto" src={CARDIMG} alt="card" />
                    <p className="ml-4 my-auto text-slate-300">No Credit card Required</p>
                </div>
                <div className="relative w-full">
                    <div className="bg-[#0F1021] p-4 my-auto mx-auto w-fit">
                        <img src={banner} className="" alt="banner" />
                        <div className="absolute inset-0 flex justify-center items-center">
                        <div onClick={() => {setvideomodal(true)}} className="text-6xl bg-slate-300 opacity-50 p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"><CiPlay1 /></div>
                        </div>
                    </div>
                    <img src={Seperator} className="w-full absolute z-10 bottom-0" alt="separator" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-fit pt-28" >
                <div className="p-2 bg-[#0F1021]">
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">GET IN TOUCH FOR FREE</p>
                </div>
                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-200 text-center mt-3">Instant Website Generation with AI</p>
                <p className="text-lg text-slate-500 text-center">Provide Images, Get Instant AI-Generated Website</p>
            </div>
            <div className="w-full">
                <ServiceSection />
            </div>
            <div className="w-full h-[5%]"></div>
            <div className="relative w-full">
                <img src={Seperator} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
            <div ref={workprocessref} className="flex flex-col justify-center items-center w-full h-fit pt-28">
                <div className="p-2 bg-[#0F1021]">
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">How IT WORKS</p>
                </div>
                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-200 text-center mt-3">Guide Our AI to Create Your Website</p>
            </div>
            <div className="flex flex-col h-fit w-full mt-10 justify-between">
                <div className="bg-[#0F1021] p-6 my-auto mx-auto w-2/3 rounded-xl border-2 border-[#7064E9] shadow-xl shadow-[#7064E9] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={work} className="" />
                </div>
            </div>
            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row w-full h-fit justify-center my-16">
                <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row w-fit mt-auto text-slate-200 gap-4 mx-auto">
                <button onClick={loggenin ? () => {navigate('/code')} : () => {navigate('/register')}} className="px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200">Start Generating Free</button>
                <button onClick={() => {setvideomodal(true)}} className="flex flex-row bg-[#070710] px-6 py-3 rounded border-2 border-slate-700 transition duration-500 hover:bg-[#7064E9] hover:shadow-md hover:shadow-[#8277f7] hover:border-transparent">
                    <p className="my-auto mr-2 text-lg"><CiPlay1 /></p>
                    <p className="my-auto text-lg">See Action in Video</p>
                </button>
                </div>
            </div>
            <div className="h-[10%]"></div>
            {/* <div className="relative w-full">
                <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div> */}
            {/* <div ref={featuresref} className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row my-16 gap-10 sm:mx-10 xs:mx-10 md:mx-10 lg:mx-28 xl:mx:28">
                <div className="flex w-full">
                    <img src={alim} />
                </div>
                <div className="flex flex-col text-slate-500 lg:mx-24 xl:mx-24">
                    <div className="flex flex-col my-auto">
                    <p className="text-3xl xs:mb-3 sm:mb-5 md:mb-8 lg:mb-10 xl:mb-10 font-bold text-slate-200">Instant Website with AI</p>
                    <p className="text-md xs:mb-3 sm:mb-5 md:mb-8 lg:mb-10 xl:mb-10">Transform Your Ideas into Websites in Just 30 Seconds! Effortlessly Redesign Handwritten Designs and Use Our Web Crawler Feature. With GenWebBuilder, Bring Your Vision to Life Instantly.</p>
                    <p className="">- Get online in 30 seconds with GenWebBuilder.</p>
                    <p className="">- Turn handwritten designs into polished websites.</p>
                    <p className="">- Stay updated effortlessly with our web crawler feature.</p>
                    <div className="w-fit xs:mt-3 sm:mt-5 md:mt-8 lg:mt-10 xl:mt-10 text-white">
                    <button onClick={() => {dispatch(setHomeState(Homeselector.CONTACT))}} className="px-3 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-md">Contact Us</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className="py-5 my-5">
                    <Teams />
            </div> */}
            <div className="h-[10%]"></div>
            {/* <div className="relative w-full">
                <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div> */}
            <div className="h-[5%]"></div>
            <div ref={pricingSectionRef} className="flex flex-col justify-center items-center w-full h-fit">
                <div className="p-2 bg-[#0F1021]">
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">PRICING</p>
                </div>
                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-200 text-center mt-3">Commence Website Journey with AI</p>
            </div>
            <Pricing />
            <div className="w-full h-[15%]">

            </div>
            <div className="relative w-full">
                <img src={Seperator} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
            <div className="w-full h-[5%]"></div>
            <div className="flex flex-col justify-center items-center w-full h-fit">
                <div className="p-2 bg-[#0F1021]">
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">SUPPORTED LANGUAGE</p>
                </div>
                {/* <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-200 text-center mt-3">Commence Website Journey with AI</p> */}
                <div className="mt-4">
                    <p className='text-center mb-3 text-2xl font-bold text-slate-200'>Used by more than 100k developers World wide</p>
                </div>
            <InfiniteSlider />
            </div>
            <div className="w-full h-[15%]"></div>
            <div className="relative w-full">
                <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
            <div className="w-full h-[15%]"></div>
            <div className="flex flex-col justify-center items-center w-full h-fit">
            <div className="p-2 bg-[#0F1021] mb-3">
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">Boost Your Website Generation Productivity</p>
                </div>
                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl font-bold text-slate-200 text-center mt-3">Overcome Dependencies Block Today</p>
                <p className="mx-auto text-center text-lg text-slate-500 mt-3 mb-5">Collaborate with AI to generate beautiful and modern website</p>
                <div onClick={loggenin ? () => {navigate('/code')} : () => {navigate('/register')}} className="p-4 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:shadow-pink-500 shadow-2xl text-white font-bold text-lg mb-5" style={{backgroundImage: 'radial-gradient(85% 142% at 50% 75%, #ff3bd4 .74%, #7130c3 65%, #0f1021 100%)'}}>
                    Start Generating Free
                </div>
            </div>
            <RelatedServices loggedin={loggenin} />
            <div ref={contactsectionref} className="relative w-full">
                <img src={Seperator} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
            <ContactUs />
            
            <FooterUpdated />
        </div>

    );
}
