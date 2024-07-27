import React from "react";

export default function Hero() {
  return (
    <div className=" bg-[#f3f4f6] shadow-[0_3px_5px_0_rgba(0,0,0,0.1)] mt-36 rounded-[21px] container mx-auto 
    xs:px-3 sm:px-3 md:px-0 lg:px-0 pb-32 overflow-hidden">
      {/* black card with colorful text */}
      <div
        className="flex w-full md:w-fit mx-auto xs:py-2 xs:px-1 sm:py-2 sm:px-1 md:py-4 md:px-3 lg:py-4 lg:px-7 flex-col gap-[12px] items-start flex-nowrap bg-[#000] rounded-[45px] border-solid border border-[#141414] overflow-hidden z-[36] xs:mt-[45px] sm:mt-[45px] md:mt-[93px] lg:mt-[93px] mr-0 mb-0 ml-0">
        <div
          className="w-full font-['Outfit'] font-normal leading-[17.64px] tracking-[0.14px] text-center z-[37]">
          <span
            className="font-['Outfit'] xs:text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-normal leading-[17.64px] text-[#fff] tracking-[0.14px] relative text-center">New
            Era of Cloud Deploy</span>
          <span
            className="font-['Outfit'] xs:text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FFD770] via-[#FF70AC] via-[#EB70FF] via-[#9E70FF] to-[#70B8FF]"> Request
            Early Access</span>
        </div>
      </div>
      {/* Hero title */}
      <div className="flex flex-col gap-2">
        <p className="font-['Inter'] xxs:text-[20px] xs:text-[35px] sm:text-[40px] md:text-[76px] lg:text-[76px] font-medium  text-[#000] relative text-center mt-[20px] w-5/6 mx-auto">The complete platform to build the web.</p>
        <p className="xs:text-lg sm:text-lg md:text-2xl lg:text-2xl font-normal xs:w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 text-center mx-auto">
          Your team’s toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web experiences with Websparks
        </p>
      </div>
      <div className="flex flerx-col gap-1 mt-10 w-max mx-auto ">
        <div
          className="flex w-[116px] p-2 justify-center items-start shrink-0 flex-nowrap rounded-[16px] relative z-[11] border-2 border-black">
          <span
            className="flex w-[88px] h-[15px] justify-center items-center shrink-0 basis-auto font-['Roboto'] md:text-[14.765625px] lg:text-[14px] font-medium leading-[15px] text-[#000] relative text-center whitespace-nowrap">Open
            the app</span>
        </div>

        <div
          className="flex w-[114px] pt-[9px] pr-[14px] pb-[9px] pl-[14px] justify-center items-start shrink-0 flex-nowrap bg-[#0e0e0e] rounded-[16px] relative z-[14]">
          <span
            className="flex w-[86px] h-[15px] justify-center items-center shrink-0 basis-auto font-['Roboto'] text-[14.4140625px] font-medium leading-[15px] text-[#fff] relative text-center whitespace-nowrap z-[15]">Book
            an intro</span>
        </div>

      </div>

      {/* Hero image */}
      <div className="xs:w-[90%] sm:w-[75%] md:w-[70%] lg:w-[45%] xs:h-40  md:h-80 mx-auto mt-32 bg-[url(../assets/images/net.png)] bg-[length:100%_100%] bg-no-repeat relative mb-4">
        {/* Black customize */}
        <div className="flex gap-1 md:py-[10px] xs:px-[7px] xs:py-[5px] sm:px-[7px] sm:py-[5px] md:px-[10px] lg:py-[10px] lg:px-[10px] rounded-md bg-black w-max absolute xs:-top-5 md:-top-3 lg:-top-3 xs:-right-2 sm:right-0 md:right-[14%] lg:right-[12%]">
          <div
            className="shrink-0 basis-auto font-['Roboto'] xs:text-[8px] sm:text-[8px] md:text-[10px] lg:text-[10px] font-medium leading-[16px] text-[#fffafa] tracking-[1.5px] relative text-left uppercase underline whitespace-nowrap z-[55]">Customize</div>
          <div
            className="w-[12px] h-[12px] bg-[url(../assets/images/b0880d06-f5a4-4183-9741-2d16765324f7.png)] bg-[length:100%_100%] bg-no-repeat relative z-[57] mt-[2px] mr-0 mb-0 ml-[2px]">
          </div>
        </div>
        <div className="absolute w-3/4 left-[24%] -top-[15%]">
          <img src="../assets/images/048cafd4-89fb-4b57-bee0-ecfc41657399.png" alt="" />
        </div>
        {/* 1st Rotated logo */}
        <div className="absolute xs:w-7 sm:w-7 md:w-14 lg:w-14 xs:left-[20%] sm:left[20%] top-[20%] lg:top[20%] md:left-[22%]">
          <img src="../assets/images/RotatedLogo.png" alt="" />
        </div>
        {/* 2nd Rotated logo */}
        <div className="absolute xs:w-6 sm:w-6 md:w-12 lg:w-12 xs:left-[40%] sm:left[40%] top-[40%] lg:top[40%] md:left-[44%]">
          <img src="../assets/images/RotatedLogo.png" alt="" />
        </div>
        {/* 3rd and fourth rotated logo */}

        <div
          className="flex xs:w-32 sm:w-32 md:w-72 lg:w-72 h-14 justify-between items-center relative z-[43] xs:left-[20%] sm:left-[20%] xs:top-[50%] sm:top-[50%] md:top-[60%] lg:top-[60%] md:left-[18%] lg:left-[18%]">
          <div
            className="xs:w-6 sm:w-6 md:w-11 lg:w-11 xs:h-6 sm:h-6 md:h-10 lg:h-10 shrink-0 bg-[url(../assets/images/RotatedLogo.png)] bg-cover bg-no-repeat relative z-[42]">
          </div>
          {/*76 */}
          <div
            className="xs:w-6 sm:w-6 md:w-11 lg:w-11 xs:h-6 sm:h-6 md:h-10 lg:h-10 shrink-0 bg-[url(../assets/images/RotatedLogo.png)]  bg-cover bg-no-repeat relative z-[43]">
          </div>
        </div>
        {/* 5th rotated logo */}
        <div className="absolute xs:w-6 sm:w-6 md:w-12 lg:w-12 xs:left-[40%] sm:left[40%] top-[75%] md:left-[44%]">
          <img src="../assets/images/RotatedLogo.png" alt="" />
        </div>
        {/* Add Pages */}

        <div className="flex gap-[6px] xs:py-1 xs:px-1 sm:py-1 sm:px-1 md:py-2 md:px-2 lg:py-2 lg:px-2 rounded-lg items-center   bg-[#F9FAFB] w-max absolute left-0 bottom-0 rotate-[-4deg]">
          <div className="xs:w-3 sm-w-3 md:w-6 lg:w-6">
            <img src="../assets/images/Plus.png" alt="" />
          </div>
          <div>
            <p className="underline font-['Inter'] xs:text-xs sm:text-xs md:text-base lg:text-base md:mr-14 lg:mr-20">Add Pages</p>
          </div>
        </div>
        {/* sidebar minimize */}
        <div className="flex items-center justify-center w-max  absolute right-[5%] bottom-[12%] border-[0.5px] border-[#D1D5DB] bg-[#F9FAFB] rounded-lg xs:p-[6px] sm:p-[6px]  md:p-[12px] lg:p-[12px]">
            <div className="rounded-xl">
              <img src="../assets/images/MinimizeSidebar.png" alt="" className='xs:w-3 sm:w-3 md:w-5 lg:w-5'/>
            </div>
        </div>
      </div>
    </div>
  )
}