import URLErrorModal from "@/components/URLErrorModal";
import { AppState } from "@/types";
import React, { useState, ChangeEvent, useRef } from "react"
import {Dispatch, SetStateAction} from 'react'
import { PiBracketsCurlyBold } from "react-icons/pi";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { urlValidator } from "./Fuctions/Validators/Validator";
import { VscErrorSmall } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";

type setAppstate = Dispatch<SetStateAction<AppState>>;
type generate = (img: string[]) => void
export default function ScreenshortV2(props: {cookie: string, Generate: generate, SetAppState: setAppstate}) {
    const [data, setdata] = useState<string[]>(null);
    const [btnclicked, setbtnClicked] = useState(false)
    const [errormodal, seterrormodal] = useState(false)
    const [urlerror, seturlerror] = useState(false);
    
    const [url, setUrl] = useState('');
    const { innerHeight: heightmain } = window;
    const scrshot = useRef(null);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        //console.log(urlValidator(value))
        seturlerror(urlValidator(value))
        setUrl(value);
        //props.setphone(value)
      };

      const requiress = () => {
        if(urlerror) {
            setbtnClicked(true);
        // WARNING: For POST requests, body is set to null by browsers.
        const data = JSON.stringify({
            "url": url
        });
        
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                try{
                    //console.log(this.responseText);
                    const data1 = JSON.parse(this.response)
                    if('img' in data1) {
                        const finald = `data:image/jpeg;base64,${data1.img[0]}`
                        setbtnClicked(false)
                        setdata([finald])
                    }
                    else {
                        seterrormodal(true);
                        setbtnClicked(false);
                        setUrl('');
                    }
                }
                catch(e) { /* empty */ }
            }
        });
        
        xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/screenshort");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer "+props.cookie);
        
        xhr.send(data);
        }

    }

    const generathtml = () => {
        props.Generate(data);
        props.SetAppState(AppState.CODING);
    }
    
    const downloadpng = () => {

          const link = document.createElement('a');
          link.href = data[0];
          link.download = 'screenshort.png';
          link.click();
      };

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          scrshot.current.click();
        }
      };
      const modalclose = () => {
        seterrormodal(false);
      }

    return (<section className={(data == null)?"w-3/4 lg:w-[65%] lg:h-[55%]":"flex w-3/4 lg:w-[65%] lg:h-[55%] bg-[#0F1021] p-2 rounded-lg"}>
        {errormodal && <URLErrorModal setclose={modalclose} />}
        {(data == null && !btnclicked) && <div className="flex flex-col bg-[#0F1021] border-2 border-white border-dashed content-center justify-center p-2 h-full w-ful rounded-xl">
				<div className="text-5xl mx-auto text-slate-500">
					<PiBracketsCurlyBold />
				</div>
				{/* <div className="text-3xl mt-4 mx-auto text-white">
					<p>Drag & Drop</p>
				</div> */}
				<div className="text-xl mt-4 text-slate-600 mx-auto">
					<p className="text-center">Enter a URL to take ScreenShot</p>
				</div>
                <div className="flex flex-row mx-auto px-4">
                    <div className=" flex flex-row bg-[#141D25] border-2 border-slate-500 rounded-xl h-10 lg:w-72 w-3/2 px-1 lg:px-8 mt-4 text-white justify-between pl-3">
                    <input  className="bg-[#141D25] border-0 active:border-0 active:outline-none focus:outline-none w-[80%]"
                            type="text" 
                            value={url} 
                            onChange={handleInputChange} 
                            onKeyUp={handleKeyPress}
                            placeholder="https://example.com" />
                    {urlerror && <div className="text-green-500 text-2xl my-auto"><IoIosCheckmarkCircle /></div>}
                    {!urlerror && <div className="text-red-500 text-3xl my-auto"><VscErrorSmall /></div>}
                    </div>
                </div>

                {/* {!urlerror && <p className="text-red-500 my-2 text-center" >Enter a valid url</p>} */}
				<div className="mx-auto">
					<button onClick={() => {
                                requiress();
                            }} 
                            ref={scrshot}
                            className="bg-[#141D25] border-2 border-slate-500 rounded-xl h-10 w-48 mt-4 text-white">Take Screenshoot
                    </button>
				</div>
				<div className="text-slate-500 mt-4 mx-auto">
					<p className="text-center">Enjoy this feature for free as a subscribed user</p>
				</div>
				{/* <div className="text-lg mt-24 text-slate-500 mx-auto">
					<p>max 10MB</p>
				</div> */}
			</div>}
        {(data != null && !btnclicked) && <div>
            <div className="w-[80%] h-[80%] overflow-y-auto mx-auto my-auto">
                <img src={data[0]}/>
            </div>
            <div className="flex flex-row justify-center content-center mt-8">
                <button onClick={downloadpng} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 mr-4 text-white rounded-xl">Download</button>
                <button onClick={generathtml} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-white rounded-xl">Generate code</button>
            </div>
        </div>}
        {btnclicked && <div className="w-[80%] h-[80%] mx-auto my-auto"><ShimmerThumbnail height={heightmain/2} rounded /></div>}
    </section>)
}