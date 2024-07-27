// import NavInner from "@/components/NavInner";
// import { Drawer } from "@material-tailwind/react";
// import React, { useEffect, useRef, useState } from "react";
// import { LuMonitor } from "react-icons/lu";
// import { GrBriefcase } from "react-icons/gr";
// import Magic from "../assets/images/magic.webp";
// import { GoPlusCircle } from "react-icons/go";
// import { CiMicrophoneOn } from "react-icons/ci";
// import { IoMdPaperPlane } from "react-icons/io";
// import usermes from '../assets/images/usermes.png';
// import Markdown from 'react-markdown'
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
// import Groot from '../assets/images/groot.gif';
// import rehypeHighlight from 'rehype-highlight'
// import { CHATBOTSTATE } from "@/functions/enums/chatbotstate";
// import ROBOT from '../assets/images/robot-8.png'
// // import { useDispatch } from "react-redux";
// // import { useSelector } from "react-redux";
// // import { RootState } from "@/store/store";
// import { PROMOPTSRESPONSETYPE } from "@/functions/types/socketresponse";
// // import { setPromptResponse } from "@/reducer/promptstate";
// import loader1 from '../assets/icons/loader-one.gif';
// import doneimg from '../assets/icons/done.svg';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import connector from '../assets/socket-unscreen.gif';
// import { TypeAnimation } from 'react-type-animation';




// // import MarkdownPreview from '@uiw/react-markdown-preview';

// export default function ActionPage() {
//     // const dispatch = useDispatch();
//     // const promts = useSelector((state: RootState) => state.item11.response);
//     const [scrollTop, setScrollTop] = useState(0);
//     const [dl, setdl] = useState(true);
//     const [dr, setdr] = useState(true);
//     const [text, settext] = useState('');
//     const [textrows, settextrows] = useState(1);
//     const [genai, setgenai] = useState(false);
//     const textarearef = useRef<HTMLTextAreaElement>(null);
//     const socket = useRef<WebSocket>(null);
//     const [botstate, setBotstate] = useState<CHATBOTSTATE>(CHATBOTSTATE.INITIAL);
//     const meslen = useRef(0);
//     const sitedata = useRef(null);
//     const path = useRef('');
//     const code = useRef('');
//     const [weddata, setweddata] = useState('');
//     const codeRef = useRef<HTMLDivElement>(null);
//     const file = useRef('');
//     const imgs = useRef<string[]>([]);
//     const [inputdisable, setinputdisable] = useState(false);


//     useEffect(() => {
//         if (codeRef.current) {
// 			const { scrollHeight, clientHeight } = codeRef.current;
// 			codeRef.current.scrollTop = scrollHeight - clientHeight;
// 		}
//       }, [code.current]);
//     //const [promts, setpromts] = useState<{promt: string; response: {task: string; state: boolean}[]; shortpromt: string}[]>([])
//     const step = useRef('');
//     const promts = useRef<PROMOPTSRESPONSETYPE>([])
//     const setpromts = (data: PROMOPTSRESPONSETYPE) => {
//         // console.log(data)
//         // dispatch(setPromptResponse(data));
//         promts.current = data;
//     }
//     const [, forceUpdate] = React.useReducer(x => x + 1, 0); // Force re-render
//     // const [checklist, setchecklist] = useState<{task: string; state: boolean}[]>(null);
//     const openPopupWindowprev = (url) => {
//         const features = 'height=800,width=1200,left=200,top=100'; // Customize the window features as needed
//         const newWindow = window.open(url, 'popup', features);
    
//         // Optional: Check if the window was successfully opened
//         if (!newWindow) {
//           alert('Failed to open the popup window. Please check your browser settings.');
//         }
//         const checkClosed = setInterval(() => {
//             if (newWindow.closed) {
//               clearInterval(checkClosed);
//               socket.current.send('TEST');
//               const openurl = 'https://beta.genwebbuilder.com/prevtest#?site='+path.current+'/prod#?site='+encodeURIComponent(JSON.stringify(sitedata.current))
//               setTimeout(() => {
//               openPopupWindowprevtest(openurl)
//               }, 3000);
//             }
//           }, 1000); // Check every second
//       };

//       const openPopupWindowprevtest = (url) => {
//         const features = 'height=800,width=1200,left=200,top=100'; // Customize the window features as needed
//         const testwindow = window.open(url, 'popup', features);
    
//         // Optional: Check if the window was successfully opened
//         if (!testwindow) {
//           alert('Failed to open the popup window. Please check your browser settings.');
//         }
//         setTimeout(() => {
//             testwindow.close();
//             clearInterval(checkClosed);
//             socket.current.send('TESTDONE')
//             setTimeout(() => {
//                 socket.current.send('BACKEND')
//                 setBotstate(CHATBOTSTATE.BACKEND)
//                 code.current = '';
//                 forceUpdate();
//             }, 2000);
//         }, 20000)
//         const checkClosed = setInterval(() => {
//             if (testwindow.closed) {
//               clearInterval(checkClosed);
//               socket.current.send('TESTDONE')
//               setTimeout(() => {
//                 socket.current.send('BACKEND')
//                 setBotstate(CHATBOTSTATE.BACKEND)
//                 code.current = '';
//                 forceUpdate();
//               }, 2000);
//             }
//           }, 1000); // Check every second
//       };


//       const openPopupWindowprevfinaltest = (url) => {
//         const features = 'height=800,width=1200,left=200,top=100'; // Customize the window features as needed
//         const testwindow = window.open(url, 'popup', features);
    
//         // Optional: Check if the window was successfully opened
//         if (!testwindow) {
//           alert('Failed to open the popup window. Please check your browser settings.');
//         }
//         setTimeout(() => {
//             testwindow.close();
//             clearInterval(checkClosed);
//             socket.current.send('TDONE')
//             setBotstate(CHATBOTSTATE.ALLDONE);
            
//         }, 20000)
//         const checkClosed = setInterval(() => {
//             if (testwindow.closed) {
//               clearInterval(checkClosed);
//               socket.current.send('TDONE')
//               console.log('sent')
//             }
//           }, 1000); // Check every second
//       };

      


    

//     useEffect(() => {
//         // window.open('https://genwebbuilder.com', '_blank')
//         // textwindow()
//         // openPopupWindowprevtest()
//         const ws = new WebSocket('wss://genwebbuilder.com:7001/ws/sitejson?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Ik5vYmFiIEtoYW4iLCJlbWFpbCI6ImtuaXJvYjg4MEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMiRBSWI3b1RlNDlxN050ckZNeHVSb09PSExQYTZHWXZ5NG0uZGlUS21wTC41dzA2WVQuTER1VyIsInBob25lIjoiMDE3NjY0MzIzODIiLCJvY2N1cGF0aW9uIjoxLCJleHAiOjEwNDQ2NTY3NzU2NH0.nm6SzuvgvkPRw_yis1q6xksSB47NUBSeNml0i9AMNoo');
    
//         ws.onopen = () => {
//           console.log('WebSocket connected');
//           socket.current = ws;
//         };
    
//         ws.onmessage = (event) => {
//           const data = JSON.parse(event.data)
//         //   console.log(data);
//             if ('process' in data) {
//                 step.current = ``+step.current+data.process+``
//                 forceUpdate()
//                 // setplan(step.current)
//                 // const pmpts = [...promts]
//                 // pmpts[pmpts.length-1].
//                 // setpromts()
                
//             }
//             if ('aistate' in data) {
                
//                 if (data.aistate.state === false) {
//                   const newState = promts.current
//                   if (newState[newState.length - 1] && newState[newState.length - 1].response) {
//                     const rres = newState[newState.length - 1].response;
//                     rres.push({ task: data.aistate.task, state: data.aistate.state });
                    
//                     newState[newState.length - 1].response = rres;
//                     setpromts(newState);
//                     forceUpdate()
                    
//                   }
//                 }
//                 else{
//                     const rppromt = promts.current;
//                     const responseLength = rppromt[rppromt.length - 1]?.response?.length
//                     if (responseLength === 1) {
//                         setBotstate(CHATBOTSTATE.THINKING);
//                         socket.current.send('SCAT');
//                     } else if (responseLength === 2) {
//                         socket.current.send('TAG');
//                         setBotstate(CHATBOTSTATE.UIUX)
//                         setweddata('designing UI/UX')
//                     } else if (responseLength === 3) {
//                         socket.current.send('TEM');
//                         setBotstate(CHATBOTSTATE.COADING)
//                     } else if (responseLength === 4) {
//                         socket.current.send('JSON');
//                         setBotstate(CHATBOTSTATE.ASSETS)
//                     } else if (responseLength === 5) {
//                         socket.current.send('SAVE');
//                     }
//                     else if (responseLength === 6) {
//                         socket.current.send('PATH');
//                     }
//                     else if(responseLength === 9) {
//                         socket.current.send('CONNECT')
//                         setBotstate(CHATBOTSTATE.CONNECT)
//                     }
//                     const newState = promts.current;
//                     newState[newState.length-1].response[newState[newState.length-1].response.length-1] = {task: newState[newState.length-1].response[newState[newState.length-1].response.length-1].task, state: data.aistate.state};
//                     setpromts(newState);
//                     meslen.current = meslen.current+1;
//                     forceUpdate()
//                 }
              
//             }
//             if('sitedata' in data) {
//                 sitedata.current = data.sitedata
//                 console.log(sitedata.current)
//                 forceUpdate()
//             }
//             if('PATH' in data) {
//                 path.current = data.PATH;
//                 console.log(path.current)
//                 // console.log(JSON.stringify(sitedata.current))
//                 const openurl = 'https://beta.genwebbuilder.com/previewsite#?site='+path.current+'/prod#?site='+encodeURIComponent(JSON.stringify(sitedata.current))
//                 console.log(openurl)
//                 openPopupWindowprev(openurl)
//             }
//             if('code' in data) {
//                 code.current = code.current+data.code;
//                 forceUpdate()
//                 if (codeRef.current) {
//                     const { scrollHeight, clientHeight } = codeRef.current;
//                     console.log(scrollHeight);
//                     console.log(clientHeight);
//                     codeRef.current.scrollTop = scrollHeight - clientHeight;
//                     codeRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
//                 }
//                 forceUpdate()
//             }
//             if('codebe' in data) {
//                 code.current = code.current+data.codebe
//                 console.log(data.codebe)
//                 forceUpdate()
//             }
//             if ('filebe' in data) {
//                 file.current = data.filebe;
//                 forceUpdate()
//             }
//             if('file' in data) {
//                 file.current = data.file;
//                 forceUpdate()
//             }
//             if("IMG" in data) {
//                 imgs.current.push(data.IMG)
//                 forceUpdate()
//             }
//             if("CDONE" in data) {
//                 socket.current.send('FITEST')
//                 setBotstate(CHATBOTSTATE.FINALTEST);
//                 const openurl = 'https://beta.genwebbuilder.com/prevtest#?site='+path.current+'/prod#?site='+encodeURIComponent(JSON.stringify(sitedata.current))
//                 setTimeout(() => {
//                     openPopupWindowprevfinaltest(openurl)
//                 }, 2000);

//             }
              

//         };
    
//         ws.onclose = () => {
//           console.log('WebSocket disconnected');
//           socket.current = null;
//           //saveSite(response, cookie);
//         };
    
//         return () => {
//           // Clean up WebSocket connection
//           if (ws) {
//             ws.close();
//           }
//         };
//     }, [])

//     const handleScroll = (event) => {
//         setScrollTop(event.currentTarget.scrollTop);    
//       };

//       const handlesendquery = () => {
//         setinputdisable(true);
//         const fintext = text.length < 100 ? text : text.slice(0, 100) + '...';
//         const newPrompt = promts.current // Create a deep copy of promts
//         newPrompt.push({ promt: fintext, shortpromt: text, response: [] });
//         setpromts(newPrompt);
//         const data = JSON.stringify({ "promt": text });
//         settext('');
        
//         settextrows(1);
//         step.current = '';
//         socket.current.send(data);
//         setweddata('Scanning your Data')
//     };      
//     // const checklistitems: ChecklistItem[] = [
//     //     {id: 1, label: 'Designing UI/UX', checked: false},
//     //     {id: 2, label: 'Generating Frontend for you', checked: false},
//     //     {id: 3, label: 'Linking assets', checked: false},
//     //     {id: 4, label: 'Implementing Backend logic', checked: false},
//     //     {id: 5, label: 'Connecting with Database', checked: false},
//     //     {id: 6, label: 'Connecting frontend and backend', checked: false},
//     //     {id: 7, label: 'Testing your Website', checked: false},
//     //     {id: 8, label: 'Making Ready to deploy', checked: false},
//     // ]
//     const handle_textshow = (ind: number) => {
//         console.log(ind)
//         const pdata = promts.current.map((data, index) => {
//             if(index === ind && data != undefined) {
//                 return {promt: data.shortpromt, shortpromt: data.promt, response: data.response}
//             }
//             else {
//                 return data;
//             }
//         })
//         setpromts(pdata);
//         forceUpdate();
//     }
//     // const cont = useRef('');
//     // const sleep = ms => new Promise(r => setTimeout(r, ms));

//     // useEffect(() => { async function textmanage() {
//     //     const txt = "I am connecting frontend with backend"
//     //     if(botstate == CHATBOTSTATE.CONNECT) {
//     //         for (let i = 0; i < txt.length; i++) {
//     //             cont.current = cont.current+txt[i]
//     //             forceUpdate();
//     //             await sleep(200);
//     //         }
//     //     }
//     // }
//     // textmanage();
//     // }, [botstate])


//     return (
//         <div onScroll={handleScroll} className="flex flex-col bg-[#06060E] h-full w-full overflow-y-auto">
//             <NavInner scroll={scrollTop} tdl={() => {
//                 setgenai(!dl?false:genai)
//                 setdl(!dl)
                
//                 }} tdr={() => {setdr(!dr)}} />
//             <Drawer
//             placement="left"
//             open={dl}
//             overlay={false}
//             className="bg-[#070710] w-[20%] fixed border-r-2 border-[#202028] text-[#626DAA]"
//             style={{zIndex: 10}}
//             placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
//             >
//                 <div className="mt-24 p-2.5">
//                     <button className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]">
//                         <p className="text-xl my-auto"><LuMonitor /></p>
//                         <p className="my-auto">Welcome</p>
//                     </button>
//                     <button className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]">
//                         <p className="text-xl my-auto"><GrBriefcase /></p>
//                         <p className="my-auto">Manage Subscription</p>
//                     </button>
//                     <div className="border-t-2 border-[#202028] w-full my-4"></div>
//                     <button onClick={() => {
//                         setdl(false)
//                         setgenai(!genai)
//                         setdr(false)
//                     }
//                         } className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]">
//                         <img src={Magic} className="w-9" />
//                         <p className="my-auto">GENE AI</p>
//                     </button>
//                 </div>
//             </Drawer>
//             <Drawer
//             placement="right"
//             open={dr}
//             overlay={false}
//             className="bg-[#070710] w-[20%] fixed border-l-2 border-[#202028] text-[#626DAA]"
//             style={{zIndex: 10}}
//             placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
//             >
//                 <div className="mt-24 p-2.5">
//                     <button className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 bg-[#7064E9] text-white hover:bg-[#0F1021] hover:text-[#2B45DC]">
//                         <p className="text-xl my-auto"><GoPlusCircle /></p>
//                         <p className="my-auto">Start new Chat</p>
//                     </button>
//                 </div>
//             </Drawer>
//             <div className="flex flex-row">
//             <div className={`flex flex-col ${genai?`ml-2 mr-0 w-[60%]`:`w-full mx-[20%]`} justify-end px-2 h-screen overflow`}>
//                 <div className="p-2 w-full h-full m-0">
//                     <div className="h-full overflow-y-auto py-5 my-5" style={{scrollbarWidth: 'none'}}>
//                         {promts.current ? promts.current.map((data, index) => (
//                         <div className="flex flex-col text-white pt-5 mt-28">
//                             <div className="w-full h-[5%]"></div>
//                             <div className="flex flex-row py-3 rounded-lg px-6 bg-[#0F1021] my-3">
//                                 <div className="flex w-fit mr-4 justify-center items-center">
//                                     <img src={usermes} className="w-6 my-auto" />
//                                 </div>
//                                 <div className="flex flex-col w-full">
//                                     <p className="p-0 m-0">You </p><Markdown rehypePlugins={[rehypeHighlight]} className="text-[#7376aa] p-0 m-0">{data.promt}</Markdown>
//                                 </div>
//                                 {data.promt < data.shortpromt && <div><button onClick={() => {handle_textshow(index)}} className="p-2 rounded-full bg-[#06060E] hover:bg-[#19193a]"><IoIosArrowDown /></button></div>}
//                                 {data.promt > data.shortpromt && <div><button onClick={() => {handle_textshow(index)}} className="p-2 rounded-full bg-[#06060E] hover:bg-[#19193a]"><IoIosArrowUp /></button></div>}
//                             </div>
//                             <div className="flex flex-col py-3 rounded-lg px-6 bg-[#0F1021] my-3 text-[#7376aa]">
//                                 {data.response ? data.response.map((ddata) => {
//                                     return (<div className="flex flex-row gap-2 my-2"><img src={ddata.state ? doneimg : loader1} className={`my-auto ${ddata.state? ``: `w-9`}`} /><p className="my-auto">{ddata.task}</p></div>)
//                                 }): <></>}
//                             </div>
//                             </div>)) :<></>}
//                     {/* <p className="text-white">{step.current}</p> */}
//                     </div>
//                 </div>
//                 <div className="w-full">
//                     <div className={!inputdisable?"flex bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-1 w-full rounded-2xl h-fit":"flex bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300 p-1 w-full rounded-2xl h-fit"} style={{height: (20*textrows)+50}}>
//                         <div className={!inputdisable?'flex flex-row bg-[#0F1021] p-2 w-full rounded-xl gap-2 text-white my-auto mx-auto':'flex flex-row bg-[#454764] p-2 w-full rounded-xl gap-2 text-white my-auto mx-auto'} style={{height: (20*textrows)+40}}>
//                             <textarea 
//                             ref={textarearef} 
//                             disabled={inputdisable} 
//                             className={`flex bg-transparent active:outline-none focus:outline-none text:white placeholder:text-white w-full my-auto justify-center items-center`}
//                             style={{height: (20*textrows)+5, scrollbarWidth: 'none'}} 
//                             placeholder={inputdisable? "I am working now... ( Please don't interupt! )" :"Enter your promt"} 
//                             value={text} 
//                             onKeyDown={(event) => {
//                                 if(event.key == 'Enter' && !inputdisable) {
//                                     handlesendquery()
//                                 }
//                             }}
//                             onChange={(e) => {
//                                 let ro = parseInt(((textarearef.current.scrollHeight-15)/20).toFixed(0))
//                                 if(e.target.value.length < text.length) {
//                                     ro = parseInt((e.target.value.length/(textarearef.current.scrollWidth/10)).toFixed(0))
//                                     ro = ro < 1 ? 1: ro;
//                                 }
//                                 settextrows(ro > 5? 5: ro);
//                                 settext(e.target.value);
//                             }} />
//                             <div className="flex flex-row justify-end w-fit mt-auto pb-2" style={{height: 40}}>
//                                 <p className="text-2xl my-auto mx-2"><GoPlusCircle /></p>
//                                 <p className="text-2xl my-auto mx-2"><CiMicrophoneOn /></p>
//                                 <p className="text-2xl my-auto mx-2" onClick={inputdisable? () => {} : () => {handlesendquery()}} ><IoMdPaperPlane /></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full my-2"><p className="text-center text-[#626DAA]">Powered by Contessa & ExciteAI Limited</p></div>
//                 </div>
//             </div>

//             {genai && (<div className="flex flex-col bg-transparent w-[40%] h-screen pt-16">
//                             <div className="flex flex-col w-full h-full justify-end items-center">
//                                 <div className="flex flex-col w-[90%] h-[87%] bg-[#2c2f5f] mx-4 mb-11 rounded-lg p-2">
//                                     {botstate === CHATBOTSTATE.THINKING && <div className="flex flex-col w-full h-full bg-[#0F1021]">
//                                         <div className="flex flex-row w-full p-0 mb-0 bg-[#2c2f5f] pl-4">
//                                             <img src={Groot} className="w-12 h-12 mx-2 my-auto" />
//                                             <p className="text-white text-lg my-auto">{"Planner"}</p>
//                                         </div>
//                                         <div className=" w-full h-full overflow-y-auto" style={{scrollbarColor: 'transparent', scrollbarWidth: 'none'}}>
//                                             {/* {promts.length <= 0 && <Markdown className="flex flex-col py-3 rounded-lg px-6 bg-white bg-[#0F1021] my-0 text-black text-[#7376aa]">{mddata}</Markdown>} */}
//                                             {<Markdown className="flex flex-col py-3 rounded-lg px-6 bg-[#0F1021] my-0 text-[#7376aa]">{step.current}</Markdown>}
//                                             {/* {promts.length > 0 && promts[promts.length-1].response.split('\n').map((data) => <Markdown className="flex flex-col py-3 rounded-lg px-6 bg-white bg-[#0F1021] my-0 text-black text-[#7376aa]">{data}</Markdown>)} */}
//                                         </div>
//                                     </div>}
//                                     {(botstate === CHATBOTSTATE.COADING || botstate === CHATBOTSTATE.BACKEND) && <div className="flex flex-col w-full h-full bg-[#0F1021]">
//                                         <div className="flex flex-row w-full p-0 mb-0 bg-[#2c2f5f] pl-4">
//                                             <img src={Groot} className="w-12 h-12 mx-2 my-auto" />
//                                             <p className="text-white text-lg my-auto">{"Code Generator"}</p>
//                                             <p className="text-white text-md mx-3 my-auto ">{file.current}</p>
//                                         </div>
//                                         <div ref={codeRef} className="w-full h-full overflow-auto max-h-full">
//                                         <div className=" w-full h-fit overflow-visible" style={{overflow: 'visible'}}>
//                                             <SyntaxHighlighter language="javascript" style={dracula} wrapLines={true} useInlineStyles={true} customStyle={{height: '100%', overflowX: 'hidden', scrollbarColor: 'transparent', scrollbarWidth: 'none'}} wrapLongLines={true} >
//                                                 {code.current}
//                                             </SyntaxHighlighter>
//                                         </div>
//                                         </div>
//                                     </div>}
//                                     {botstate === CHATBOTSTATE.ASSETS && <div className="flex flex-col w-full h-full bg-[#0F1021]">
//                                         <div className="flex flex-row w-full p-0 mb-0 bg-[#2c2f5f] pl-4">
//                                             <img src={Groot} className="w-12 h-12 mx-2 my-auto" />
//                                             <p className="text-white text-lg my-auto">{"Linking Assets"}</p>
//                                         </div>
//                                         <div ref={codeRef} className="flex w-full h-full overflow-y-auto" style={{scrollbarColor: 'transparent', scrollbarWidth: 'none'}}>
//                                             {imgs.current?.length > 0 ? <img src={imgs.current[imgs.current.length-1]} className="w-3/4 h-1/2 my-auto mx-auto" /> : <></>}
//                                         </div>
//                                     </div>}
//                                     {(botstate === CHATBOTSTATE.INITIAL || botstate == CHATBOTSTATE.UIUX) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
//                                         <div><img src={ROBOT} className="w-32" /></div>
//                                         <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{weddata === ''?'AI WEB DEVELOPER':''}</div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{weddata !== ''?'I am '+weddata:''}</div>
//                                         </div>}
//                                     {(botstate === CHATBOTSTATE.CONNECT) && <div className="flex flex-col w-full h-full bg-[#d5c2d6] justify-center items-center">
//                                         <div><img src={ROBOT} className="w-32" /></div>
//                                         <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">
//                                             <TypeAnimation
//                                                 sequence={[
//                                                     'I am connecting frontend and backend',
//                                                     1000,
//                                                     '',
//                                                     1000,
//                                                     'I am connecting frontend and backend',
//                                                     1000,
//                                                     '',
//                                                     1000,

//                                                 ]}
//                                                 wrapper="span"
//                                                 speed={30}
//                                                 // style={{ fontSize: '2em', display: 'inline-block' }}
//                                                 repeat={Infinity}
//                                                 />
//                                         </div>
//                                         <img src={connector} className="w-52" />
//                                         </div>}
//                                     {(botstate === CHATBOTSTATE.FINALTEST) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
//                                         <div><img src={ROBOT} className="w-32" /></div>
//                                         <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'AI WEB DEVELOPER'}</div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'I am testing everything'}</div>
//                                         </div>}
//                                     {(botstate === CHATBOTSTATE.SAVING) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
//                                         <div><img src={ROBOT} className="w-32" /></div>
//                                         <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'AI WEB DEVELOPER'}</div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'I am saving all your data'}</div>
//                                         </div>}
//                                     {(botstate === CHATBOTSTATE.ALLDONE) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
//                                         <div><img src={ROBOT} className="w-32" /></div>
//                                         <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
//                                         <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'What do you want next'}</div>
//                                         <div className="flex flex-row h-1/3 w-full justify-center items-center gap-2">
//                                             <button className="p-2 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Deploy</button>
//                                             <button className="p-2 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Customize</button>
//                                         </div>
//                                         </div>}
//                                 </div>

//                             </div>
//             </div>)}
//             </div>
//         </div>
//     )
// }