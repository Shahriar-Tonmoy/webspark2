import React from 'react';

export default function NavBarV2() {
  return (
    <div className='fixed inset-0 z-[200] h-40'>
      <div className='flex h-40 justify-center items-center'>
        <div className='flex flex-row gap-7  bg-[#D0D0D0] rounded-2xl shadow-lg shadow-[#DADADA] items-center xs:py-1 xs:px-2 sm:py-1 sm:px-2  md:py-3 md:px-3 lg:py-3 lg:px-3  justify-between border border-[#FFFFFF] border-opacity-15'>
          <div
            className="w-[41px] h-[42px] bg-[url(../assets/images/56961615-18bb-43f8-bb1b-f20a21ce8c12.png)] bg-cover bg-no-repeat rotate-[3deg]">
          </div>
          <div className='hidden md:flex gap-3'>
            <button className='font-medium text-base'>
              Products
            </button>
            <button className='font-medium text-base'>
              Company
            </button>
            <button className='font-medium text-base'>
              Pricing
            </button>
          </div>
          <div className='flex md:flex-row gap-1'>
            <button className='flex sm:hidden bg-white text-black rounded-3xl items-center justify-center py-1 px-2 md:py-2 md;px-3'>
              <p className='font-medium text-xs md:text-base'>Open the app</p>
            </button>
            <button className='bg-black text-white rounded-3xl py-1 px-2 md:py-2 md:px-3'>
              <p className='font-medium text-xs md:text-base'>Boook an intro</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
