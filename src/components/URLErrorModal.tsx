import React from "react";


const URLErrorModal = (props: {setclose: () => void}) => {
  

  return (
    <div onClick={() => {props.setclose()}} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white max-w-xl w-full p-8 rounded-md shadow-md" onClick={() => {console.log('do nothing')}} >
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">URL NOT FOUND</h2>
        <div className="flex flex-col items-center mt-6">
          {/* <img
            className="rounded-full h-20 w-20 mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          /> */}
        </div>
        <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
          {/* Add account details here */}
          {/* ... */}
          <button onClick={() => {props.setclose()}} className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default URLErrorModal;
