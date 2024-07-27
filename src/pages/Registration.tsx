import { ChangeEvent, useEffect, useState } from 'react';
import '../style/css/Login.css';
// import Image from '../assets/2.png'
// import { emailvalidator } from './Fuctions/Validators/Validator';
// import ReCAPTCHA from 'react-google-recaptcha'
// import { useNavigate } from 'react-router';
// import Google from '../assets/google.svg';
// import { useGoogleOneTapLogin } from '@react-oauth/google';
import {Bars} from 'react-loader-spinner';
import logo from '../assets/images/GWBICONBK-82.png';
import 'react-phone-number-input/style.css'
//import {isValidPhoneNumber, getCountries} from 'react-phone-number-input';
import CustomDropdown from './PhoneInput';
import PasswordField from './Passwordfield';
import EmailField from './EmailField';
import { APPCOOKIE, VALIDATIONCOOKIE, cookieAvailale, getAppCookie, setAppCookie } from './Fuctions/appcookie/appcookie';
import { useNavigate } from 'react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
//import { RootState } from '@/store/store';
import { setapptokenck } from '@/reducer/cookiestate';
import { setuservalid } from '@/reducer/uservaliditystate';
//import getGOOGLEURL from './ReactGoogle/Functions/googlelogurl';
import Seperator from '../assets/images/separator-top 1 (1).svg';
import Sepbtm from '../assets/images/separator-bottom 1 (1).svg';
import NavUpdated from '@/components/NavUpdated';
import FooterUpdated from './FooterUpdated';
// import { GoogleLogin } from '@react-oauth/google';
// import { APPCOOKIE, VALIDATIONCOOKIE, setAppCookie } from './Fuctions/appcookie/appcookie';


// const toggleDarkMode = () => {
//   const body = document.body;
//   body.classList.toggle('dark');
// }
export default function Registration(){
  //console.log(getCountries());
  //console.log(isValidPhoneNumber('01766632383', 'BD'));
  // toggleDarkMode();
  const dispatch = useDispatch();
  
  //const cookiest = useSelector((state: RootState) => state.item3.appcookie);
  //const validationst = useSelector((state: RootState) => state.item4.uservalid);
  const [username, setUsername] = useState('');
  const [checked, setChecked] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mailValid, setMailValid] = useState(false);
  const [vphone, setVPhone] = useState(false);
  const [vpass, setVpass] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  //const clientId = 'YOUR_CLIENT_ID';

  // const onSuccess = (response: any) => {
  //   // Handle the response from Google Sign-In
  //   //console.log('Signed in with Google:', response);
  //   // Use the response for further authentication or API calls
  // };

  // const onFailure = (error: any) => {
  //   console.error('Error signing in with Google:', error);
  // };
  // const signin = () => {
  //   return (<GoogleLogin 
  //   clientId="YOUR_CLIENT_ID"
  //   onSuccess={handleGoogleSignup}
  //   onFailure={handleGoogleSignup}
  //   buttonText="Sign up with Google" />)
  // }
  const handleInputChangeus = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };
  // useEffect(() => {
	// 	if(cookiest !== '') {
	// 		navigate('/')
	// 	}
  //   else {
  //     if (!validationst && cookiest === '') {
  //       //console.log('')
  //     } 
  //     else {
  //       navigate('/activate')
  //     }
  //   }
	// }, [])
  //
  useEffect(() => {
    dispatch(setapptokenck(getAppCookie(APPCOOKIE)))
    dispatch(setuservalid(getAppCookie(VALIDATIONCOOKIE) === 'true' ? true : false))
}, [])

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
        navigate('/activate')
      } else {
        setLoading(false)
        setErrorText(data.message);
        setError(true);
        window.scrollTo(document.body.scrollHeight,0);
      }
    }
  };

  const login = () => {
    const data = JSON.stringify({
      "username": username,
      "email": email,
      "phone": phone,
      "password": password
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        handleserverResponse(JSON.parse(this.response))
      }
    });
    
    xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/auth/user");
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
      window.scrollTo(document.body.scrollHeight,0);
    }
  }
  useEffect(() => {
    setLoading(false);
  }, [])
  const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };


    return (<body className="w-full h-full bg-[#06060D] text-md overflow-y-auto text-[#585A85]" onScroll={handleScroll}>
      <NavUpdated scroll={scrollTop} />
    <div className="max-w-lg mx-auto my-10 mt-32 bg-[#121326] pt-8 rounded-xl content-center justify-items-center justify-center items-center transition duration-500 border-2 border-[#7064E9] shadow-xl shadow-[#7064E9] mb-24">
    <div className='w-full h-[10%]'></div>
    <div className="relative w-full">
                <img src={Seperator} className="w-full absolute z-10 bottom-0" alt="separator" />
        </div>
        <img src={logo} className='w-8 mx-auto' />
        <p className="text-[#585A85] text-center text-lg">Create an Account</p>
        <div className='w-full h-[10%] p-3'></div>
        <div className="relative w-full">
                <img src={Sepbtm} className="w-full absolute z-10 bottom-0" alt="separator" />
            </div>
        <div className='p-8'>
      
        {/* <p className="text-[#585A85] text-center text-lg">Create an Account</p> */}
        <div className={error?'flex flex-column w-full items-center justify-center':'hidden'}>
          <div className='flex flex-col h-14 w-52 border-2 border-[#272839] my-auto rounded-lg text-red-700 items-center justify-center text-center m-0 p-0'>
          <p className='m-0 p-0'>{errorText}</p>
          </div>
          </div>
          {/* <a href={getGOOGLEURL()}>
            <div className="my-2">
              <button className="w-full text-center py-2 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-[#585A85] hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt=""/> <span>Sign up with Google</span>
              </button>
          </div>
          </a> */}
        {/* <div className="my-2">
            <button className="w-full text-center py-2 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-[#585A85] hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt=""/> <span>Sign up with Google</span>
            </button>
        </div> */}
        <div className="my-2">
            <div className="flex flex-col space-y-1">
            <label htmlFor="username border-2">
                    <p className="font-medium text-[#585A85] pb-2 my-auto">Full Name</p>
                    <input id="username" name="username" type="text" className="w-full py-3 bg-[#121326] border-2 border-[#272839] rounded-lg px-3 focus:outline-none focus:border-[#272839] active:border-[#272839] hover:shadow text-[#585A85] text-md" placeholder="Enter your name" onChange={handleInputChangeus} value={username}/>
                </label>
                <EmailField mail={email} setmail={setEmail} setValid={setMailValid}/>
                <p className='mt-2 pt-2 my-auto text-[#585A85]'>Phone Number</p>
                <CustomDropdown phone={phone} setphone={setPhone} setvPhone={setVPhone} />
                <PasswordField passwd={password} setPass={setPassword} setVPass={setVpass} />
                <div className="flex flex-row justify-between mt-3">
                    <div>
                        <label htmlFor="acceptterms" className="flex flex-row">
                            <input type="checkbox" id="acceptterms" className="w-4 h-4 border-slate-200 focus:bg-[#121326] px-2 text-[#585A85]" checked={checked} onClick={() => {setChecked(!checked)}}/>
                            <p className='px-2 text-[#585A85] my-auto'>I agree to </p>
                            <p className='text-blue-700 my-auto'>privacy policy & terms</p>
                        </label>
                    </div>
                    {/* <div>
                        <a href="#" className="font-medium text-indigo-600">Forgot Password?</a>
                    </div> */}
                </div>
                <button 
                onClick={mailValid&&vphone&&vpass&&checked? handleLogin : () => {console.log('do nothing')}}
                className={"my-10 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white"} disabled={!mailValid&&!vphone&&!vpass&&!checked}>
                      <span>Sign up</span>
                </button>
                <p className="text-center text-[#585A85]">Already have an account? <div onClick={() => {navigate('/login')}} className="text-indigo-600 font-medium inline-flex space-x-1 items-center cursor-pointer"><span>Login here </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></div></p>
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
</body>);
}