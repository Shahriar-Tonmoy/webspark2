import React from 'react';
//import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import BG from '../assets/bg2-min.jpg';
import cap from '../assets/edit-min.jpg';
import { useNavigate } from 'react-router';

const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-slate-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/2 h-2/3 bg-cover" style={{backgroundImage: `url(${BG})`}}>
        <div className="flex justify-center mb-4">
            <img src={cap} alt="A colorful party popper with confetti illustration" className="w-16 h-16"/>
        </div>
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold text-center mb-4">Congratulations</h1>
        <h1 className="text-2xl font-semibold text-center mb-4">Your account have been added to early access</h1>
        <p className="text-gray-600 text-center mb-6">Ready to rock ultimate Websites ?</p>
        <p className="text-gray-600 text-center mb-6">Check your Email to be up to date</p>
        <div className="flex justify-center">
            <button onClick={() => {navigate('/')}} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                OK
            </button>
        </div>
    </div>
    </div>
  );
};

export default ThankYouPage;
