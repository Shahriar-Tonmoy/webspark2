import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loadingmodal = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute z-50 inset-0 bg-black opacity-90 backdrop-blur-9xl blur-background"></div>
      <div className="relative z-50 bg-white max-w-xl w-full p-8 rounded-md shadow-md opacity-100 my-auto mx-auto" onClick={() => { console.log('do nothing')}}>
        <div className="flex flex-col items-center mt-6">
        <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
        </div>
      </div>
    </div>
  );
};

export default Loadingmodal;
