import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { emailvalidator } from './Fuctions/Validators/Validator';
import { VscErrorSmall } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import React from 'react';
type SetEmail = Dispatch<SetStateAction<string>>;
type setValid = Dispatch<SetStateAction<boolean>>;

export default function EmailField(props: {setmail:SetEmail; mail:string; setValid: setValid}) {
    const [valid, isValid] = useState(false);
    
    const onemailcg = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        emailvalidator(value, isValid);
        emailvalidator(value, props.setValid);
        props.setmail(value);
    }
    return (
        <label htmlFor="email" className='w-full'>
                    <p className="font-medium text-[#585A85] text-md pb-2 my-auto">Email</p>
                    <div className="flex flex-row py-1 border-2 border-[#272839] rounded-lg px-1 focus:outline-none focus:border-[#585A85] hover:shadow content-center items-center">
                    <input
                         id="email" 
                         name="email" 
                         type={'email'}
                         onChange={onemailcg}
                         value={props.mail}
                         className="w-full py-2.5 bg-[#121326] lg px-3 border-0 active:border-0 active:outline-none focus:outline-none text-[#585A85] text-md" 
                         placeholder="Enter your email"/>
                         {valid && <div className="text-lg text-green-700 py-auto"><IoIosCheckmarkCircle /></div>}
                         {!valid && <div className="text-3xl text-red-700 py-auto"><VscErrorSmall /></div>}
                         </div>
        </label>
    );
}