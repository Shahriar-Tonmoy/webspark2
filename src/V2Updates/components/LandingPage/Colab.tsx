import React from "react";

import uploadimg from '../../../assets/images/upload.svg';
import webimg from '../../../assets/images/Web.svg';
import sendscanimg from '../../../assets/images/Send-Scan.svg';

export default function Colab() {
  return (
    <div className="container mx-auto xs:px-3 sm:px-3 md:px-0 lg:px-0 mt-6">
      {/* outer grid */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 w-full">
        {/* left column */}
        <div className="grid md:grid-rows-4 lg:grid-rows-4 gap-4">
          {/* first row */}
          <div className="flex flex-col row-span-1 bg-[#F3F4F6] xs:pl-7 sm:pl-7 md:pl-12 lg:pl-20 pt-12 pb-4 rounded-3xl relative">
            <p className="xs:text-[27px] sm:text-[30px] md:text-[40px] lg:text-[35px]  font-[450px] text-[#000000]">Faster build.
            </p>
            <p className="xs:text-[27px] sm:text-[30px] md:text-[40px] lg:text-[35px]  font-[450px] text-[#000000]">More innovation.</p>
            <div className="gap-[20%] absolute xs:right-[40%] sm:right-[45%] md:right-[34%] lg:right-[38%] xs:top-[12%] sm:top-[14%] md:top-[10%] lg:top-[20%]">
              <div className="w-11 absolute top-0 left-0">
                <img className="" src="../assets/images/RotatedLogo.png" alt="" />
              </div>
              <div className="w-11 absolute top-5 left-16">
                <img className="" src="../assets/images/RotatedLogo.png" alt="" />
              </div>
              <div className="xs:hidden sm:block lg:block w-11 absolute top-2 left-32">
                <img className="" src="../assets/images/RotatedLogo.png" alt="" />
              </div>

            </div>
            <div className="xs:hidden sm:hiddn md:block lg:block absolute right-0 bottom-0 w-[43%]">
              <img src="../assets/images/curve_1.png" alt="" />
            </div>
          </div>
          {/* second row */}
          <div className="bg-[#F3F4F6] row-span-3  rounded-3xl xs:pl-7 sm:pl-7 md:pl-12 lg:pl-20 py-10">
            <div className="xs:text-[22px] sm:text-[25px] md:text-[35px] lg:text-[35px] xs:text-center sm:text-center md:text-left lg:text-left font-[450px] w-[80%] text-[#000000]"><p>Go from Figma/Image  to real website in minutes</p></div>
            <div className="grid grid-cols-11 w-[95%] mt-10">
              <div className="flex flex-col xs:gap-2 sm:gap-2  md:gap-4  lg:gap-8 xs:py-4 sm:py-7 md:py-10 lg:py-10 col-span-5 items-center justify-center  bg-[#FFFFFF] rounded-lg">
                <div className=""><img src={uploadimg} alt="" className="xs:w-8 sm:w-10 md:w-full lg:w-full" /></div>
                <div className="w-full pl-[10%] pr-[5%]"><p className="xs:text-sm sm:text-sm md:text-xl lg:text-xl text-center text-[#000000]">Import your Figma design or any image </p></div>
              </div>
              <div className="flex flex-col justify-center col-span-1 gap-8">
                <div><img src="../assets/images/Dotted_Line.png" alt="" /></div>
                <div><img src="../assets/images/Dotted_Line.png" alt="" /></div>
                <div><img src="../assets/images/Dotted_Line.png" alt="" /></div>
                <div><img src="../assets/images/Dotted_Line.png" alt="" /></div>
              </div>
              <div className="flex items-center justify-center rounded-lg col-span-5  bg-[#FFFFFF]">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div><img src={webimg} alt="" className="xs:w-8 sm:w-10 md:w-full lg:w-full" /></div>
                  <div className="w-[80%]"><p className="xs:text-sm sm:text-sm md:text-xl lg:text-xl text-center text-[#000000]">Websites</p></div>
                </div>
              </div>
            </div>
            <div className="mt-10 text-[#000000] font-normal w-[90%]">
              <p className="xs:text-base sm:text-base md:text-xl text-left">Websparks offers a streamlined path from Figma/ image to a live website, bypassing manual coding. Import your Figma design, maintain all elements, and publish with ease. Every detail from your Figma file, including layers and groups, is preserved.</p>
            </div>
          </div>
        </div>
        {/* right column */}
        <div className="bg-[#F3F4F6] rounded-3xl xs:h-[550px] sm:h-[600px] md:h-[850px] lg:h-full pt-6">
          <div className='flex flex-row pl-6 gap-2'>
            <img src={sendscanimg} className='w-[24px]' />
            <p className='text-[24px] text-[#000000]'>Collaboration</p>
          </div>
          <div className="mt-3 w-[98%] pl-6">
            <p className="xs:text-base sm:text-base md:text-xl font-normal text-[#000000]">
              Make teamwork seamless. Tools for your team and stakeholders to share feedback and iterate faster.
            </p>
          </div>
          <div className="mt-[18px] relative z-10">
            <div className="absolute left-0 top-0 xs:hidden sm:hidden md:hidden lg:block">
              <img src="../assets/images/curve.png" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              {/* people icons on white board */}
              <div className="flex items-center xs:w-[85%] sm:w-[75%] md:w-max justify-center gap-4 absolute
              xs:top-10 sm:top-10  md:top-16 lg:top-32 xs:left-8 sm:left-16 md:left-32 lg:left-14 bg-white py-[3%] pl-[3%] pr-[15%] rounded-lg rotate-[14.95deg] z-20">
                <div className="bg-[#EFF1F7] w-16 rounded-full"><img className="" src="../assets/images/c53224ba61e3d3b2200bc54e63185308f42c7b54.png" alt="" /></div>
                <div className="bg-[#EFF1F7] w-16 rounded-full"><img className="" src="../assets/images/f10c8438eb0086227f363c5746056ab2d5dc898d.png" alt="" /></div>
                <div className="bg-[#EFF1F7] w-16 rounded-full"><img className="" src="../assets/images/e11d0914c45ac2e8efc4a64e09d9e8e523b8a6c8.png" alt="" /></div>
                <div className="bg-[#EFF1F7] w-16 rounded-full"><img className="" src="../assets/images/86bdcbae041aadb0dbe5350f90bc39d88c249900.png" alt="" /></div>
              </div>
            </div>
            {/* homepage image */}
            <div
              className="w-[90%] h-[440px] bg-[url(../assets/images/homepage.png)] bg-contain bg-center bg-no-repeat xs:-top-[270px] sm:-top-60 md:-top-14 lg:-top-10 left-[5%] mt-64 absolute z-30">
              <div className="xs:w-[25px] sm:w-[30px] md:w-[40px] xs:h-[25px] sm:h-[30px] md:h-[40px] bg-[#eff1f7] rounded-full relative z-[79] xs:top-[37%] sm:top-[30%] md:top-[23%] xs:-left-[10%] sm:-left-[6%] md:left-[1%] mr-0 mb-0 ml-[44px]">
                <div
                  className="w-full h-full bg-[url(../assets/images/c53224ba61e3d3b2200bc54e63185308f42c7b54.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[80]">
                </div>
              </div>
              <div
                className="xs:w-[25px] sm:w-[30px] md:w-[40px] xs:h-[25px] sm:h-[30px] md:h-[40px] bg-[#eff1f7] rounded-[50px] relative overflow-hidden z-[75] mt-[70px] mr-0 mb-0 xs:top-[125px] sm:top-28 md:top-[28%] left-[63%]">
                <div
                  className="w-full h-full bg-[url(../assets/images/f10c8438eb0086227f363c5746056ab2d5dc898d.png)] bg-cover bg-no-repeat absolute  z-[76]">
                </div>
              </div>
              <div
                className="xs:w-[25px] sm:w-[30px] md:w-[40px] xs:h-[25px] sm:h-[30px] md:h-[40px] bg-[#eff1f7] rounded-[50px] absolute xs:top-[55%] sm:top-[60%] md:top-[70%] left-[96%] overflow-hidden z-[83]">
                <div
                  className="w-full h-full bg-[url(../assets/images/e11d0914c45ac2e8efc4a64e09d9e8e523b8a6c8.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[84]">
                </div>
              </div>
              {/* Your prompt */}
              <div
                className="xs:w-[90%] sm:w-[80%] h-[56px] bg-[#fff] rounded-[12px] border-solid border-[0.5px] border-[#d1d5db] absolute xs:top-[65%] sm:top-[70%] md:top-[90%] lg:top-[85%] left-1/2 translate-x-[-50.68%] translate-y-0 overflow-hidden shadow-[0_4px_6px_0_rgba(16,24,40,0.1)] z-[71]">
                <div
                  className="w-[24px] h-[24px] bg-[url(../assets/images/edfad79d-8e74-41fc-a2e8-adade92f47a1.png)] bg-cover bg-no-repeat absolute top-[15.5px] left-[15.5px] overflow-hidden z-[72]">
                </div>
                <div
                  className="w-[24px] h-[24px] bg-[url(../assets/images/f3d0c669-5473-4464-9375-50d9029fb48c.png)] bg-cover bg-no-repeat absolute top-[15.5px] right-[15.5px] overflow-hidden z-[73]">
                </div><span
                  className="flex h-[20px] justify-start items-start font-['Inter'] text-[14px] font-medium leading-[20px] text-[#6b7280] absolute top-[calc(50%-10.5px)] left-[51.5px] text-left overflow-hidden whitespace-nowrap z-[74]">Enter
                  your prompt hare</span>
              </div>
            </div>
          </div>
          {/* black image of an website */}
          {/* <div
            className="w-[90%] h-[347px] bg-[url(../assets/images/a810620c-a085-478f-adff-f17320c97671.png)] bg-cover bg-no-repeat mt-64 absolute z-30">
            <div className="w-[40px] h-[40px] bg-[#eff1f7] rounded-[50px] relative z-[79] mt-[59px] mr-0 mb-0 ml-[44px]">
              <div
                className="w-full h-full bg-[url(../assets/images/c53224ba61e3d3b2200bc54e63185308f42c7b54.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[80]">
              </div>
            </div>
            <div
              className="w-[40px] h-[40px] bg-[#eff1f7] rounded-[50px] relative overflow-hidden z-[75] mt-[70px] mr-0 mb-0 ml-[310px]">
              <div
                className="w-full h-full bg-[url(../assets/images/f10c8438eb0086227f363c5746056ab2d5dc898d.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[76]">
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}