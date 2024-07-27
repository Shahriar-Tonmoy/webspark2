import React from "react";
import { IoMdClose } from "react-icons/io";

const VideoModal = (props: {setclose: () => void}) => {
  
  const { innerWidth: width } = window;
    let w2 = width;
    if(width > 500) {
      w2 = width/3
  }
  else {
      w2 = width-30;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col">
          <div onClick={() => {props.setclose()}} className="mb-3 text-3xl text-white p-2 rounded-full bg-black bg-opacity-70 w-fit ml-auto cursor-pointer"><IoMdClose /></div>
        <iframe className='rounded-xl' width={w2.toString()} height={(w2/1.7).toString()} src="https://www.youtube.com/embed/RbLAU9QpHo4?si=58u7jiNoqkjprZWD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>
  );
};

export default VideoModal;
