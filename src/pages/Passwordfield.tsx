import { VscErrorSmall } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import React from "react";

type SetEmail = Dispatch<SetStateAction<string>>;
type Setvpass = Dispatch<SetStateAction<boolean>>;

export default function PasswordField(props: {setPass:SetEmail; passwd:string; setVPass: Setvpass}) {
    const [confirmpass, setConfirmPass] = useState('');
    const [lenError, setLenError] = useState(true);
    const [upererror, setUppererror] = useState(true);
    const [sperror, setSperror] = useState(true)
    const [numerror, setnumbererror] = useState(true);
    const [conferror, setConfirmError] = useState(true);
    const [showPass, setShowPass] = useState(false);
    function containsUpperCase(str: string): boolean {
      return /[A-Z]/.test(str) && /[a-z]/.test(str);
    }
    function containsSpecialCharacter(str: string): boolean {
      return /[^a-zA-Z0-9]/.test(str);
    }
    function containsNumbers(str: string): boolean {
      return /[0-9]/.test(str);
    }
    const checkpass = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const pass = value;
        if(pass.length < 8) {
            setLenError(true);
        }
        else{
            setLenError(false);
        }

        if(containsUpperCase(pass)) {
            setUppererror(false);
        }
        else {
            setUppererror(true);
        }

        if(containsSpecialCharacter(pass)) {
            setSperror(false);
        }
        else {
            setSperror(true)
        }

        if(containsNumbers(pass)) {
            setnumbererror(false);
        }
        else {
            setnumbererror(true);
        }

        props.setPass(pass);
    }
    const oncomfirm = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const pass = value;
        if(props.passwd !== pass) {
            setConfirmError(true);
        }
        else {
            setConfirmError(false);
        }
        setConfirmPass(pass);
    }

    if(!lenError&&!upererror&&!sperror&&!numerror&&!conferror) {
        props.setVPass(true);
    }
    else {
        props.setVPass(false);
    }

    // const Passico = () => {
    //     if(!lenError && !upererror && !sperror && !numerror) {
    //         return (
    //             <div className="text-3xl text-red-700">
    //                 <VscErrorSmall />
    //             </div>
    //         );
    //     }
    //     else {
    //         <div className="text-3xl text-green-700">
    //                 <IoIosCheckmarkCircle />
    //             </div>
    //     }
    // }
    //const Ico = <div className="text-lg text-black py-auto"><FaEye /></div>
    return (
        <div className="flex flex-column">
            <label htmlFor="password">
                    <p className="font-medium text-[#585A85] pb-2 justify-between my-auto">Password</p>
                    <div className="flex flex-row py-1.5 border-2 border-[#272839] rounded-lg px-2.5 focus:outline-none focus:border-[#272839] hover:shadow content-center items-center">
                    <input
                         id="password" 
                         name="password" 
                         type={showPass?'text':'password'}
                         onChange={checkpass}
                         value={props.passwd}
                         className="w-full py-2.5 bg-[#121326] lg px-3 border-0 active:border-0 active:outline-none focus:outline-none text-[#585A85] text-md" 
                         placeholder="Enter your password"/>
                         <div className="text-sm text-white py-auto" onClick={() => {setShowPass(!showPass)}}>
                            {!showPass && <FaEye />}
                            {showPass && <FaEyeSlash />}
                        </div>
                         </div>
                </label>
                <label htmlFor="confirmpass">
                    <p className="font-medium text-[#585A85] pb-2 my-auto">Confirm Password</p>
                    <div className="flex flex-row py-1 border-2 border-[#272839] rounded-lg px-1 focus:outline-none focus:border-[#272839] hover:shadow content-center items-center">
                    <input
                         id="confirmpass" 
                         name="confirmpass" 
                         type={'password'}
                         onChange={oncomfirm}
                         value={confirmpass}
                         className="w-full py-2.5 bg-[#121326] lg px-3 border-0 active:border-0 active:outline-none focus:outline-none text-[#585A85] text-md" 
                         placeholder="Confirm password"/>
                         {!conferror && <div className="text-lg text-green-700 py-auto"><IoIosCheckmarkCircle /></div>}
                         {conferror && <div className="text-3xl text-red-700 py-auto"><VscErrorSmall /></div>}
                         </div>
                </label>
                <div className={lenError?'flex flex-row text-red-700 my-2 my-auto':'flex flex-row text-green-700 my-2 my-auto'}>
                {lenError && <VscErrorSmall/>}
                    {!lenError && <IoIosCheckmarkCircle />}
                    <p className="mx-2 my-auto">At least 8 characters</p>
                </div>
                <div className={upererror?'flex flex-row text-red-700 my-2 my-auto':'flex flex-row text-green-700 my-2 my-auto'}>
                {upererror && <VscErrorSmall/>}
                    {!upererror && <IoIosCheckmarkCircle />}
                    <p className="mx-2 my-auto">Mix of Upper and lowercase</p>
                </div>
                <div className={sperror?'flex flex-row text-red-700 my-2 my-auto':'flex flex-row text-green-700 my-2 my-auto'}>
                {sperror && <VscErrorSmall/>}
                    {!sperror && <IoIosCheckmarkCircle />}
                    <p className="mx-2 my-auto">at least one special character</p>
                </div>
                <div className={numerror?'flex flex-row text-red-700 my-2 my-auto':'flex flex-row text-green-700 my-2 my-auto'}>
                {numerror && <VscErrorSmall/>}
                    {!numerror && <IoIosCheckmarkCircle />}
                    <p className="mx-2 my-auto">at least one number</p>
                </div>
                {/* <div className={conferror?'flex flex-row text-red-700 my-2':'flex flex-row text-green-700 my-2'}>
                {conferror && <VscErrorSmall/>}
                    {!conferror && <IoIosCheckmarkCircle />}
                    <p className="mx-2">passwords do not match</p>
                </div> */}
        </div>
    )
}