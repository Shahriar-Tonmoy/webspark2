import React from 'react'
import { useNavigate } from 'react-router'

function NotFound404() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-center h-full pt-20">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="text-2xl font-semibold">Congratulations! You've found this place! People rarely come here.</p><br />
      <p className='mb-4 text-lg'>But alas, there is nothing for you to do here.</p>
      <button className='mx-auto bg-purple-400 mb-6 rounded-xl px-6 py-2' onClick={ () => navigate('/')}>Home</button>
      <div className="animate-bounce">
        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">Let's get you back home</p>
      {/* <p className='text-black font-medium'>OR,</p>
      <p className=" text-gray-600">Let's get you back to some web page generation</p>
      <div className="animate-bounce">
        <svg className="mx-auto h-24 w-24 text-red-500" fill="none" viewBox="0 0 24 36" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l-9 -2 9 18 9 -18 -9 2zm0 8v-8"></path>
        </svg>
      </div>
      <button className='mx-auto bg-purple-400 mb-6 rounded-xl px-6 py-2' onClick={ () => navigate('/code')}>Generate Web Pages</button> */}
    </div>
  )
}

export default NotFound404