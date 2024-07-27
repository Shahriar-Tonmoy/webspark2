import React, { useEffect, useRef, useState } from "react";
import json from '../components/json/country.json'
import '../components/css/mic.css';
import {Microphone, MicrophoneOff} from "./Mike";
import { FaChevronUp } from "react-icons/fa";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Voicerecignation = (props: {setpromt: (data: string) => void; mikeof: boolean; setresetvoice: (data: boolean) => void; setmikeof: (data: boolean) => void; inputdisable: boolean; dark: boolean}) => {
    
  
  const contries = json;    
  const [selectedCountry, setSelectedCountry] = useState({
    "language": "English",
    "countryCodes": ["en-US"],
    "flag": "🇺🇸"
});

const [micon, setMikeon] = useState(false);
const [dropdown, setdropdown] = useState(false);
const [stopListening, setstoplistening] = useState(false);
const recognition = useRef<globalThis.SpeechRecognition>(null);
const vst = useRef(false);
const trns = useRef<string>('');
const trnsindx = useRef(0);

 
const [startmicListening, setStartmicListening] = useState(false);
const resetstate = useSelector((state: RootState) => state.item8.resetv);
// const startListening = () => SpeechRecognition.startListening({ continuous: true, language: selectedCountry.countryCodes[0] });
// const {
//     transcript,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const sp = window.SpeechRecognition || window.webkitSpeechRecognition;
      if(recognition.current == null) {
      recognition.current = new sp();
      }
      console.log('Speech recognition initialized');
    } else {
      console.log('Speech recognition not supported');
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
    };
  }, []);


  const startListeningwk = () => {
    // new speech recognition object
            
// This runs when the speech recognition service starts
if(recognition.current == null){
  return;
}
if (recognition.current && vst.current) {
    console.log('Recognition already started');
    return;
  }

console.log("started")
recognition.current.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

recognition.current.onspeechend = function() {
    // when user is done speaking
    recognition.current.stop();
    vst.current = false;
    trns.current = '';
    trnsindx.current = 0;
}
              
// This runs when the speech recognition service returns result
recognition.current.onresult = function(event) {
    // const transcript1 = event.results[event.results.length - 1][0].transcript;
    // const confidence = event.results[trnsindx.current][0].confidence;
    // console.log(transcript1)
    // props.setpromt(trns.current+transcript1);
    // trns.current = trns.current+transcript1;
    // console.log(confidence)
    // trnsindx.current+=1;



    const speechResult = event.results[event.results.length-1][0].transcript;
                        //detect when intrim results
                        props.setpromt(trns.current+speechResult);
    if (event.results[event.results.length-1].isFinal) {
      props.setpromt(trns.current+speechResult);
      trns.current = trns.current+speechResult;
    }
}
      
// recognition.current.onspeechend = function(event) {
//   startListeningwk();
// }
// start recognition
recognition.current.continuous = true;
recognition.current.interimResults = true;
recognition.current.lang = selectedCountry.countryCodes[0];
recognition.current.start();
trnsindx.current = 0;
vst.current = true;
  };
  
  const stopListeningwk = () => {
    recognition.current.stop();
    vst.current = false;
    trns.current = '';
    trnsindx.current = 0;
  };

// let startlist = () => {
//   console.log("started dedault")
//   startListening()
// }
// let stoplist = () => {SpeechRecognition.stopListening()}

const startlist = startListeningwk
const stoplist = stopListeningwk
  

// useEffect(() => {
//   // if(!browserSupportsSpeechRecognition) {
//     startlist = startListeningwk;
//     stoplist = stopListeningwk;
//     console.log('mik support not available');
//   // }
// }, [])

useEffect(() => {
if(resetstate) {

        // resetTranscript();
        stoplist();
        setstoplistening(false);
        setMikeon(false);
        props.setresetvoice(false);
        console.log('transcript reset done')
}}, [resetstate]);
useEffect(() => {
  if(props.mikeof) {
  
          stoplist();
          setstoplistening(false);
          setMikeon(false);
          console.log('transcript reset done')
  }}, [props.mikeof]);
useEffect(() => {
if(micon && startmicListening) {
    startlist();
    setStartmicListening(false);
}

}, [micon]);

useEffect(() => {
if(stopListening) {
    stoplist();
    setstoplistening(false);

}
}, [stopListening])

// if(micon) {
//     props.setpromt(transcript);
// }



  return (
    <div 
    className="flex flex-row relative group w-full h-10 justify-between items-center bg-transparent m-0 p-0" 
    style={{borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}}
    >
        <div>
      <div
       className="border-0 active:border-0 active:outline-none focus:outline-none my-auto" 
       style={{ 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: '12px', 
        borderBottomRightRadius: 0,
      }} 
       >
        {!props.inputdisable && <><div className="hidden absolute w-0 h-0 transition duration-1000 group-hover:flex border-t-8 border-r-8 border-transparent border-l-8 border-t-blue-500 bottom-10 z-30" style={{right: 14}}></div>


        <div className="hidden absolute z-30 bottom-12 transition duration-1000 group-hover:flex flex-row p-1 cursor-pointer bg-blue-500" style={{right: -12}} onClick={() => {setdropdown(!dropdown)}}>
            <p className="my-auto">{selectedCountry.flag+" "+selectedCountry.language}</p> {/* Display flag */}
            <p className="my-auto mx-2 text-white"><FaChevronUp /></p>
          </div></>}
        </div>
        <div className="relative">
        {dropdown && <div className="absolute z-40 h-56 max-h-56 bg-white cursor-pointer overflow-y-auto" style={{transform: 'translateY(-100%)', right: -42}}>
        {contries.map((country, index) => (
            <div key={index} onClick={() => {
            setSelectedCountry(country)
            setdropdown(!dropdown)
            }} className="p-2 bg-slate-200 text-black">
            {country.flag+" "+country.language} {/* Display flag */}
            </div>
        ))}
        </div>}</div>
      </div>
      <div className="w-fit h-fit my-auto">
        {micon ? <Microphone setClose={(data) => {
                setMikeon(data)
                setstoplistening(true);
            }} dark={true} /> : <MicrophoneOff setClose={(data) => {
              props.setmikeof(false);
            setMikeon(data&&!props.inputdisable)
            setStartmicListening(true&&!props.inputdisable);
            }} dark={true} />}
</div>
</div>
  );
};

export default Voicerecignation;
