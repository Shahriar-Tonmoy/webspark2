import { APPCOOKIE, VALIDATIONCOOKIE, setAppCookie } from "@/pages/Fuctions/appcookie/appcookie";
import { setapptokenck } from "@/reducer/cookiestate";
import { setuservalid } from "@/reducer/uservaliditystate";
import React from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import { useParams } from "react-router";

export default function GAuth() {
    // const { access_token, token_type, expires_in, scope } = useParams();
    // //console.log(access_token)
    // //console.log(token_type)
    // //console.log(expires_in)
    // //console.log(scope);
    const paramsString = window.location.hash.substring(1);
    const params = new URLSearchParams(paramsString);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Get the access_token value
    const access_token = params.get('access_token');
    //console.log(access_token);
    /*const sbit = paramsString.split('#')[1];
    const access_tokenwithname = sbit.split('&')[0]
    const access_token = access_tokenwithname.substring(12, access_tokenwithname.length);
    //console.log(access_token);*/

        const glogin = () => {

          const requestData = {
            code: access_token, // Replace 'YOUR_CODE_HERE' with the actual code value
          };
          
          axios.post('https://genwebbuilder.com:7001/auth/google', requestData, {
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if required
            },
            withCredentials: true, // Ensure credentials are sent if needed
          })
            .then((response) => {
              // Handle the response from the server
              //console.log('Response:', response.data);
              if('access_token' in response.data) {
              setAppCookie(APPCOOKIE, response.data.access_token, 1);
              setAppCookie(VALIDATIONCOOKIE, 'true', 1);
              dispatch(setapptokenck(response.data.access_token));
              dispatch(setuservalid(true));
              navigate('/code');
              }
              else {
                navigate('/login');
              }
              // Perform actions based on the response
            })
            .catch((error) => {
              // Handle errors if the request fails
              navigate('/login');
              console.error('Error:', error);
              // Display an error message or perform necessary actions
            });
    }
    if(access_token != undefined && access_token != '') {
        glogin();
    }

    return (<div>
        <h1>Logging with google</h1>
    </div>)
}