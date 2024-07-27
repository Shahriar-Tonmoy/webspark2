import React from "react";

export default function APIEnd() {
  return (
    <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-3 container mx-auto xs:px-3 sm:px-3 md:px-0 lg:px-0 mt-6 ">
      {/* left column */}
      <div className="bg-[#f3f4f6] rounded-[21px] col-span-2">
        <div className="flex flex-col px-5 pt-5 xs:pb-0 lg:pb-5 ">
          <div className="flex flex-row gap-3">
            <p className="xs:text-[15px] md:text-[20px]">
            API endpoints you can rely on
            </p>
          </div>
          <div className="my-3">
            <p className="xs:text-[20px] sm:text-[20px] lg:w-[60%] text-[#000000] md:text-[40px] font-normal">
              {
                "Ship integrations in hours, not months"
              }
            </p>
          </div>
          <div className="my-3">
            <p className="xs:text-[16px] md:text-[32px] lg:text-3xl lg:w-[90%] font-normal">
              {
                "Webspark handles platform-specific data transformation tasks for you. Avoid adding complexity to your code. Stay focus on your product.  "
              }
            </p>
          </div>

          <div className="flex xs:w-full sm:w-[80%] md:w-[50%] lg:w-max xs:h-10 md:h-12 pt-[12px] pr-2 pb-[12px] pl-2 gap-3 flex-nowrap bg-[#fff] rounded-[8px] border-solid border-[0.5px] border-[#d1d5db] overflow-hidden items-center mt-4 xs:mb-6">
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
      </div>
      <div className="bg-[#f3f4f6] xs:col-span-2 lg:col-span-1  rounded-[21px]">
        <img className="xs:hidden md:hidden lg:block lg:w-[90%] pt-4 pl-5" src="../assets/images/API.png" alt="" />
        <img className="xs:block md:block lg:hidden lg:w-[90%] pt-4 pl-5" src="../assets/images/API2.png" alt=""  />
      </div>
    </div>
  );
}
