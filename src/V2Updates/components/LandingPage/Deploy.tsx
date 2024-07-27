import React from "react";

import eyeshowimg from '../../../assets/images/eye-show.svg'
import gitimg from '../../../assets/images/git.svg';
import exchangeimg from '../../../assets/images/Exchange 7.svg';
import heartimg from '../../../assets/images/heart 1.svg'
import boxinggloveimg from '../../../assets/images/Boxing Glove.svg'
import fireworksimg from '../../../assets/images/Fireworks 1.svg'

export default function Deploy() {
  return (
    <div className="container mx-auto xs:px-3 sm:px-3 md:px-0 lg:px-0 mt-6">
      {/* outer grid */}
      <div className="grid gap-2 xs:grid-cols-1 lg:grid-cols-2">
        {/* firtst column */}
        <div className="bg-[#F3F4F6] rounded-3xl pt-6">
          {/* eye mark section */}
          <div className='flex flex-row pl-12 gap-2'>
            <img src={eyeshowimg} className='w-[24px]' />
            <p className='text-[24px] text-[#000000] '>Deployment</p>
          </div>
          {/* Title */}
          <div className="xs:text-[22px] sm:text-[25px] md:text-[35px] lg:text-[35px] xs:text-left sm:text-left md:text-left lg:text-left font-[450px] w-[90%] pl-12 text-[#000000] mt-1"><p>Go from Figma/Image  to real website in minutes</p></div>

          {/* 3 WHITE CARDS */}
          <div className="mb-4">
            <div className="flex flex-col items-center justify-center mt-3">
              {/* first CARD */}
              <div className='flex flex-row w-[80%] bg-[#FFFFFF] pl-4 gap-4 rounded-lg py-3'>
                <img src={gitimg} className='w-[24px]' />
                <p className='text-[20px] text-[#000000]'>Develop. GitHub, Bitbucket, GitLab, Azure DevOps or our CLI.</p>
              </div>
              {/* LINE 1 */}
              <div
                className="w-px h-[44.5px] bg-[url(../assets/images/baadec5e-bfad-4485-8eff-8d605366b856.png)] bg-cover bg-no-repeat relative z-[88] mt-[-1px] mx-auto">
              </div>
              {/* Card 2 */}
              <div className='flex flex-row w-[80%] bg-[#FFFFFF] pl-4 gap-4 rounded-lg py-3'>
                <img src={exchangeimg} className='w-[24px]' />
                <p className='text-[20px] text-[#000000]'>Push to preview. Setting up staging shouldn’t be a separate step. <img src={boxinggloveimg} alt="" /></p>
              </div>
              {/* LINE 2 */}
              <div
                className="w-px h-[44.5px] bg-[url(../assets/images/baadec5e-bfad-4485-8eff-8d605366b856.png)] bg-cover bg-no-repeat relative z-[88] mt-[-1px] mx-auto">
              </div>
              {/* Card 3 */}
              <div className='flex flex-row items-center justify-center w-[80%]  bg-[#FFFFFF] pl-4 gap-3 rounded-lg py-3'>
                <img src={heartimg} className='w-[24px]' />
                <p className='text-[20px] font-medium text-[#000000]'>Done</p>
              </div>
            </div>
          </div>


        </div>
        {/* second column */}
        <div className=" bg-[#F3F4F6] rounded-3xl">
          <div className="pt-3 bg-[#F3F4F6]  rounded-3xl relative xs:h-[220px] sm:h-[250px] md:h-[350px] lg:h-[330px]">
            {/* Curve right */}
            <div
              className="w-[181px] h-[181px] xs:hidden lg:block bg-[url(../assets/images/81674de6-4e49-4be6-8b38-61445ff83670.png)] bg-cover bg-no-repeat absolute top-0 md:right-[6%] lg:right-[3%] z-[0]">
            </div>
            {/* Curve left */}
            <div
              className="w-[181px] h-[181px] xs:hidden lg:block bg-[url(../assets/images/99c97e91-0b7a-4fac-9f7b-72ebed68703f.png)] bg-cover  bg-no-repeat absolute top-[10%] lg:top-[50%] md:left-[4%] lg:left-0 z-[0]">
            </div>
            <div className="flex justify-center">
              <img src={fireworksimg} className='w-[24px]' />
              <p className='text-[20px] text-[#000000] font-medium'>SEO & Performance</p>
            </div>

            {/* Circle */}
            <div className="w-[80%] mt-6">
              <div className="relative">
                <div className="w-[50%] xs:top-0 sm:top-0 md:top-0 lg:top-0 right-[13%] absolute"><img src="../assets/images/0c01a6bf-4376-42f1-aa04-3d8f05bf851c.png" alt="" /></div>
                <div className="w-[42%] xs:top-3 sm:top-4 md:top-5 lg:top-4 right-[17%] absolute"><img src="../assets/images/45858222-9f57-48e8-8d43-f33007336879.png" alt="" /></div>
                <div className="w-[35%] absolute xs:top-5 sm:top-7 md:top-10 lg:top-8 right-[20%]">
                  <img src="../assets/images/67d8b65d-1e76-4e18-8b98-e46029670696.png" alt="" />
                  {/* SEO Score */}
                  <div className="bg-[#FFFFFF] w-max xs:px-2 sm:px-3 xs:py-1 sm:py-2 absolute -bottom-[20%] xs:left-[1%] sm:-left-[10%] md:left-[1%] lg:-left-[13%]">
                    <p className="xs:text-base sm:text-2xl md:text-4xl font-semibold">SEO score</p>
                  </div>
                  <div className="w-max px-3 py-2 absolute xs:bottom-[29%] sm:bottom-[35%] xs:left-[18%] sm:left-[18%] md:left-[28%] lg:left-[22%]">
                    <p className="xs:text-2xl sm:text-4xl md:text-5xl font-semibold">98</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Title */}
          <div>
            <p className="xs:text-3xl text-[#000000] sm:text-3xl md:text-4xl w-[60%] mx-auto text-center font-normal">All the power you need, built-in.</p>
          </div>
          {/* details */}
          <div className="w-4/5 xs:mb-3 md:mb-0 mx-auto mt-4">
            <p className="text-2xl text-center font-normal text-[#000000]">Sites that rank on search engines are fast, have well-structured content, and are accessible to everyone.</p>
          </div>
        </div>
      </div>

    </div>
  )
}