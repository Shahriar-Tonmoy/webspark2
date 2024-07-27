import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const SiteGeneratingModal = () => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute z-50 inset-0 bg-black opacity-90 backdrop-blur-9xl blur-background"></div>
      <div className="relative z-50 bg-white max-w-xl w-full p-8 rounded-md shadow-md opacity-100 my-auto mx-auto" onClick={() => { console.log('do nothing')}}>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Generating your site</h2>
        <div className="flex flex-col items-center mt-6">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      </div>
    </div>
  );
};

export default SiteGeneratingModal;
