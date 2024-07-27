import React from "react";
import sendimg from "../../../assets/images/Send.png";

import brainimg from "../../../assets/images/Brain.svg";

export default function BugFixer() {
  return (
    <div className="flex container mx-auto xs:px-3 sm:px-3 md:px-0 lg:px-0 mt-6 justify-center content-center px-20">
      {/*wrapper box */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full bg-[#f3f4f6] rounded-[21px] relative shadow-[0_3px_5px_0_rgba(0,0,0,0.1)] lg:pb-20 gap-5">
        {/* <div className="absolute bottom-0 right-0">
          <img src="../assets/images/RotatedLogo.png" alt="" />
        </div> */}
        {/*rounded box on code page */}
        {/* <div 
        className="w-[295.944px] h-[329.841px] bg-[#141718] rounded-[119.5px] border-solid border border-[#4e5151] relative top-[24px] left-[854px] rotate-[-12.79deg] shadow-[0_4px_4px_0_rgba(255,255,255,0.25)] z-20">
          <div className='absolute top-10 left-16 right-4 text-[40px] text-white text-center'>
            <div className='flex-row w-fit justify-center items-center'>
            <img src={sendimg} className='mx-auto' /><p>FIX</p><p>{'CODE IN'}</p><p>{'1 CLICK'}</p>
            </div>
          </div>
      </div> */}
        {/*initial box */}
        <div className="flex flex-col px-5 pt-5 xs:pb-0 lg:pb-5 ">
          <div className="flex flex-row gap-3">
            <img src={brainimg} className="w-[20px]" />
            <p className="xs:text-[15px] md:text-[20px]">
              AI powered bug fixer
            </p>
          </div>
          <div className="my-3">
            <p className="xs:text-[20px] sm:text-[20px] text-[#000000] md:text-[40px] font-normal">
              {
                "Empower Your Codebase: Unifying Quality, Security, and Efficiency"
              }
            </p>
          </div>
          <div className="my-3">
            <p className="xs:text-[16px] md:text-[32px] lg:text-3xl font-normal">
              {
                "Our suite of developer tools helps keep your code base up to date on professional standards while you focus on building solutions."
              }
            </p>
          </div>

          <div className="flex xs:w-full sm:w-[80%] md:w-[50%] lg:w-max xs:h-10 md:h-12 pt-[12px] pr-2 pb-[12px] pl-2 gap-3 flex-nowrap bg-[#fff] rounded-[8px] border-solid border-[0.5px] border-[#d1d5db] overflow-hidden items-center">
            <img
              src="../assets/images/1c359521-7513-4573-9761-44edc1b7f7de.png"
              className="w-5 h-3"
              alt=""
            />
            {/* <div className="w-[24px] h-[24px] shrink-0 relative rotate-[0.03deg] overflow-hidden z-[59]">
              <div className="w-[18px] h-[14px] bg-[url(../assets/images/1c359521-7513-4573-9761-44edc1b7f7de.png)] bg-[length:100%_100%] bg-no-repeat relative z-[60] mt-[5.5px] mr-0 mb-0 ml-[3px]"></div>
            </div> */}

            <div className="flex w-full flex-row items-center gap-3">
              <p className="xs:text-[13px] sm:text-[15px] md:text-[20px] text-black ">
                See Product demo{" "}
              </p>
              <p className="xs:text-[15px] md:text-[20px] text-[#959393]">
                1.34
              </p>
            </div>
          </div>
        </div>
        {/*Code page */}
        <div className="flex items-center mx-auto sm:w-[90%] md:w-[80%] lg:w-[95%] lg:pl-0 lg:mt-[5%] mb-5">
          <img src="../assets/images/coding_2.png" alt="" />
        </div>
        {/* <div className="flex w-[50%] h-[60%] pt-[16px] pr-[16px] pb-[16px] pl-[16px] mt-20 gap-[24px] items-start flex-nowrap bg-[#141718] rounded-tl-none rounded-tr-none rounded-br-[12px] rounded-bl-[12px] relative rotate-[-7.61deg]">
          <div className="w-[295.944px] h-[329.841px] bg-black bg-opacity-100 rounded-[119.5px] border-solid border border-[#4e5151] absolute top-[24px] left-[50%] rotate-[-12.79deg] shadow-[0_4px_4px_0_rgba(255,255,255,0.25)] z-20">
            <div className="absolute top-10 left-16 right-4 text-[40px] text-white text-center">
              <div className="flex-row w-fit justify-center items-center">
                <img src={sendimg} className="mx-auto" />
                <p>FIX</p>
                <p>{"CODE IN"}</p>
                <p>{"1 CLICK"}</p>
              </div>
            </div>
          </div>

          <span className="flex w-[51.618px] h-[240.534px] justify-start items-start shrink-0 font-['Source_Code_Pro'] text-[14px] font-normal opacity-25 leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left overflow-hidden z-[101]">
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
            10
          </span>
          <div className="w-full shrink-0 font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] tracking-[-0.7px] relative text-left z-[102]">
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#45ddfe] tracking-[-0.7px] relative text-left">
              let
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              cancelButton ={" "}
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#ff97e8] tracking-[-0.7px] relative text-left">
              document
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              .
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fa682a] tracking-[-0.7px] relative text-left">
              getElementById
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              ("cancel-button"); let sendButton ={" "}
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#ff97e8] tracking-[-0.7px] relative text-left">
              document
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              .
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fa682a] tracking-[-0.7px] relative text-left">
              getElementById
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              ("send-button");
              <br />
              <br />
              cancelButton.
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fa682a] tracking-[-0.7px] relative text-left">
              addEventListener
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              {'("click",function() { '}
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#ff97e8] tracking-[-0.7px] relative text-left">
              console
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              .
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fa682a] tracking-[-0.7px] relative text-left">
              log
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              ("Cancel button clicked"); <br />
              {"}); "}
              <br />
              <br />
              sendButton.
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fa682a] tracking-[-0.7px] relative text-left">
              addEventListener
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              {"("}
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#b2e799] tracking-[-0.7px] relative text-left">
              "click"
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              ,
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#45ddfe] tracking-[-0.7px] relative text-left">
              function
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              {"(){ "}
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#ff97e8] tracking-[-0.7px] relative text-left">
              console
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              .
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fa682a] tracking-[-0.7px] relative text-left">
              log
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              (
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#b2e799] tracking-[-0.7px] relative text-left">
              "
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#b2e799] tracking-[-0.7px] relative text-left">
              Send button clicked
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#b2e799] tracking-[-0.7px] relative text-left">
              "
            </span>
            <span className="font-['Source_Code_Pro'] text-[14px] font-normal leading-[24px] text-[#fdfdfd] tracking-[-0.7px] relative text-left">
              );
              <br />
              {"});"}
            </span>
          </div>
          <div className="w-[21.982px] h-[135.331px] shrink-0 bg-[#363840] rounded-[4px] absolute top-[6.742px] right-[24.494px] z-[103]"></div>
        </div> */}
      </div>
      {/* <div
      className="w-[636.5px] h-[414.43px] bg-[url(../assets/images/e45c1ada-4d45-4082-8762-46939af774a2.png)] bg-cover bg-no-repeat absolute top-[225.07px] left-[734.5px] z-[33]">
      <div
          className="w-[53.415px] h-[54.07px] bg-[url(../assets/images/00b3d9fa-029b-4217-9c65-b91627db1103.png)] bg-cover bg-no-repeat relative z-[67] mt-[301.93px] mr-0 mb-0 ml-[519.5px]">
      </div>
  
    </div> */}
    </div>
  );
}
