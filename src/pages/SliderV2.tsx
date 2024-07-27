import React, { useEffect, useState } from "react";
import Slider0 from '../assets/images/slider/aiweb0.png';
import Slider1 from '../assets/images/slider/aiweb1.png';
import Slider2 from '../assets/images/slider/aiweb2.png';
import Slider3 from '../assets/images/slider/aiweb3.jpeg';
import Slider4 from '../assets/images/slider/aiweb4.jpeg';
import Slider5 from '../assets/images/slider/aiweb5.png';
import Slider6 from '../assets/images/slider/aiweb6.png';
import Slider7 from '../assets/images/slider/aiweb7.jpeg';
import { SELECTION } from "@/types";

const LOGOS = [
  {logo: Slider0, value: SELECTION.SKETCH, text: 'Generate webpages from this Hand Drawing'},
  {logo: Slider1, value: SELECTION.IMAGE, text: 'Generate Responsive components'},
  {logo: Slider2, value: SELECTION.URL, text: 'Generate beautiful webpages'},
  {logo: Slider3, value: SELECTION.IMAGE, text: 'Generate webpage Ecommerce website'},
  {logo: Slider4, value: SELECTION.URL, text: 'Generate Webpages for your Resturent website'},
  {logo: Slider5, value: SELECTION.IMAGE, text: 'Website that suits your business'},
  {logo: Slider6, value: SELECTION.IMAGE, text: 'Website that suits your business'},
  {logo: Slider7, value: SELECTION.IMAGE, text: 'Website that suits your business'}
];

export const SliderV2 = (props: {updateselection: (data: SELECTION) => void}) => {
  const [n, setN] = useState(0);
  const { innerWidth: width } = window;

  const Slide = (props1: {updateselection: (data: SELECTION) => void}) => {
    return (
      <div className="flex flex-row justify-center w-auto h-fit overflow-hidden">
        <div onClick={() => {props1.updateselection(LOGOS[n % LOGOS.length].value)}} className="relative flex w-[30%] transition-opacity duration-1000 ease-in-out rounded-lg mt-auto">
        <img key={(n) % LOGOS.length} src={LOGOS[n % LOGOS.length].logo} className="rounded-xl" />
            <div className="absolute bg-white text-black rounded-md p-2 shadow-2xl shadow-black w-[80%] mx-[10%]" style={{bottom: -12}}>
                <p>{LOGOS[n % LOGOS.length].text}</p>
            </div>
        </div>

        {/* <div className="relative flex w-[20%] transition-opacity duration-1000 ease-in-out rounded-lg mt-auto ml-10">
        <img key={(n + 1) % LOGOS.length} src={LOGOS[(n + 1) % LOGOS.length].logo} className="rounded-lg" />
            <div className="absolute bg-white text-black rounded-md p-2 shadow-2xl shadow-black w-[80%] mx-[10%]" style={{bottom: -12}}>
                <p>{LOGOS[(n + 1) % LOGOS.length].text}</p>
            </div>
        </div> */}

        <div onClick={() => {props1.updateselection(LOGOS[(n+1) % LOGOS.length].value)}} className="relative flex w-[35%] h-[100%] my-auto transition-opacity duration-1000 ease-in-out rounded-lg mx-10 mb-auto">
        <img key={(n + 1) % LOGOS.length} src={LOGOS[(n + 1) % LOGOS.length].logo} className="rounded-xl" />
        <div className="absolute bg-white text-black rounded-md p-2 shadow-2xl shadow-black w-[80%] mx-[10%]" style={{bottom: -12}}>
                <p>{LOGOS[(n + 1) % LOGOS.length].text}</p>
            </div>
        </div>

        <div onClick={() => {props1.updateselection(LOGOS[(n+2) % LOGOS.length].value)}} className="relative flex w-[30%] transition-opacity duration-1000 ease-in-out rounded-lg mt-auto mr-10">
        <img key={(n + 2) % LOGOS.length} src={LOGOS[(n + 2) % LOGOS.length].logo} className="rounded-xl" />
        <div className="absolute bg-white text-black rounded-md p-2 shadow-2xl shadow-black w-[80%] mx-[10%]" style={{bottom: -12}}>
                <p>{LOGOS[(n + 2) % LOGOS.length].text}</p>
            </div>
        </div>

        {/* <div className="relative flex w-[20%] transition-opacity duration-1000 ease-in-out rounded-lg mt-auto">
        <img key={(n + 4) % LOGOS.length} src={LOGOS[(n + 4) % LOGOS.length].logo} className="rounded-lg" />
        <div className="absolute bg-white text-black rounded-md p-2 shadow-2xl shadow-black w-[80%] mx-[10%]" style={{bottom: -12}}>
                <p>{LOGOS[(n + 4) % LOGOS.length].text}</p>
            </div>
        </div> */}
      </div>
    )
  }
  const SlideM = (props2: {updateselection: (data: SELECTION) => void}) => {
    return (
      <div onClick={() => {props2.updateselection(LOGOS[n % LOGOS.length].value)}} className="relative flex flex-row content center justify-center">
        <img key={(n) % LOGOS.length} src={LOGOS[n % LOGOS.length].logo} className="w-[80%] my-auto transition-opacity duration-1000 ease-in-out rounded-xl" />
        <div className="absolute bg-white text-black text-xs rounded-md p-2 shadow-2xl shadow-black w-[60%] mx-[10%]" style={{bottom: -12}}>
                <p>{LOGOS[(n) % LOGOS.length].text}</p>
            </div>
      </div>
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setN((prevN) => prevN + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row content center pb-10 mb-24">
     {width > 900 ? <Slide updateselection={props.updateselection} /> : <SlideM updateselection={props.updateselection} />}
    </div>
  )
};
