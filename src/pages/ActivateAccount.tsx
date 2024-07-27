import { ResendOTP, checkOTP } from '../functions/APIRequests/UserAPIRequests';
import { useEffect, useState } from 'react';
import { APPCOOKIE, VALIDATIONCOOKIE, getAppCookie, setAppCookie } from './Fuctions/appcookie/appcookie';
import { useNavigate } from 'react-router';
import OtpInput from 'react-otp-input';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import { useDispatch } from 'react-redux';
import { setapptokenck } from '@/reducer/cookiestate';
import { setuservalid } from '@/reducer/uservaliditystate';
import Logo from '../assets/images/glogo.svg'

type boolres = {state: boolean; message: string};

const ActivateAccountPage = () => {
    // const [resendmes, setResendmes] = useState([])
  const cookiest = useSelector((state: RootState) => state.item3.appcookie);
  //const validationst = useSelector((state: RootState) => state.item4.uservalid);
  const dispatch = useDispatch();
  //const [otpResult, setOTPResult] = useState({state: false, message: ''})
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [res, setResponse] = useState<boolres>({state: false, message: ''});
  //console.log(getAppCookie(VALIDATIONCOOKIE) === 'true')
  //console.log(getAppCookie(VALIDATIONCOOKIE))
  // useEffect(() => {
	// 	if(getAppCookie(VALIDATIONCOOKIE) === 'true') {
	// 		navigate('/')
	// 	}
	// }, [])
  useEffect(() => {
    dispatch(setapptokenck(getAppCookie(APPCOOKIE)))
    dispatch(setuservalid(getAppCookie(VALIDATIONCOOKIE) === 'true' ? true : false))
}, []);

const checkotp = (data: boolres) => {
  if(data.state == false)
    {
      setErrorText(data.message)
      setError(true)
      //console.log('invalid')
    }
    else {
      setError(false)
      setAppCookie(VALIDATIONCOOKIE,'true', 1);
      navigate('/code')
    }
}
  
  const handleOTP = () => {
    checkOTP(otp, checkotp, cookiest);
    
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#06060E]">
      
      <div className='flex flex-col bg-[#121326] p-4 rounded-xl justify-center items-center border-2 transition duration-500 border-[#7064E9] shadow-xl shadow-[#7064E9]'>
      <div className='w-fit mx-auto justify-center items-center mt-3 mb-6'><img src={Logo} className='w-32' /></div>
      <h1 className="text-3xl font-semibold mb-4 text-white">Activate Your Account</h1>
      <p className="text-slate-300 mb-6">Please enter the 6-digit OTP sent to your email.</p>
      <p className="text-slate-300 mb-6">Check spam folder if you do not see any mail in your inbox</p>
      <div className="flex space-x-4 mb-6">
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputStyle={{
        width: '2rem', // Adjust the width of each input box
        height: '2rem', // Adjust the height of each input box
        fontSize: '1.5rem', // Adjust the font size if needed
        margin: '0 0.5rem', // Adjust the spacing between inputs
        borderRadius: '0.25rem', // Add border radius if needed
        border: '1px solid #ccc', // Add border style if needed
        // Add any other styles you need
      }}
      containerStyle={'w-full'}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
      </div>
      <button className="my-3 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white"
      onClick={() => {
        //console.log(otp)
        handleOTP()}
        }>
        Verify OTP
      </button>
      <p className='text-blue-600 my-3 cursor-pointer' onClick={() => {ResendOTP(setResponse, cookiest)}} >Resend OTP</p>
      {(res.message != '' && !error) && <p className='text-green-700' >{res.message}</p>}
      {error && <p className='text-red-700'>{errorText}</p>}
      </div>
    </div>
  );
};

export default ActivateAccountPage;
