import React from 'react';
//import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import BG from '../assets/bg2-min.jpg';
import cap from '../assets/edit-min.jpg';

const FirstPageModal = (props: {setclose : () => void}) => {
  return (
    <div onClick={() => {props.setclose()}} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-200 bg-opacity-80 w-screen h-screen top-0 left-0 right-0 bottom-0">
      <div className="bg-white p-10 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/2 h-2/3 bg-cover" style={{backgroundImage: `url(${BG})`}}>
        <div className="flex justify-center mb-4">
            <img src={cap} alt="A colorful party popper with confetti illustration" className="w-16 h-16"/>
        </div>
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold text-center mb-4">Congratulations</h1>
        <h1 className="text-2xl font-semibold text-center mb-4">You have generated your first webpage</h1>
        <p className="text-gray-600 text-center mb-6">Let's make new sites togather</p>
        <div className="flex justify-center">
            <button onClick={() => {props.setclose()}} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                OK
            </button>
        </div>
    </div>
    </div>
  );
};

export default FirstPageModal;
