import { ChangeEvent, useEffect, useRef, useState } from 'react';
// import Image from '../assets/2.png'
// import { ChangeEvent, useState } from 'react';
// import { emailvalidator } from './Fuctions/Validators/Validator';
// import ReCAPTCHA from 'react-google-recaptcha'
// import { useNavigate } from 'react-router';
// import Google from '../assets/google.svg';
// import Logo from '../GENWEBBUILDER.png';
// import { useGoogleOneTapLogin } from '@react-oauth/google';
import {Bars} from 'react-loader-spinner';
import logo from '../assets/images/GWBICONBK-82.png';
import 'react-phone-number-input/style.css'
//import PasswordField from './Passwordfield';
import EmailField from './EmailField';
import { APPCOOKIE, VALIDATIONCOOKIE, cookieAvailale, getAppCookie, setAppCookie } from './Fuctions/appcookie/appcookie';
import { useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import React from 'react';
import { useDispatch } from 'react-redux';
import { setapptokenck } from '@/reducer/cookiestate';
import { setuservalid } from '@/reducer/uservaliditystate';
import Seperator from '../assets/images/separator-top 1 (1).svg';
import Sepbtm from '../assets/images/separator-bottom 1 (1).svg';
// import { useSelector } from 'react-redux';
// import { RootState } from "@/store/store";
//import getGOOGLEURL from './ReactGoogle/Functions/googlelogurl';
// import BG from '../assets/bg-min.png';
import NavUpdated from '@/components/NavUpdated';
import FooterUpdated from './FooterUpdated';
import './Animatedline.scss';
//import { GoogleLogin } from 'react-google-login';





// import { APPCOOKIE, VALIDATIONCOOKIE, setAppCookie } from './Fuctions/appcookie/appcookie';


// const toggleDarkMode = () => {
//   const body = document.body;
//   body.classList.toggle('dark');
// }
export default function LoginPage(){
  // toggleDarkMode();
  const dispatch = useDispatch()
  
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const cookiest = useSelector((state: RootState) => state.item3.appcookie);
  //const validationst = useSelector((state: RootState) => state.item4.uservalid);

  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mailValid, setMailValid] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [showPass, setShowPass] = useState(false);
  const signIn = useRef(null);

  useEffect(() => {
    if(cookieAvailale(APPCOOKIE)) {
      if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
        navigate('/activate')
      }
      else {
        navigate('/')
      }
    }
  }, [])
  useEffect(() => {
    dispatch(setapptokenck(getAppCookie(APPCOOKIE)))
    dispatch(setuservalid(getAppCookie(VALIDATIONCOOKIE) === 'true' ? true : false))
}, [])


  // useEffect(() => {
  //   if(cookieAvailale(APPCOOKIE)) {
  //     if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
  //       navigate('/activate')
  //     }
  //     else {
  //       navigate('/')
  //     }
  //   }
  // }, [])
  // const Logingoogle = () => {
  //   useGoogleOneTapLogin({
  //     onSuccess: credentialResponse => {
  //       //console.log(credentialResponse);
  //     },
  //     onError: () => {
  //       //console.log('Login Failed');
  //     },
  //   });
  // }
  type SuccessResponse = {
    access_token: string;
    validity: boolean;
  };
  
  type ErrorResponse = {
    code: number;
    message: string;
  };
  

  const handleserverResponse = (data: SuccessResponse | ErrorResponse | null | undefined) => {
    if (data != null) {
      if ('access_token' in data) {
        setLoading(false);
        dispatch(setapptokenck(data.access_token));
        dispatch(setuservalid(data.validity))
        setAppCookie(APPCOOKIE, data.access_token, 1);
        setAppCookie(VALIDATIONCOOKIE, data.validity ? 'true': 'false', 1);
        navigate('/code')
      } else {
        setLoading(false)
        setErrorText(data.message);
        setError(true);
      }
    }
  };
  const checkpass = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);

  }

  const login = () => {
    const data = JSON.stringify({
      "email": email,
      "password": password
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        //console.log(this.responseText)
        handleserverResponse(JSON.parse(this.response))
      }
    });
    
    xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/auth/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send(data);
  }
  // const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // }
  const handleLogin = () => {
    if(email != '')
    {
      setLoading(true)
      login()
    }
    else {
      setErrorText('Please fill all the filds')
      setError(true)
    }
  }
  useEffect(() => {
    setLoading(false);
  }, [])

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      signIn.current.click();
    }
  };
  const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };

    return (<body className="w-full h-screen bg-[#06060D] text-xs overflow-y-auto"  onScroll={handleScroll}>
      <NavUpdated scroll={scrollTop} />
    <div className="max-w-lg mx-auto mb-28 mt-32 bg-[#121326] rounded-xl pt-6 transition duration-500 border-2 border-[#7064E9] shadow-xl shadow-[#7064E9]">
      <div className='w-full h-[10%]'></div>
    <div className="relative w-full">
                <img src={Seperator} className="w-full absolute z-10 bottom-0" alt="separator" />
        </div>
        <img src={logo} className='w-8 mx-auto' />
        <p className="text-slate-200 text-center text-lg">Welcome to GenWebBuilder</p>
        <div className='w-full h-[10%] p-3'></div>
        <div className="relative w-full">
                <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
            <div className='p-8'>
        <div className={error?'flex flex-column w-full items-center justify-center':'hidden'}>
          <div className='flex flex-col h-14 w-52 bg-[#121326] my-auto rounded-lg text-red-700 items-center justify-center text-center'>
          <p>{errorText}</p>
          </div>
          </div>
          {/* <a href={getGOOGLEURL()}>
  <div className="my-2">
            <button

            className="w-full text-center py-2 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt=""/> <span>Sign in with Google</span>
            </button>
        </div>
        </a> */}
        {/* <div className="my-2">
            <button
            className="w-full text-center py-2 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt=""/> <span>Sign in with Google</span>
            </button>
        </div> */}
        <div className="my-2">
            <div className="flex flex-col space-y-1">
                <div className='flex my-6 w-full'>
                <EmailField mail={email} setmail={setEmail} setValid={setMailValid}/>
                </div>
                <label htmlFor="password w-full my-6">
                    <p className="font-medium text-slate-200 pb-2 justify-between my-auto">Password</p>
                    <div className="flex flex-row py-1.5 border-2 border-[#272839] rounded-lg px-2.5 focus:outline-none focus:border-[#585A85] hover:shadow content-center items-center">
                    <input
                         id="password" 
                         name="password" 
                         type={showPass?'text':'password'}
                         onChange={checkpass}
                         value={password}
                         onKeyUp={handleKeyPress}
                         className="w-full py-2.5 bg-[#121326] lg px-3 border-0 active:border-0 active:outline-none focus:outline-none text-[#585A85] text-md" 
                         placeholder="Enter your password"/>
                         <div className="text-sm text-white py-auto" onClick={() => {setShowPass(!showPass)}}>
                            {!showPass && <FaEye />}
                            {showPass && <FaEyeSlash />}
                        </div>
                         </div>
                </label>
                <div className='h-6'></div>
                <div className="flex flex-row justify-between my-6">
                    <div>
                        <label htmlFor="acceptterms" className="flex flex-row">
                            <input type="checkbox" id="acceptterms" className="w-4 h-4 border-slate-200 bg-black focus:bg-indigo-600 px-2" checked={checked} onClick={() => {setChecked(!checked)}}/>
                            <p className='px-2 text-white'>Remember Me </p>
                        </label>
                    </div>
                    <div>
                        <div onClick={() => {navigate('/forgot')}} className="font-medium text-indigo-600 cursor-pointer">Forgot Password?</div>
                    </div>
                </div>
                {/* {error && <p className='text-red-700'>{errorText}</p>} */}
                <button 
                onClick={mailValid? handleLogin : () => {console.log('do nothing')}}
                ref={signIn}
                className={"my-10 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200"} disabled={!mailValid}>
                      <span className='text-white'>Sign in</span>
                </button>
                <div className='w-full h-[5%]'></div>
                <div className='flex mt-5 justify-center'>
                <p className="text-center mx-auto text-slate-200">New to GenWebBuilder? <div onClick={() => {navigate('/register')}} className="text-indigo-600 font-medium inline-flex space-x-1 items-center cursor-pointer"><span>Sign up here </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></div></p>
                  </div>
            </div>
        </div>
    </div>
    </div>
    
      {loading && (
      <div className="h-full flex items-center justify-center absolute inset-0 z-50 overflow-y-auto">
        {/* Adjust styling as needed */}
        <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      </div>
    )}
    <FooterUpdated />
</body>
);
}