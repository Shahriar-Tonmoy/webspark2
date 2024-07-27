
import React from "react"
import mdalmamun from '../assets/mdalmamun (1).jpeg';
import lutforrahman from '../assets/lutfurrahman (1) (1).jpeg'
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Teams() {
    return (
        <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col w-full justify-center gap-10">
            <div className="flex lg:w-[20%] xl:w-[20%] md:w-[30%] sm:w-[90%] xs:w-[90%] mb-8 lg:mb-0 sm:mx-auto xs:mx-auto lg:mx-0 xl:mx-0 md:mx-0 bg-[#0F1021] rounded-lg shadow-2xl hover:shadow-[#7064E9]">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded sm:p-8 dark:text-gray-900">
                <div className="space-y-2 justify-center text-center">
                    <div>
                        <img src={mdalmamun} className="rounded-full " />
                    </div>
                </div>
                {/* <div className="divider" ></div> */}
                <div className="w-full">
                    <p className="text-center text-white text-xl m-0 p-0">MD. Almamun Ridoy</p>
                    <p className="text-[#7073A6] text-sm text-center">Founder</p>
                </div>
                <div className="flex flex-row text-blue-500 text-2xl justify-between px-2">
                    <a href="https://www.facebook.com/profile.php?id=100051438584443" target="blank" className="hover:text-white"><p className="text-blue-500 hover:text-white"><FaFacebook /></p></a>
                    <a href="https://www.linkedin.com/in/engr-md-allmamun-ridoy-aa6011249/" target="blank" className="hover:text-white"><GrLinkedin /></a>
                    <a href="mailto:mdalmamunridoy@gmail.com" target="blank" className="hover:text-white"><MdEmail /></a>
                    <a href="tel:+8801768884132" target="blank" className="hover:text-white"><FaPhoneAlt /></a>
                </div>

            </div>
            
        </div>
        <div className="flex lg:w-[20%] xl:w-[20%] md:w-[30%] sm:w-[90%] xs:w-[90%] mb-8 lg:mb-0 sm:mx-auto xs:mx-auto lg:mx-0 xl:mx-0 md:mx-0 bg-[#0F1021] rounded-lg shadow-2xl hover:shadow-[#7064E9]">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded sm:p-8 dark:text-gray-900">
                <div className="space-y-2 justify-center text-center">
                    <div>
                        <img src={lutforrahman} className="rounded-full " />
                    </div>
                </div>
                {/* <div className="divider" ></div> */}
                <div className="w-full">
                    <p className="text-center text-white text-xl m-0 p-0">Lutfor Rahman</p>
                    <p className="text-[#7073A6] text-sm text-center">Co-Founder</p>
                </div>
                <div className="flex flex-row text-blue-500 text-2xl justify-between px-2">
                    <a href="https://www.facebook.com/profile.php?id=100051438584443" target="blank" className="hover:text-white"><FaFacebook /></a>
                    <a href="https://linkedin.com/in/lrahman3107" target="blank" className="hover:text-white"><GrLinkedin /></a>
                    <a href="#" target="blank" className="hover:text-white"><MdEmail /></a>
                    <a href="#" target="blank" className="hover:text-white"><FaPhoneAlt /></a>
                </div>

            </div>
        </div>
    </div>
)
}