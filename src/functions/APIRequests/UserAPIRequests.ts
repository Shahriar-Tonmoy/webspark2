import {Dispatch, SetStateAction} from 'react'


// WARNING: For POST requests, body is set to null by browsers.
type boolres = {state: boolean; message: string};
type SetResponse = Dispatch<SetStateAction<boolres>>;


function ResendOTP(callback: SetResponse, cookie: string) {
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    callback(JSON.parse(this.response))
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/user/resendotp");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);

xhr.send();
}

type CallbackType = (response: { state: boolean; message: string }) => void;



function checkOTP(otp: string, callback: CallbackType, cookie: string) {
    // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
    "otpCode": otp
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      //console.log(this.responseText);
      callback(JSON.parse(this.response))
    }
  });
  
  xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/auth/user/otp");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+cookie);
  
  xhr.send(data);
}

type CallbackTypeuser = (response: { username: string; email: string; phone: string, token: number }) => void;
type CallbackTypeuserV2 = (response: { username: string; email: string; phone: string; token: number; plan: string; validity }) => void;

function getaccountinfo(callback: CallbackTypeuser, cookie: string) {
  // WARNING: For GET requests, body is set to null by browsers.
console.log('sending get')
const data = "";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    callback(JSON.parse(this.response))
  }
});

xhr.open("GET", "https://genwebbuilder.com:7001/api/v1/user/getUser");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);

xhr.send(data);
}

function getaccountinfov2(callback: CallbackTypeuserV2, cookie: string) {
  // WARNING: For GET requests, body is set to null by browsers.
console.log('sending get')
const data = "";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
    callback(JSON.parse(this.response))
  }
});

xhr.open("GET", "https://genwebbuilder.com:7001/api/v2/user/getUser");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);

xhr.send(data);
}

function sendOTPForMail(email: string, callback: CallbackType) {
  // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
  "email": email
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    callback(JSON.parse(this.response))
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/auth/resetpass");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
}
//type Callbacktemptoken = (response: { access_token: string; temp: boolean }) => void;
type BoolResp = { state: boolean; message: string };
  type TokenResp = { access_token: string; temp: boolean };
type functionhndler = (response: TokenResp | BoolResp ) => void
type functionhndler1 = (response: BoolResp ) => void
type HistoryListType = {id: number; date: string}[];
function ceckresetpassOTP(email: string, otp: string, callback: functionhndler) {
  // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
  "email": email,
  "otp": otp
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    callback(JSON.parse(this.response))
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/auth/confirmresetpass");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
}



function changepass(password: string, callback: functionhndler1, cookie: string) {
  // WARNING: For GET requests, body is set to null by browsers.
  const data = JSON.stringify({
    password: password,
  });

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    callback(JSON.parse(this.response))
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/auth/changepass");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);
xhr.setRequestHeader("Content-Type", "application/json"); 

xhr.send(data);
}


type historycalltype = (response: {history: [{ code: string; ts: string}]; page: number; prev: number; fow: number}) => void;

function getHistory(callback : historycalltype, cookie: string, page: number) {

  // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
  "page": page
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    try {
      const data = JSON.parse(this.response)
      callback(data);
    }
    catch(e) {
      console.log(e)
    }
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v2/user/history");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);

xhr.send(data);
}


function sendmessage(callback: CallbackType, email: string, name: string, message: string) {
  // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
  "uemail": email,
  "name": name,
  "message": message
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    try {
      callback(JSON.parse(this.response));
    }
    catch (e) {
      //console.log(e);
    }
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/sendmessage");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
}

function waitlistnum(setnum: (num: number) => void) {
  // WARNING: For POST requests, body is set to null by browsers.

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    const resp = JSON.parse(this.response)
    setnum(resp.num);
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/allwaitlist");

xhr.send();
}

function gethistoryid(setnum: (num: number) => void, cookie: string) {
  // WARNING: For POST requests, body is set to null by browsers.

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
    const resp = JSON.parse(this.response)
    setnum(resp.id);
  }
});

xhr.open("GET", "https://genwebbuilder.com:7001/api/v2/curhistory");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);

xhr.send();
}
function gethistoryidlist(setnum: (data: HistoryListType) => void, cookie: string) {
  // WARNING: For POST requests, body is set to null by browsers.

console.log(cookie)
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    setnum(JSON.parse(this.response));
  }
});

xhr.open("GET", "https://genwebbuilder.com:7001/api/v2/historylist");
xhr.setRequestHeader("Authorization", "Bearer "+cookie);

xhr.send();
}

function getdetailedhistory(id: number, callback: (data: {id: number; response: string; prompttypeimage: boolean, promt: string; promptimg: string}[]) => void) {
  // WARNING: For POST requests, body is set to null by browsers.
  console.log(id)
const data = JSON.stringify({
  "page": id
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    callback(JSON.parse(this.response))
  }
});

xhr.open("POST", "https://genwebbuilder.com:7001/api/v2/getdthistory");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
}


export {ResendOTP, checkOTP, getaccountinfo, sendOTPForMail, ceckresetpassOTP, changepass, getHistory, sendmessage, waitlistnum, getaccountinfov2, gethistoryid, gethistoryidlist, getdetailedhistory}