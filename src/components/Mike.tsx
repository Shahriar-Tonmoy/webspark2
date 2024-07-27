import React from 'react';
import { GrMicrophone } from "react-icons/gr";

function Microphone(props: {setClose: (data: boolean) => void; dark: boolean}){
  return (
    <div onClick={() => {props.setClose(false)}} className="w-5 h-1 mb-auto mr-2 relative items-center justify-center text-white">
      <div className="flex justify-center items-center my-auto">
        <div className="w-8 h-8 rounded-full border-8 border-red-400 animate-pulse absolute"></div>
        <div className="w-8 h-8 rounded-full bg-red-500 shadow-md absolute"></div>
        <div className="w-8 h-8 rounded-full bg-red-500 shadow-md absolute animate-pulse-delayed"></div>
        <div className="w-8 h-8 rounded-full bg-[#bf0d87] shadow-md absolute animate-circle-in"></div>
        <p
          className={`mic-icon text-${props.dark?`black`:`white`} absolute my-auto`}
        >
          <GrMicrophone />
        </p>
      </div>
    </div>
  );
}

function MicrophoneOff(props: {setClose: (data: boolean) => void; dark: boolean}){
    return (
      <div onClick={() => {props.setClose(true)}} className="w-5 h-1 mb-auto mr-2 relative items-center justify-center text-white">
        <div className="flex justify-center items-center my-auto">
          {/* <div className="w-8 h-8 rounded-full border-8 border-red-400 animate-pulse absolute"></div> */}
          <div className="w-8 h-8 rounded-full shadow-md absolute hover:shadow-2xl"></div>
          {/* <div className="w-8 h-8 rounded-full bg-red-500 shadow-md absolute animate-pulse-delayed"></div> */}
          <div className="w-8 h-8 rounded-full shadow-md absolute animate-circle-in hover:shadow-2xl"></div>
          <p
            className={`mic-icon absolute my-auto text-xl text-${props.dark?`black`:`white`}`}
          >
            <GrMicrophone />
          </p>
        </div>
      </div>
    );
  }

export {Microphone, MicrophoneOff};
