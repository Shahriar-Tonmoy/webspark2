import React, { useEffect, useState } from "react";
import Slider1 from '../../../assets/Handwritten design to WebPage.png';
import Slider2 from '../../../assets/Image to webpage.png';
import Slider3 from '../../../assets/Sketch Board Design to Webpage.png';

const LOGOS = [
  Slider1,
  Slider2,
  Slider3
];

export const InfiniteSliderImage = () => {
  const [n, setN] = useState(0);
  const { innerWidth: width } = window;

  const Slide = () => {
    return (
      <div className="flex flex-row content center">
        <img key={(n) % LOGOS.length} src={LOGOS[n % LOGOS.length]} className="w-[25%] my-auto transition-opacity duration-1000 ease-in-out" />
        <img key={(n + 1) % LOGOS.length} src={LOGOS[(n + 1) % LOGOS.length]} className="w-[50%] h-[100%] my-auto transition-opacity duration-1000 ease-in-out" />
        <img key={(n + 2) % LOGOS.length} src={LOGOS[(n + 2) % LOGOS.length]} className="w-[25%] my-auto transition-opacity duration-1000 ease-in-out" />
      </div>
    )
  }
  const SlideM = () => {
    return (
      <div className="flex flex-row content center">
        <img key={(n) % LOGOS.length} src={LOGOS[n % LOGOS.length]} className="w-[100%] my-auto transition-opacity duration-1000 ease-in-out" />
      </div>
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setN((prevN) => prevN + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (width > 700) ?(
    <div className="flex flex-row content center">
      <Slide />
    </div>
  ): (<SlideM />)
};
