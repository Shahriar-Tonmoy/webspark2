import { USERCONFIGTYPE } from "@/functions/types/userCongigtype";
import React, { ChangeEvent, useRef, useState } from "react";
import { USERCONFIG, setAppCookie } from "./Fuctions/appcookie/appcookie";
import { useNavigate } from "react-router";

export default function Starter() {
    const [pressed, setpressed] = useState(0);
    const [name, setname] = useState('');
    const [profession, setProfession] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const [addr, setaddr] = useState('');
    const navigate = useNavigate();
    const userobj = useRef<USERCONFIGTYPE>({name: '', profession: '', phone: '', email: '', address: ''});
    const handlename = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setname(value);
    }
    const handleprofession = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setProfession(value);
    }
    const handlephone = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setphone(value);
    }
    const handleemail = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
    }
    const handleaddr = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setaddr(value);
    }
    return (<div className="w-screen h-screen bg-gradient-to-r from-indigo-500 "><div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-500 bg-opacity-70">
    <div className="bg-white max-w-xl w-full p-8 rounded-md shadow-md" >
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">Generate your site</h2>
      {pressed == 0 && <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
        {/* Add account details here */}
        {/* ... */}
        <button onClick={() => {navigate('/code')}} className="p-2 text-sm text-white bg-indigo-500 hover:bg-indigo-600 rounded-sm mx-auto w-[97%]">
          Generate from Image
        </button>
        <button onClick={()=> {setpressed(pressed+1)}} className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Generate by answering questions 
        </button>
      </div>}
      {pressed == 1 && <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
        {/* Add account details here */}
        {/* ... */}
        <p>Your Name</p>
        <input className="w-full lg px-3 border-0 active:border-0 active:outline-none focus:outline-none" type="text" value={name} onChange={handlename} placeholder="Enter your Name" />
        <p>Your Profession</p>
        <input className="w-full lg px-3 border-0 active:border-0 active:outline-none focus:outline-none" type="text" value={profession} onChange={handleprofession} placeholder="Enter your Profession" />
        <button onClick={()=> {
            setpressed(pressed+1)
            userobj.current.name = name;
            userobj.current.profession = profession;
            }} className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Next
        </button>
      </div>}
      {pressed == 2 && <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
        {/* Add account details here */}
        {/* ... */}
        <p>Your Phone</p>
        <input className="w-full lg px-3 border-0 active:border-0 active:outline-none focus:outline-none" type="phone" value={phone} onChange={handlephone} placeholder="Enter your Phone" />
        <p>Your Email</p>
        <input className="w-full lg px-3 border-0 active:border-0 active:outline-none focus:outline-none" type="email" value={email} onChange={handleemail} placeholder="Enter your Email" />
        <button onClick={()=> {
            setpressed(pressed+1)
            userobj.current.phone = phone;
            userobj.current.email = email;
            }} className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Next
        </button>
      </div>}
      {pressed == 3 && <div className="border-t flex flex-col gap-4 border-gray-200 pt-6">
        {/* Add account details here */}
        {/* ... */}
        <p>Your Address</p>
        <input className="w-full lg px-3 border-0 active:border-0 active:outline-none focus:outline-none" type="address" value={addr} onChange={handleaddr} placeholder="Enter Address" />
        
        <button onClick={()=> {
            setpressed(pressed+1)
            userobj.current.address = addr;
            console.log(userobj.current);
            setAppCookie(USERCONFIG, JSON.stringify(userobj.current), 7);
            navigate('/template')
            }} className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Generate
        </button>
      </div>}
    </div>
  </div></div>);
}