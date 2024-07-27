import { useEffect, useState } from 'react';
import '../style/css/Login.css';
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
import OtpInput from 'react-otp-input';
import PasswordField from './Passwordfield';
import { ceckresetpassOTP, changepass, sendOTPForMail } from '@/functions/APIRequests/UserAPIRequests';
import { useNavigate } from 'react-router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import { useDispatch } from 'react-redux';
import { settemptoken } from '@/reducer/temptoken';
import NavUpdated from '@/components/NavUpdated';
import FooterUpdated from './FooterUpdated';
//import { APPCOOKIE, TEMPCOOKIE, setAppCookie } from './Fuctions/appcookie/appcookie';
// import { useNavigate } from 'react-router';




// import { APPCOOKIE, VALIDATIONCOOKIE, setAppCookie } from './Fuctions/appcookie/appcookie';


// const toggleDarkMode = () => {
//   const body = document.body;
//   body.classList.toggle('dark');
// }
export default function Forgotpass(){
  // toggleDarkMode();
  const dispatch = useDispatch();
  const tempckst = useSelector((state: RootState) => state.item5.temptoken);
  type BoolResp = { state: boolean; message: string };
  type TokenResp = { access_token: string; temp: boolean };
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mailValid, setMailValid] = useState(false);
//   const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [optsend, setOtpsend] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpsuccess, setotpsuccess] = useState(false);
  const [password, setpassword] = useState('');
  const [passv, setPassv] = useState(false);
  const [otpumes, setOTPumes] = useState('');

//   const [otpresp, setOTPResp] = useState<BoolResp | TokenResp>
  const otpResponseHandlre = (data: BoolResp | TokenResp) => {
    console.log()
    if ('access_token' in data) {
        dispatch(settemptoken(data.access_token));
        setotpsuccess(true)
    }
    else {
        setError(true)
        setErrorText('OTP NOT VALID')
    }
  }

  const passchanged = (data: BoolResp) => {
    // console.log(data)
    setLoading(false)
    if (data.state) {
      dispatch(settemptoken(''));
      navigate('/login');
    }
    else {
      setError(true)
      setErrorText("something went wrong")
    }
  }



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

  useEffect(() => {
    setLoading(false);
    setError(false);
    setErrorText('')
    // console.log(passv)
  }, [])
  const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };

    return (<body className="w-full h-screen bg-[#06060E] text-xs overflow-y-auto" onScroll={handleScroll}>
      <NavUpdated scroll={scrollTop} />
    <div className="max-w-lg mx-auto my-10 bg-[#121326] pt-8 px-8 rounded-xl pt-6 transition duration-500 border-2 border-[#7064E9] shadow-xl shadow-[#7064E9] pb-16 mb-24">
        <img src={logo} className='w-8 mx-auto' />
        <p className="text-slate-500 text-center text-lg">{!otpsuccess ?'Forgot your Password?': 'Chose a new password'}</p>
        <div className={error?'flex flex-column w-full items-center justify-center':'hidden'}>
          <div className='flex flex-col h-14 w-52 my-auto rounded-lg text-red-700 items-center justify-center text-center'>
          <p>{errorText}</p>
          </div>
          </div>
        {/* <div className="my-2">
            <button
            className="w-full text-center py-2 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt=""/> <span>Sign in with Google</span>
            </button>
        </div> */}
        <div className="my-2">
            <div className="flex flex-col space-y-1">
                {otpsuccess && <PasswordField setPass={setpassword} passwd={password} setVPass={setPassv} />}
                {(!optsend&&!otpsuccess)&&<EmailField mail={email} setmail={setEmail} setValid={setMailValid}/>}
                {/* {error && <p className='text-red-700'>{errorText}</p>} */}
                {(optsend&&!otpsuccess)&& <div className='w-full mb-3'><p className='text-center text-white'>Enter your OTP</p></div>}
                {(optsend&&!otpsuccess)&& <div className="flex space-x-4 mt-8 mb-10 w-full mx-auto justify-center pb-2">
                    <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle={{
                        width: '3rem', // Adjust the width of each input box
                        height: '3rem', // Adjust the height of each input box
                        fontSize: '2rem', // Adjust the font size if needed
                        margin: '0 0.5rem', // Adjust the spacing between inputs
                        borderRadius: '0.25rem', // Add border radius if needed
                        border: '1px solid #ccc', // Add border style if needed
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        // Add any other styles you need
                    }}
                    containerStyle={'w-full'}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    />
                </div>}
                {!otpsuccess &&<button 
                onClick={mailValid&&!optsend?() => {
                    setOtpsend(true);
                    sendOTPForMail(email, () => {setOTPumes('OTP Sent Successfully')});
                } : () => {
                  console.log('otp checked for validation')
                  ceckresetpassOTP(email, otp, otpResponseHandlre)
                }}
                className={"my-10 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white"} disabled={!mailValid}>
                      <span>{optsend ? 'Verify OTP' : 'Send OTP'}</span>
                </button>}
                {otpsuccess && <button 
                onClick={passv?() => {
                  setLoading(true)
                  changepass(password, passchanged, tempckst);
                } : () => {console.log('do nothing')}}
                className={"my-24 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white"} disabled={!mailValid}>
                      <span>Change my password</span>
                </button>}
                {/* <p className="text-center">New to GenWebBuilder? <div onClick={() => {navigate('/register')}} className="text-indigo-600 font-medium inline-flex space-x-1 items-center cursor-pointer"><span>Sign up here </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></div></p> */}
                  {(optsend&&!otpsuccess) && <div className='flex w-full'>
                    <button onClick={() => {
                      setOTPumes('Sending OTP')
                      sendOTPForMail(email, () => {setOTPumes('OTP Sent Successfully')})
                      
                    }} className="w-1/2 py-2 font-medium text-white bg-blue-300 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center focus:outline-none mx-auto">
                        Resend OTP
                    </button>
                  </div>}
                  <p className='mx-auto text-center text-xl text-green-600 mt-4'>{otpumes}</p>
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