import React from "react";
import HTML from '../../../assets/icons/icons8-html.svg';
import CSS from '../../../assets/icons/icons8-css.svg';
import JS from '../../../assets/icons/icons8-javascript.svg';
import REACT from '../../../assets/icons/icons8-react-native.svg';
import TAILWIND from '../../../assets/icons/icons8-tailwind-css.svg';
import IONIC from '../../../assets/icons/icons8-ionic.svg';
import BOOTSTRAP from '../../../assets/icons/icons8-bootstrap.svg';
import CODE from '../../../assets/icons/icons8-source-code-48.png';
import VUE from '../../../assets/icons/icons8-vue-js.svg';
import GITHUB from '../../../assets/icons/icons8-github-50.png';


  
  const LOGOS = [
    <img src={HTML} />,
    <img src={CSS} />,
    <img src={JS} />,
    <img src={REACT} />,
    <img src={TAILWIND} />,
    <img src={IONIC} />,
    <img src={BOOTSTRAP} />,
    <img src={CODE} />,
    <img src={VUE} />,
    <img src={GITHUB} />,
  ];
  
  export const InfiniteSlider = () => {
    return (
      <div className="relative m-auto xs:w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    );
  };
  