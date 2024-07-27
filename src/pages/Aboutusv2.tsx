import { Homeselector } from "@/functions/enums/homeselector";
import { setHomeState } from "@/reducer/homestate";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import alim from '../assets/images/Group 1.svg';
import Sepbtm from '../assets/images/separator-bottom.svg';
import Teams from "./Teams";
import { useNavigate } from "react-router";
import NavUpdated from "@/components/NavUpdated";
import FooterUpdated from "./FooterUpdated";

export default function Aboutusv2() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };

    return (<div className="bg-[#06060E]" onScroll={handleScroll}>
        <NavUpdated scroll={scrollTop} />
    {/* <div className="relative w-full h-full">
        <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
        </div> */}
        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row my-16 gap-10 sm:mx-10 xs:mx-10 md:mx-10 lg:mx-28 xl:mx:28">
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
                    <button onClick={() => { 
                        dispatch(setHomeState(Homeselector.CONTACT));
                        navigate('/')
                         } } className="px-3 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-md">Contact Us</button>
                </div>
            </div>
        </div>

    </div><div className="py-5 my-5 w-full">
            <Teams />
        </div>
        <div className="h-[10%]"></div>
            {/* <div className="relative w-full">
                <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div> */}
            <FooterUpdated />
        </div>)
}