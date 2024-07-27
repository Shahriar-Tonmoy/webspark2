import NavInner from "@/components/NavInner";
import { Drawer } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { LuMonitor } from "react-icons/lu";
import { GrBriefcase } from "react-icons/gr";
import Magic from "../assets/images/magic.webp";
import { GoPlusCircle } from "react-icons/go";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoMdPaperPlane } from "react-icons/io";
import usermes from '../assets/images/usermes.png';
import Markdown from 'react-markdown'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import rehypeHighlight from 'rehype-highlight'
import { CHATBOTSTATE } from "@/functions/enums/chatbotstate";
import ROBOT from '../assets/images/robot-8.png'
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { PROMOPTSRESPONSETYPE } from "@/functions/types/socketresponse";
// import { setPromptResponse } from "@/reducer/promptstate";
import loader1 from '../assets/icons/loader-one.gif';
import doneimg from '../assets/icons/done.svg';
import { IoIosLogOut } from "react-icons/io";

import { usePersistedState } from "@/hooks/usePersistedState";
import { AppState, EditorTheme, GeneratedCodeConfig, SELECTION, Settings } from "@/types";
import { CodeGenerationParams, generateCode } from "@/generateCode";
import { getaccountinfov2, getdetailedhistory, gethistoryid, gethistoryidlist } from "@/functions/APIRequests/UserAPIRequests";
import { setUpdateInstructionstate } from "@/reducer/instructions";
import { setResetvoice } from "@/reducer/resetvoice";
import html2canvas from "html2canvas";

import { useNavigate } from "react-router";
import { cookieAvailale, getAppCookie, APPCOOKIE, VALIDATIONCOOKIE } from "./Fuctions/appcookie/appcookie";
import { setapptokenck } from "@/reducer/cookiestate";
import { setuservalid } from "@/reducer/uservaliditystate";
import CodePreview from "@/components/CodePreview";
import classNames from "classnames";
import CodeTab from "@/components/CodeTab";
import './chatborder.scss';
import PreviewCus from "@/components/PreviewCus";
import ImageUploadV2 from "@/components/ImageUploadV2";
import ScreenshortV2 from "./ScreenshortV2";
import { IoIosDesktop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { IoIosTabletLandscape } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import coin from '../assets/images/coin.gif';
import imglogo from '../assets/images/img.png';
import pen from '../assets/images/pen.png';
import crawler from '../assets/images/crawler.png';
import NoneSelection from "./NoneSelection";
import CodeTabCus from "@/components/CodeTabCus";
import Voicerecignation from "@/components/Voicerecignation";




// import MarkdownPreview from '@uiw/react-markdown-preview';

export default function TempAppPage() {
    // const dispatch = useDispatch();
    // const promts = useSelector((state: RootState) => state.item11.response);
    type HistoryListType = {id: number; date: string}[];
    
      
      // Create the dictionary object

    const images = useSelector((state: RootState) => state.item.items); // Assuming the image array is stored in the 'items' property of the state
    const crastate = useSelector((state: RootState) => state.item1.apstate);  
    const imreadyst = useSelector((state: RootState) => state.item2.apstate);
    const cookiest = useSelector((state: RootState) => state.item3.appcookie);
    const updateInstruction = useSelector((state: RootState) => state.item10.updateInstruction);

    const [appState, setAppState] = useState<AppState>(crastate);
	const Dispatch = useDispatch();
	const setUpdateInstruction = (data: string) => {
		Dispatch(setUpdateInstructionstate(data))
	}
    const updateresetvoice = (data: boolean) => {
		Dispatch(setResetvoice(data));
	}


    const [scrollTop, setScrollTop] = useState(0);
    const [dl, setdl] = useState(true);
    const [dr, setdr] = useState(false);
    const [text, settext] = useState('');
    const [textrows, settextrows] = useState(1);
    // const [genai, setgenai] = useState(false);
    const textarearef = useRef<HTMLTextAreaElement>(null);
    const socket = useRef<WebSocket>(null);
    const [botstate, setBotstate] = useState<CHATBOTSTATE>(CHATBOTSTATE.INITIAL);
    const meslen = useRef(0);
    const sitedata = useRef(null);
    const path = useRef('');
    const code = useRef('');
    const [weddata, setweddata] = useState('');
    const codeRef = useRef<HTMLDivElement>(null);
    const file = useRef('');
    const imgs = useRef<string[]>([]);
    const [inputdisable, setinputdisable] = useState(false);

    /*imported states*/

    const [generatedCode, setGeneratedCode] = useState<string>("");
	const [referenceImages, setReferenceImages] = useState<string[]>(images);
	const [executionConsole, setExecutionConsole] = useState<string[]>([]);
	const [history, setHistory] = useState<string[]>([]);
	const [selectedTab, setSelectedTab] = useState<"mobile" | "desktop" | 'tab' | 'code'>('desktop');
	const [textindex, setTextIndex] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [acmodalOpen, setAcmodalOpen] = useState(false)
	const regenerate = useRef(null);
	const [error, setError] = useState(false);
	const [mikeoff, setMikeoff] = useState(false);
	//const [outputsetmodal, setOutputsetModal] = useState(false);
	const [doneinitial, setDoneinitial] = useState(false);
	const [donelast, setDonelast] = useState(false);
	const textboxref = useRef(null);
	const textboxref1 = useRef(null);
	const reloadbtnref = useRef(null);
	const [showcg, setshowcg] = useState(false);
	const [isshown, setisshown] = useState(false);
	const [conprev, setconpre] = useState('');
	const codereset = useRef(false);
    const mscref = useRef<HTMLDivElement>(null);
    const [userinfo, setUserinfo] = useState({
		username: '',
		email: '',
		phone: '',
		token: 0,
        plan: 'Free',
        validity: 0
	});
    const [historyid, setHistoryid] = useState<number>(null);
    const [historyidlist, setHistoryidlist] = useState<HistoryListType>(null);
    interface MyDictionary {
        [key: number]: number; // The keys are strings, and the values are strings
      }
      const historydict = useRef<MyDictionary>({});

      const sethistorydict = (key: number, value: number) => {
        historydict.current[key] = value;
      };
    const [shouldIncludeResultImage, setShouldIncludeResultImage] =
    useState<boolean>(true);
    const promts = useRef<PROMOPTSRESPONSETYPE>(null)
    const setpromts = (data: PROMOPTSRESPONSETYPE) => {
        // console.log(data)
        // dispatch(setPromptResponse(data));
        promts.current = data;
    }


    const navigate = useNavigate();
	// //console.log('current cookie state')
	// //console.log(cookiest)
	useEffect(() => {
		if(cookieAvailale(APPCOOKIE)) {
			if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
			navigate('/activate')
			}
		}
		else {
			navigate('/')
		}
	}, [])
	useEffect(() => {
        Dispatch(setapptokenck(getAppCookie(APPCOOKIE)))
        Dispatch(setuservalid(getAppCookie(VALIDATIONCOOKIE) === 'true' ? true : false))
    }, [])

/*imported states*/

useEffect(() => {
    if(historydict.current[0] == undefined) {
        sethistorydict(0, 0);
    }
    if(cookiest !== '') {
    gethistoryidlist((data) => {
        if(data != undefined && data.length > 0) {
        
        data.map((dat, index) => {
            sethistorydict(dat.id, index)
        })
              

        setHistoryidlist(data)
        data.map((dt) => {
            if(promts.current === null || promts.current[historydict[dt.id]] === null) {
            getdetailedhistory(dt.id, (data1) => {
                console.log('dict value for id')
                console.log(historydict.current[dt.id])

                const dlist = data1.map((dt1) => {
                       const obj = {
                        prompttypeimage: dt1.prompttypeimage,
                        promt: dt1.promt,
                        promptimg: [dt1.promptimg],
                        chatresponse: false,
                        code: dt1.response,
                        response: [],
                        shortpromt: dt1.promt
                       }
                       return obj;
                    })
                
                console.log('new datalist index')
                console.log(dt.id)
                if(promts.current) {
                promts.current.push({history: dlist, id: dt.id});
                }
                else{
                    promts.current = [{history: dlist, id: dt.id}]
                }
                // promts.current[historydict.current[dt.id]].history = data1.map((dt) => {
                //    const obj = {
                //     prompttypeimage: dt.prompttypeimage,
                //     promt: dt.promt,
                //     promptimg: [dt.promptimg],
                //     chatresponse: false,
                //     code: dt.response,
                //     response: [],
                //     shortpromt: dt.promt
                //    }
                //    return obj;
                // })\
                forceUpdate()
                console.log(historydict)
                console.log(data1)
                console.log(promts.current)
            })
        }
        })
    }
    }, cookiest)
    }
}, [cookiest, appState])

    const [appselection, setAppselection] = useState<SELECTION>(SELECTION.NONE)

const seterrorst = (data: boolean) => {
    setError(data);
}


    const [settings, setSettings] = usePersistedState<Settings>(
		{
			openAiApiKey: null,
			openAiBaseURL: null,
			screenshotOneApiKey: 'JSFt6-hHotNNMA',
			isImageGenerationEnabled: true,
			editorTheme: EditorTheme.COBALT,
			generatedCodeConfig: GeneratedCodeConfig.HTML_TAILWIND,
			// Only relevant for hosted version
			isTermOfServiceAccepted: false,
			accessCode: null,
		},
		"setting"
	);


    const wsRef = useRef<WebSocket>(null);

	// When the user already has the settings in local storage, newly added keys
	// do not get added to the settings so if it's falsy, we populate it with the default
	// value
	useEffect(() => {
		if (!settings.generatedCodeConfig) {
			setSettings((prev) => ({
				...prev,
				generatedCodeConfig: GeneratedCodeConfig.HTML_TAILWIND,
			}));
		}
	}, [settings.generatedCodeConfig, setSettings]);
    useEffect(() => {
        if(cookiest !== '') {
            getaccountinfov2(setUserinfo, cookiest);
        }
    }, [cookiest])

    /*imported functions*/
    const downloadCode = () => {
		// Create a blob from the generated code
		const blob = new Blob([generatedCode], { type: "text/html" });
		const url = URL.createObjectURL(blob);

		// Create an anchor element and set properties for download
		const a = document.createElement("a");
		a.href = url;
		a.download = "index.html"; // Set the file name for download
		document.body.appendChild(a); // Append to the document
		a.click(); // Programmatically click the anchor to trigger download

		// Clean up by removing the anchor and revoking the Blob URL
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const reset = () => {
		setAppState(AppState.INITIAL);
		setGeneratedCode("");
		setReferenceImages([]);
		setExecutionConsole([]);
		setHistory([]);
	};

    function doGenerateCode(params: CodeGenerationParams, promt: string | null, historyid: number | null) {
		setExecutionConsole([]);
		setAppState(AppState.CODING);
        const historyidf = historyid == null ? 0: historyid;

		// Merge settings with params
		const updatedParams = { ...params, ...settings };
        console.log('startting')
		generateCode(
			wsRef,
			updatedParams,
			(token) => setGeneratedCode((prev) => {
                const lenh = promts.current[historydict.current[historyidf]].history?promts.current[historydict.current[historyidf]].history.length:0
                if(promts.current[historydict.current[historyidf]].history) {
                    promts.current[historydict.current[historyidf]].history[lenh-1].code = prev+token
                }
                forceUpdate()
				return prev + token
			}),
			(code) => {
                setGeneratedCode(code);
                const lenh = promts.current[historydict.current[historyidf]].history?promts.current[historydict.current[historyidf]].history.length:0
                promts.current[historydict.current[historyidf]].history[lenh-1].code = code
                forceUpdate()
            },
			(line) => setExecutionConsole((prev) => [...prev, line]),
			() => {
                setAppState(AppState.CODE_READY)
            },
			cookiest,
			seterrorst,
			promt,
			historyid,
            (id) => {
                console.log('history id')
                console.log(id)
                sethistorydict(id, promts.current.length-1)
                setHistoryid(id)
            }
		);
		getaccountinfov2(setUserinfo, cookiest);
	}

	// Initial version creation
	function doCreate(referenceImages: string[]) {
		// Reset any existing state
		reset();

		setReferenceImages(referenceImages);
		if (referenceImages.length > 0) {
			doGenerateCode({
				generationType: "create",
				image: referenceImages[0],
			}, null, historyid);
		}

		getaccountinfov2(setUserinfo, cookiest);
        // gethistoryid((num) => {setHistoryid(num)}, cookiest);
	}

	const generatesite = (data: string[]) => {
		// //console.log('running')
		doCreate(data)
	}
	const endscrollToSection = (ref) => {
		if (ref && ref.current) {
		const container = ref.current.parentElement; // Assuming parent is the container
		container.scrollTop = 0;
		}
	};
    const takeScreenshot = async (): Promise<string> => {
		const iframeElement = document.querySelector(
			"#preview-desktop"
		) as HTMLIFrameElement;
		if (!iframeElement?.contentWindow?.document.body) {
			return "";
		}

		const canvas = await html2canvas(iframeElement.contentWindow.document.body);
		const png = canvas.toDataURL("image/png");
		return png;
	};

	// Subsequent updates
	async function doUpdate() {
		const instruct = conprev !== '' ? conprev : updateInstruction;
		setconpre('')
		updateresetvoice(true);
		if(reloadbtnref) {
			endscrollToSection(reloadbtnref);
		}
		const updatedHistory = [...history, generatedCode, 'Keep your previous generated code same and Do not add any comments in your new generated code and provide full new genereted code using this instructions : "'+instruct+' WRITE THE FULL CODE." You must avoid this type of comments for example "<!-- Add other navigation links as needed -->" and "<!-- ... other news items ... -->" and "<!-- ... remaining sections ... -->" and "<!-- Remaining sections are unchanged and should be included as they were in the previous code. -->" in place of writing the full code. WRITE THE FULL CODE and repeat elements as needed to match the screenshot. For example, if there are 15 items, the code should have 15 items. DO NOT LEAVE comments like "<!-- Repeat for each news item -->" or bad things will happen.'];

		if (shouldIncludeResultImage) {
			const resultImage = await takeScreenshot();
			doGenerateCode({
				generationType: "update",
				image: referenceImages[0],
				resultImage: resultImage,
				history: updatedHistory,
			}, instruct, historyid);
		} else {
			doGenerateCode({
				generationType: "update",
				image: referenceImages[0],
				history: updatedHistory,
			}, instruct, historyid);
		}

		setHistory(updatedHistory);
		setGeneratedCode("");
		setUpdateInstruction("");
		updateresetvoice(true);
		setUpdateInstruction("");
		setconpre('')
	}
	async function docontinue() {

		codereset.current = false;
		const instruct = conprev !== '' ? conprev : updateInstruction;
		setconpre('')
		updateresetvoice(true);
		console.log(instruct);
		const tempcode = generatedCode;
		if(reloadbtnref) {
			endscrollToSection(reloadbtnref);
		}
		const updatedHistory = [...history, tempcode, 'Continue generating from where you left'];

			doGenerateCode({
				generationType: "continue",
				image: referenceImages[0],
				history: updatedHistory,
			}, null, historyid);

		// setHistory(updatedHistory);
		if(!codereset.current) {
		setGeneratedCode("");
		codereset.current = true;
		}
		setUpdateInstruction("");
		updateresetvoice(true);
		setconpre('')
	}
    /*imported functions*/




    useEffect(() => {
        if (codeRef.current) {
			const { scrollHeight, clientHeight } = codeRef.current;
			codeRef.current.scrollTop = scrollHeight - clientHeight;
		}
      }, [code.current]);
    //const [promts, setpromts] = useState<{promt: string; response: {task: string; state: boolean}[]; shortpromt: string}[]>([])
    const step = useRef('');
    
    const [, forceUpdate] = React.useReducer(x => x + 1, 0); // Force re-render
    // const [checklist, setchecklist] = useState<{task: string; state: boolean}[]>(null);
    const openPopupWindowprev = (url) => {
        const features = 'height=800,width=1200,left=200,top=100'; // Customize the window features as needed
        const newWindow = window.open(url, 'popup', features);
    
        // Optional: Check if the window was successfully opened
        if (!newWindow) {
          alert('Failed to open the popup window. Please check your browser settings.');
        }
        const checkClosed = setInterval(() => {
            if (newWindow.closed) {
              clearInterval(checkClosed);
              socket.current.send('TEST');
              const openurl = 'https://beta.genwebbuilder.com/prevtest#?site='+path.current+'/prod#?site='+encodeURIComponent(JSON.stringify(sitedata.current))
              setTimeout(() => {
              openPopupWindowprevtest(openurl)
              }, 3000);
            }
          }, 1000); // Check every second
      };

      const openPopupWindowprevtest = (url) => {
        const features = 'height=800,width=1200,left=200,top=100'; // Customize the window features as needed
        const testwindow = window.open(url, 'popup', features);
    
        // Optional: Check if the window was successfully opened
        if (!testwindow) {
          alert('Failed to open the popup window. Please check your browser settings.');
        }
        setTimeout(() => {
            testwindow.close();
            clearInterval(checkClosed);
            socket.current.send('TESTDONE')
            setTimeout(() => {
                socket.current.send('BACKEND')
                setBotstate(CHATBOTSTATE.BACKEND)
                code.current = '';
                forceUpdate();
            }, 2000);
        }, 20000)
        const checkClosed = setInterval(() => {
            if (testwindow.closed) {
              clearInterval(checkClosed);
              socket.current.send('TESTDONE')
              setTimeout(() => {
                socket.current.send('BACKEND')
                setBotstate(CHATBOTSTATE.BACKEND)
                code.current = '';
                forceUpdate();
              }, 2000);
            }
          }, 1000); // Check every second
      };


      const openPopupWindowprevfinaltest = (url) => {
        const features = 'height=800,width=1200,left=200,top=100'; // Customize the window features as needed
        const testwindow = window.open(url, 'popup', features);
    
        // Optional: Check if the window was successfully opened
        if (!testwindow) {
          alert('Failed to open the popup window. Please check your browser settings.');
        }
        setTimeout(() => {
            testwindow.close();
            clearInterval(checkClosed);
            socket.current.send('TDONE')
            setBotstate(CHATBOTSTATE.ALLDONE);
            
        }, 20000)
        const checkClosed = setInterval(() => {
            if (testwindow.closed) {
              clearInterval(checkClosed);
              socket.current.send('TDONE')
            }
          }, 1000); // Check every second
      };


    /*
    useEffect(() => {
        // window.open('https://genwebbuilder.com', '_blank')
        // textwindow()
        // openPopupWindowprevtest()
        if (genai === true && socket.current === null) {
            const ws = new WebSocket('wss://genwebbuilder.com:7001/ws/sitejson?token='+cookiest);
        
            ws.onopen = () => {
            console.log('WebSocket connected');
            socket.current = ws;
            };
        
            ws.onmessage = (event) => {
            const data = JSON.parse(event.data)
            //   console.log(data);
                if ('process' in data) {
                    step.current = ``+step.current+data.process+``
                    forceUpdate()
                    // setplan(step.current)
                    // const pmpts = [...promts]
                    // pmpts[pmpts.length-1].
                    // setpromts()
                    
                }
                if ('aistate' in data) {
                    
                    if (data.aistate.state === false) {
                    const newState = promts.current
                    if (newState[newState.length - 1] && newState[newState.length - 1].response) {
                        const rres = newState[newState.length - 1].response;
                        rres.push({ task: data.aistate.task, state: data.aistate.state });
                        
                        newState[newState.length - 1].response = rres;
                        setpromts(newState);
                        forceUpdate()
                        
                    }
                    }
                    else{
                        const rppromt = promts.current;
                        const responseLength = rppromt[rppromt.length - 1]?.response?.length
                        if (responseLength === 1) {
                            setBotstate(CHATBOTSTATE.THINKING);
                            socket.current.send('SCAT');
                        } else if (responseLength === 2) {
                            socket.current.send('TAG');
                            setBotstate(CHATBOTSTATE.UIUX)
                            setweddata('designing UI/UX')
                        } else if (responseLength === 3) {
                            socket.current.send('TEM');
                            setBotstate(CHATBOTSTATE.COADING)
                        } else if (responseLength === 4) {
                            socket.current.send('JSON');
                            setBotstate(CHATBOTSTATE.ASSETS)
                        } else if (responseLength === 5) {
                            socket.current.send('SAVE');
                        }
                        else if (responseLength === 6) {
                            socket.current.send('PATH');
                        }
                        else if(responseLength === 9) {
                            socket.current.send('CONNECT')
                            setBotstate(CHATBOTSTATE.CONNECT)
                        }
                        const newState = promts.current;
                        newState[newState.length-1].response[newState[newState.length-1].response.length-1] = {task: newState[newState.length-1].response[newState[newState.length-1].response.length-1].task, state: data.aistate.state};
                        setpromts(newState);
                        meslen.current = meslen.current+1;
                        forceUpdate()
                    }
                
                }
                if('sitedata' in data) {
                    sitedata.current = data.sitedata
                   
                    forceUpdate()
                }
                if('PATH' in data) {
                    path.current = data.PATH;
                 
                    // console.log(JSON.stringify(sitedata.current))
                    const openurl = 'https://beta.genwebbuilder.com/previewsite#?site='+path.current+'/prod#?site='+encodeURIComponent(JSON.stringify(sitedata.current))
                  
                    openPopupWindowprev(openurl)
                }
                if('code' in data) {
                    code.current = code.current+data.code;
                    forceUpdate()
                    if (codeRef.current) {
                        const { scrollHeight, clientHeight } = codeRef.current;
                        codeRef.current.scrollTop = scrollHeight - clientHeight;
                        codeRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }
                    forceUpdate()
                }
                if('codebe' in data) {
                    code.current = code.current+data.codebe
                    forceUpdate()
                }
                if ('filebe' in data) {
                    file.current = data.filebe;
                    forceUpdate()
                }
                if('file' in data) {
                    file.current = data.file;
                    forceUpdate()
                }
                if("IMG" in data) {
                    imgs.current.push(data.IMG)
                    forceUpdate()
                }
                if("CDONE" in data) {
                    socket.current.send('FITEST')
                    setBotstate(CHATBOTSTATE.FINALTEST);
                    const openurl = 'https://beta.genwebbuilder.com/prevtest#?site='+path.current+'/prod#?site='+encodeURIComponent(JSON.stringify(sitedata.current))
                    setTimeout(() => {
                        openPopupWindowprevfinaltest(openurl)
                    }, 2000);

                }
                

            };
        
            ws.onclose = () => {
            console.log('WebSocket disconnected');
            socket.current = null;
            //saveSite(response, cookie);
            };
        
            return () => {
            // Clean up WebSocket connection
            if (ws) {
                ws.close();
            }
            };
        }
        else if(genai === false && socket.current != null) {
            socket.current = null;
        }
    }, [genai])*/

    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);    
      };

      const handlesendquery = () => {
        // setinputdisable(true);
        // const fintext = text.length < 100 ? text : text.slice(0, 100) + '...';
        // const newPrompt = promts.current // Create a deep copy of promts
        // newPrompt.push({prompttypeimage: false, promt: fintext, promptimg: null, shortpromt: text, chatresponse: true, code: null, response: [] });
        // setpromts(newPrompt);
        // const data = JSON.stringify({ "promt": text });
        // settext('');
        
        // settextrows(1);
        // step.current = '';
        // socket.current.send(data);
        setweddata('Scanning your Data')
    };      

    const handle_textshow = (ind: number) => {
        const historyidf = historyid === null ? 0 : historyid
        promts.current[historydict.current[historyidf]].history = promts.current[historydict.current[historyidf]].history.map((data, index) => {
            if(index === ind && data != undefined) {
                return ({...data, promt: data.shortpromt, shortpromt: data.promt, response: data.response})
            }
            else {
                return data;
            }
        })
        // setpromts();
        forceUpdate();
    }

    useEffect(() => {
        if (appState === AppState.CODE_READY || appselection === SELECTION.GENI) {
            setinputdisable(false);
        }
        else {
            setinputdisable(true);
        }
    }, [appState, appselection])

    const scrollToBottom = () => {
        if (mscref.current) {
            mscref.current.scrollTop = mscref.current.scrollHeight;
        }
      };
    useEffect(() => {
    scrollToBottom();
    }, [generatedCode])
    const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			regenerate.current.click();
		}
	};
    const { innerWidth: width } = window;
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(width < 900);
    }, [width]);

    useEffect(() => {
        if(mobile) {
        setdl(false);
        setdr(false);
        }
    }, [mobile])


    // useEffect(() => {
    //     console.log('genai updated');
    // }, [genai])
    function converttimestamp(timestampString: string): string {
        const ndate = new Date(timestampString);
        const date = new Date(ndate.getTime() - (ndate.getTimezoneOffset() * 60000));
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Month is zero-based
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    
        // Convert 24-hour time to 12-hour time
        const formattedHours = date.getHours() % 12 || 12;
    
        // Construct the formatted date string
        const formattedDateTime = `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
        
        return formattedDateTime;
    }

    useEffect(() => {
        if(promts.current) {
            console.log('expecting '+(promts.current.length-1).toString()+" and getting "+historydict.current[historyid].toString())
        if(0 !== historydict.current[historyid]) {
            setinputdisable(true)
        }
        else {
            setinputdisable(false)
        }
    }
    }, [historyid])
    return (
        <div onScroll={handleScroll} className="flex flex-col bg-[#06060E] h-screen w-full overflow-y-hidden">
            <NavInner scroll={scrollTop} tdl={() => {
                // setgenai(!dl?false:genai)
                setdl(!dl)
                }} tdr={() => {setdr(!dr)}}
                setappselection={(data) => {
                    setAppselection(data)
                    setdr(false)
                    setdl(true)
                }}
                 />
            <Drawer
            placement="left"
            open={dl}
            overlay={false}
            onClose={() => {setdl(false)}}
            className={`bg-[#070710] ${mobile?`w-[80%]`:`lg:w-[40%] xl:w-[20%]`} fixed border-r-2 border-[#202028] text-[#626DAA] z-30`}
            // style={{zIndex: 70}}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
            <div className="flex flex-col h-full w-full overflow-y-auto" style={{scrollbarWidth: 'none'}}>
                <div className={`${mobile?`mt-20`: `mt-20`} p-2.5`}>
                    <button onClick={() => {
                        setAppselection(SELECTION.NONE)
                        setdl(true)
                        setdr(false)
                    }} className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]">
                        <p className="text-xl my-auto"><LuMonitor /></p>
                        <p className="my-auto">Welcome</p>
                    </button>
                    <button onClick={() => {
                        navigate('/services')
                    }} className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]">
                        <p className="text-xl my-auto"><GrBriefcase /></p>
                        <p className="my-auto">Manage Subscription</p>
                    </button>
                    <div className="border-t-2 border-[#202028] w-full my-4"></div>
                    {/* <button onClick={() => {
                        setdl(false)
                
                        setdr(false)
                        if(appselection !== SELECTION.GENI) {
                            setAppselection(SELECTION.GENI)
                        }
                    }
                        } className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]">
                        <img src={Magic} className="w-9" />
                        <p className="my-auto">GENE AI</p>
                    </button> */}
                    <button onClick={() => {
                        if(appselection !== SELECTION.IMAGE) {
                        setAppselection(SELECTION.IMAGE)
                        setAppState(AppState.INITIAL)
                        scrollToBottom()
                        setdl(mobile?false:dl)
                        }
                    }
                        } className={`flex flex-row p-3 gap-2 w-full rounded-lg ${appselection === SELECTION.IMAGE?`bg-[#0F1021] text-[#2B45DC]`:``} transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]`}>
                        <div className="p-1.5 bg-[#201F34] rounded-md">
                        <img src={imglogo} className="w-6 rounded-lg" style={{background: 'radial-gradient(150.40% 100.55% at 50.00% 100.29%, #666294, transparent, transparent)'}} />
                        </div>
                        <p className="my-auto">Transform Image</p>
                    </button>
                    <button onClick={() => {
                        if(appselection !== SELECTION.SKETCH) {
                        setAppselection(SELECTION.SKETCH)
                        setAppState(AppState.INITIAL)
                        navigate('/artboard')
                        }
                    }
                        } className={`flex flex-row p-3 gap-2 w-full rounded-lg ${appselection === SELECTION.SKETCH?`bg-[#0F1021] text-[#2B45DC]`:``} transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]`}>
                        <div className="p-1.5 bg-[#201F34] rounded-md">
                        <img src={pen} className="w-6 rounded-lg" style={{background: 'radial-gradient(150.40% 100.55% at 50.00% 100.29%, #666294, transparent, transparent)'}} />
                        </div>
                        <div className="flex flex-row my-auto h-fit">
                        <p className="my-auto">Sketch to Page</p>
                        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white ml-3 text-xs py-1 px-2 rounded-lg">NEW</div>
                        </div>
                    </button>
                    <button onClick={() => {
                        // if(appselection !== SELECTION.URL) {
                            setAppselection(SELECTION.URL)
                            setAppState(AppState.INITIAL)
                            setdl(mobile?false:dl)
                            
                            //}
                    }
                        } className={`flex flex-row p-3 gap-2 w-full rounded-lg ${appselection === SELECTION.URL?`bg-[#0F1021] text-[#2B45DC]`:``} transition duration-500 hover:bg-[#0F1021] hover:text-[#2B45DC]`}>
                        <div className="p-1.5 bg-[#201F34] rounded-md">
                        {/* <p className="p-o m-0 text-white" style={{fontSize: 9}}><WiStars /></p> */}
                        <img src={crawler} className="w-6 rounded-lg" style={{background: 'radial-gradient(150.40% 100.55% at 50.00% 100.29%, #666294, transparent, transparent)'}} />
                        </div>
                        <div className="flex flex-row my-auto h-fit">
                        <p className="my-auto">URL Magic</p>
                        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white ml-3 text-xs py-1 px-2 rounded-lg">BETA</div>
                        </div>
                    </button>
                </div>
                    <div className="flex flex-col mx-auto w-[95%] h-fit bg-[#0F1021] p-2 rounded-md mt-auto mb-14 text-xs">
                        <div className="flex flex-row justify-between">
                            <div className="relative flex p-2 bg-black rounded-full w-fit h-fit" >
                                <img src={usermes} className="w-6 h-6" />
                                <div className="absolute p-1.5 rounded-full bg-green-600 bottom-2 right-1"></div>
                            </div>
                            <div className="flex flex-col ml-2">
                                <p className="text-white mt-2 p-0 mb-0">{userinfo.username}</p>
                                <p className="text-[#626DAA] m-0 p-0">{userinfo.email}</p>
                            </div>
                            <div className="p-1 bg-[#7064E9] text-white h-fit w-fit rounded-md">{userinfo.plan}</div>
                        </div>
                        <div className="flex flex-row w-fit my-3 justify-center items-center">
						<img src={coin} className="w-11" />
                        <p className="text-white my-auto">{userinfo.token.toFixed(0)}</p>
                        <p className="text-white my-auto mx-2">{(userinfo.token>1)?"coins available":"coins available"}</p>
						</div>
                        <div onClick={() => {navigate('/services')}} className="border-[#202028] border-2 p-2 w-[95%] mx-auto rounded-lg text-center hover:bg-[#7064E9] text-white cursor-pointer">Upgrade Now</div>
                    </div>
                    
            </div>
            </Drawer>
            <Drawer
            placement="right"
            open={dr}
            overlay={false}
            onClose={() => {setdr(false)}}
            className={`bg-[#070710] ${mobile?`w-[80%]`:`lg:w-[40%] xl:w-[20%]`} fixed border-r-2 border-[#202028] text-[#626DAA] z-30`}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                <div className="mt-24 p-2.5">
                    <button onClick={() => {
                        setAppselection(SELECTION.NONE)
                        setdl(true)
                    }} className="flex flex-row p-3 gap-2 w-full rounded-lg transition duration-500 bg-[#7064E9] text-white hover:bg-[#0F1021] hover:text-[#2B45DC]">
                        <p className="text-xl my-auto"><GoPlusCircle /></p>
                        <p className="my-auto">Start new Chat</p>
                    </button>
                    <div className="flex flex-col w-full h-fit gap-2 mt-4">
                        {historyidlist ? historyidlist!.map((data) => {
                            return (<div className={`text-white p-2 border-2 border-[#202028] rounded-lg text-center ${data.id === historyid?`bg-[#7064E9]`:`hover:bg-[#7064E9]`}`} onClick={() => {
                                // console.log(historydict)
                                // console.log(data.id)
                                // console.log(historydict[data.id])
                                setAppselection(SELECTION.GENI)
                                setAppState(AppState.CODE_READY)
                                setHistoryid(data.id)
                                setdr(mobile?false:dr)
                                // getdetailedhistory(data.id, (data1) => {
                                //     const dlist = data1.map((dt) => {
                                //         const obj = {
                                //          prompttypeimage: dt.prompttypeimage,
                                //          promt: dt.promt,
                                //          promptimg: [dt.promptimg],
                                //          chatresponse: false,
                                //          code: dt.response,
                                //          response: [],
                                //          shortpromt: dt.promt
                                //         }
                                //         return obj;
                                //      })
                                 
                                //  console.log('new datalist')
                                //  console.log(data.id)
                                //  console.log(historydict.current[data.id])
                                //  console.log(historydict.current)
                                //  console.log(dlist)
                                //  console.log(promts.current)
                                // //  promts.current[historydict[data.id]].history = dlist;
                                //  forceUpdate()
                                // })
                            }}>{converttimestamp(data.date)}</div>)
                        }):<></>}
                    </div>

                    
                    
                </div>
            </Drawer>
            <div className="flex flex-row">
            <div className={`flex flex-col ${mobile?`m-o w-full`:(appselection === SELECTION.NONE || appselection === SELECTION.ACCOUNT)?`ml-[20%] mr-8 w-full`:(appselection === SELECTION.GENI || appselection === SELECTION.IMAGE || appselection === SELECTION.SKETCH || appselection === SELECTION.URL)?`mx-20 w-full`:`w-full mx-[20%]`} justify-end px-2 h-screen`}>
                <div className="p-2 w-full h-full m-0">
                    <div className={`h-screen ${appState == AppState.INITIAL?`overflow-hidden`:`overflow-y-auto`} pt-0 pb-5 mb-5 mt-0`} ref={mscref} style={{scrollbarWidth: 'none'}}>
                        {(promts.current && promts.current[historydict.current[historyid === null ? 0 : historyid]].history && appState !== AppState.INITIAL && appselection != SELECTION.ACCOUNT && appselection !== SELECTION.NONE) ? promts.current[historydict.current[historyid === null ? 0 : historyid]].history.map((data, index) => (
                        <div className="flex flex-col text-white pt-5 mt-28 mb-28">
                            <div className="w-full h-[5%]"></div>
                            <div className="flex flex-row py-3 rounded-lg px-6 bg-[#0F1021] my-3">
                                <div className="flex w-fit mr-4 mb-auto justify-center items-center">
                                    <img src={usermes} className="w-6 my-auto" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="p-0 m-0">You </p>
                                    {!data.prompttypeimage && <Markdown rehypePlugins={[rehypeHighlight]} className="text-[#7376aa] p-0 m-0">{data.promt}</Markdown>}
                                    {data.prompttypeimage && <img src={data.promptimg[0]} className="w-72" />}
                                </div>
                                {data.promt < data.shortpromt && <div><button onClick={() => {handle_textshow(index)}} className="p-2 rounded-full bg-[#06060E] hover:bg-[#19193a]"><IoIosArrowDown /></button></div>}
                                {data.promt > data.shortpromt && <div><button onClick={() => {handle_textshow(index)}} className="p-2 rounded-full bg-[#06060E] hover:bg-[#19193a]"><IoIosArrowUp /></button></div>}
                            </div>
                            <div className="flex flex-col py-3 mb-10 rounded-lg px-6 bg-[#0F1021] my-3 text-[#7376aa]" style={{background: 'radial-gradient(80.40% 50.55% at 20.00% -5.29%, #555182, #0F1021, #0F1021)'}}>
                                <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mb-4">
                                    <div className="flex flex-row">
                                    <div className="flex my-auto p-2 bg-black rounded-full w-fit" >
                                        <img src={ROBOT} className="w-6 h-6" />
                                    </div>
                                    <p className="my-auto text-white mx-2">GenAI</p>
                                    </div>
                                    {data.chatresponse == false && <div className="flex flex-row w-full justify-center gap-2 p-2 my-auto">
                                <button className="py-2 px-3 bg-black rounded-lg text-white" onClick={() => {setSelectedTab('desktop')}} ><IoIosDesktop /></button>
                                <button className="py-2 px-3 bg-black rounded-lg text-white" onClick={() => {setSelectedTab('tab')}} ><IoIosTabletLandscape /></button>
                                <button className="py-2 px-3 bg-black rounded-lg text-white" onClick={() => {setSelectedTab('mobile')}} ><CiMobile3 /></button>
                                <button className="py-2 px-3 bg-black rounded-lg text-white" onClick={() => {setSelectedTab('code')}} ><FaCode /></button>
                                </div>}
                                </div>
                                <div className="flex flex-col w-full">
                                {data.response && data.chatresponse ? data.response.map((ddata) => {
                                    return (<div className="flex flex-row gap-2 my-2"><img src={ddata.state ? doneimg : loader1} className={`my-auto ${ddata.state? ``: `w-9`}`} /><p className="my-auto">{ddata.task}</p></div>)
                                }): <></>}
                                
                                {(data.chatresponse == false) && selectedTab != 'code' && <div className="flex p-0 overflow-hidden" style={{scrollbarWidth: 'none'}}><PreviewCus code={data.code} device={selectedTab} /></div>}
                                {data.chatresponse == false && selectedTab == 'code' && <div><CodeTabCus
                                        code={data.code}
                                        setCode={(code) => {
                                            promts.current[historydict.current[historyid === null ? 0 : historyid]].history[index].code = code
                                            forceUpdate()
                                        }}
                                        settings={settings}
                                    /></div>}
                                </div>
                            </div>
                            </div>)) :<></>}
                            


                            {appselection === SELECTION.IMAGE && appState === AppState.INITIAL && <div className="mt-2 flex flex-col justify-center items-center max-w-screen h-screen">
                                <ImageUploadV2 setReferenceImages={(data) => {
                                    setReferenceImages(data)
                                    if (promts.current && promts.current !== undefined && promts.current[historydict.current[historyid === null ? 0 : historyid]].history) {
                                        const obj = {
                                            chatresponse : false,
                                            promptimg : data,
                                            prompttypeimage : true,
                                            promt: '', code: '', response: [], shortpromt: ''
                                        }
                                        const historyidf = historyid === null ? 0 : historyid
                                        promts.current.unshift({history:[obj], id: 0})
                                    }
                                    else {
                                        const obj = {
                                        chatresponse : false,
                                        promptimg : data,
                                        prompttypeimage : true,
                                        promt: '', code: '', response: [], shortpromt: ''
                                        }
                                        promts.current = [{history:[obj], id: 0}];
                                    }
                                    forceUpdate()
                                    generatesite(data)
                                    }} />
                            </div>}
                            {appselection === SELECTION.ACCOUNT && <div className="w-full h-full pt-10">
                                <div className="flex flex-col py-3 mb-10 rounded-lg px-6 bg-[#0F1021] text-[#7064E9] h-full w-full mt-16 mx-10" style={{background: 'radial-gradient(80.40% 50.55% at 20.00% -5.29%, #555182, #0F1021, #0F1021)'}}>
                                    <div className="flex flex-row">
                                        <button className="p-3 bg-transparent border-b-2 border-[#7064E9]" >Profile</button>
                                    </div>
                                    <div className="flex flex-col pr-10 w-full mt-4">
                                        <div className="flex flex-row gap-4 justify-between">
                                            <div className="flex flex-col w-full gap-4">
                                                <div className="flex flex-col w-full">
                                                <p>Name</p>
                                                <input type="text" className="bg-transparent p-2 border-2 text-[#626DAA] w-full border-[#202028] active:outline-0 focus:outline-0 rounded-lg" value={userinfo.username}/>
                                                </div>
                                                <div className="flex flex-col w-full">
                                                <p>Email</p>
                                                <input type="text" className="bg-transparent p-2 border-2 text-[#626DAA] w-full border-[#202028] active:outline-0 focus:outline-0 rounded-lg" value={userinfo.email}/>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full gap-4">
                                                <div className="flex flex-col w-full">
                                                <p>Phone</p>
                                                <input type="text" className="bg-transparent p-2 border-2 text-[#626DAA] w-full border-[#202028] active:outline-0 focus:outline-0 rounded-lg" value={userinfo.phone}/>
                                                </div>
                                                <div className="flex flex-col w-full">
                                                <p>Plan</p>
                                                <input type="text" className="bg-transparent p-2 border-2 text-[#626DAA] w-full border-[#202028] active:outline-0 focus:outline-0 rounded-lg" value={userinfo.plan}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row w-full justify-between gap-4 mt-4">
                                            <div className="flex flex-col w-full">
                                                <p>Generation left</p>
                                                <input type="text" className="bg-transparent p-2 border-2 text-[#626DAA] w-full border-[#202028] active:outline-0 focus:outline-0 rounded-lg" value={userinfo.token.toFixed(0)}/>
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <p>Validity</p>
                                                <input type="text" className="bg-transparent p-2 border-2 text-[#626DAA] w-full border-[#202028] active:outline-0 focus:outline-0 rounded-lg" value={userinfo.validity}/>
                                            </div>
                                        </div>
                                        <div className="flex w-full h-fit justify-center items-center"><button
                                        className="flex flex-row w-full my-10 px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 justify-center text-white"
                                        ><p className="my-auto text-3xl"><IoIosLogOut /></p><p className="my-auto">Logout</p></button></div>
                                    </div>
                                </div>
                            </div> }
                            {appselection === SELECTION.NONE && <NoneSelection name={userinfo.username} updateselection={(data) => {setAppselection(data)}} />}
                            {appselection === SELECTION.URL && appState === AppState.INITIAL && <div className="mt-2 flex flex-col justify-center items-center max-w-screen h-screen overflow-hidden">
						<ScreenshortV2 cookie={cookiest} Generate={(data) => {
                            setReferenceImages(data)
                            if (promts.current && promts.current !== undefined && promts.current[historydict.current[historyid === null ? 0 : historyid]].history) {
                                const obj = {
                                    chatresponse : false,
                                    promptimg : data,
                                    prompttypeimage : true,
                                    promt: '', code: '', response: [], shortpromt: ''
                                }
                                const historyidf = historyid === null ? 0 : historyid
                                promts.current.unshift({history:[obj], id: 0})
                            }
                            else {
                                const obj = {
                                chatresponse : false,
                                promptimg : data,
                                prompttypeimage : true,
                                promt: '', code: '', response: [], shortpromt: ''
                                }
                                promts.current = [{history:[obj], id: 0}];
                            }
                            forceUpdate()
                            generatesite(data)
                            }} SetAppState={setAppState} />
					</div>}
                    {/* <p className="text-white">{step.current}</p> */}
                    </div>
                </div>
                {appselection !== SELECTION.ACCOUNT && <div className="relative w-full h-2 bg-[#06060E]">
                    <div className="absolute w-full bottom-0 bg-[#06060E]" style={{zIndex: 20}} onClick={() => {
                        if(appselection === SELECTION.GENI){
                            setdl(false)
                            setdr(false)
                            setAppselection(SELECTION.GENI)
                        }
                        }}>
                        <div className={!inputdisable?"flex bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-1 w-full rounded-2xl h-fit":"flex bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300 p-1 w-full rounded-2xl h-fit"} style={{height: (20*textrows)+50}}>
                            <div className={!inputdisable?'flex flex-row bg-[#0F1021] p-2 w-full rounded-xl gap-2 text-white my-auto mx-auto':'flex flex-row bg-[#454764] p-2 w-full rounded-xl gap-2 text-white my-auto mx-auto'} style={{height: (20*textrows)+40}}>
                                <textarea 
                                ref={textarearef} 
                                disabled={inputdisable} 
                                className={`flex bg-transparent active:outline-none focus:outline-none text:white placeholder:text-white w-full my-auto justify-center items-center`}
                                onKeyUp={handleKeyPress}
								onChange={(e) => {
                                    let ro = parseInt(((textarearef.current.scrollHeight-15)/20).toFixed(0))
                                    if(e.target.value.length < updateInstruction.length) {
                                        ro = parseInt((e.target.value.length/(textarearef.current.scrollWidth/10)).toFixed(0))
                                        ro = ro < 1 ? 1: ro;
                                    }
                                    console.log(textarearef.current.scrollHeight)
                                    console.log(ro)
                                    settextrows(ro > 5? 5: ro);
									setUpdateInstruction(e.target.value);
									updateresetvoice(true);
								}}
								value={conprev !== '' ? conprev : updateInstruction}
								style={{height: (20*textrows)+5, scrollbarWidth: 'none'}} 
								rows={5}
								cols={5}
                                placeholder={inputdisable?'':'Enter your prompt'}
								onMouseDown={() => {
									if (conprev !== '') {
									setUpdateInstruction(conprev)
									setconpre('')
									setMikeoff(true);
									}
								}} />
                                <div className="flex flex-row justify-end w-fit mt-auto pb-2" style={{height: 40}}>
                                    <p className="text-2xl my-auto mx-3"><GoPlusCircle /></p>
                                    <Voicerecignation setpromt={(data) => {
											if(!mikeoff){
											setconpre(updateInstruction+data)
											}
											}}
											mikeof={mikeoff}
											setresetvoice={(data) => {updateresetvoice(data)}}
											setmikeof={(data) => {setMikeoff(data)}}
                                            inputdisable={inputdisable}
                                            dark={false}
											/>
                                    <p ref={regenerate} className="text-2xl my-auto mx-2" onClick={() => {
                                        if (promts.current && promts.current !== undefined && promts.current[historydict.current[historyid === null ? 0 : historyid]].history) {
                                            const historyidf = historyid === null ? 0 : historyid
                                            promts.current[historydict.current[historyidf]].history.push({chatresponse : false,
                                            promptimg : null,
                                            promt : updateInstruction,
                                            prompttypeimage : false,
                                            shortpromt : updateInstruction,
                                            response : [],
                                            code : ''
                                            })

                                        }
                                        forceUpdate()
                                        doUpdate()
                                        settextrows(1)
                                        }} ><IoMdPaperPlane /></p>
                                </div>
                            </div>
                        </div>
                        {appState === AppState.INITIAL && <div className="flex flex-row my-2 w-full text-white justify-center gap-4">
                            <button className={`border-[#202028] border-2 py-1 rounded-lg px-2 hover:bg-[#7064E9] ${settings.generatedCodeConfig === GeneratedCodeConfig.HTML_TAILWIND?`bg-[#7064e9]`:``}`} onClick={() => {setSettings((prevSetting) => ({...prevSetting, generatedCodeConfig: GeneratedCodeConfig.HTML_TAILWIND}))}}>HTML</button>
                            <button className={`border-[#202028] border-2 py-1 rounded-lg px-2 hover:bg-[#7064E9] ${settings.generatedCodeConfig === GeneratedCodeConfig.REACT_TAILWIND?`bg-[#7064e9]`:``}`} onClick={() => {setSettings((prevSetting) => ({...prevSetting, generatedCodeConfig: GeneratedCodeConfig.REACT_TAILWIND}))}}>React</button>
                            <button className={`border-[#202028] border-2 py-1 rounded-lg px-2 hover:bg-[#7064E9] ${settings.generatedCodeConfig === GeneratedCodeConfig.BOOTSTRAP?`bg-[#7064e9]`:``}`} onClick={() => {setSettings((prevSetting) => ({...prevSetting, generatedCodeConfig: GeneratedCodeConfig.BOOTSTRAP}))}}>Bootstrap</button>
                            <button className={`border-[#202028] border-2 py-1 rounded-lg px-2 hover:bg-[#7064E9] ${settings.generatedCodeConfig === GeneratedCodeConfig.IONIC_TAILWIND?`bg-[#7064e9]`:``}`} onClick={() => {setSettings((prevSetting) => ({...prevSetting, generatedCodeConfig: GeneratedCodeConfig.IONIC_TAILWIND}))}}>Ionic</button>
                            </div>}
                        {appState !== AppState.INITIAL && <div className="w-full my-2"><p className="text-center text-[#626DAA]">Powered by Contessa & ExciteAI Limited</p></div>}
                    </div>
                </div>}
            </div>

            {appState === AppState.CODING && !mobile && <div className="relative p-2">
                <div className="fixed bottom-10 right-10 h-[500px] w-[390px] bg-[#191938] rounded-lg z-30">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="text-white uppercase text-sm text-center my-2 mx-auto">
						Reference website
					</div>
					<div
						className={classNames({
							"scanning relative h-[300px] overflow-auto": appState === AppState.CODING,
						})}
                        style={{scrollbarWidth: 'none'}}
					>
						<img
							className="w-[340px] border border-gray-200 rounded-md"
							src={referenceImages[0]}
							alt="Reference"
							/>
					</div>

                    {appState === AppState.CODING && <div className="w-full max:w-full"><CodePreview code={generatedCode} /></div>}
                    </div>
                </div>
            </div>}

            {/*genai && (<div className="flex flex-col bg-transparent w-[40%] h-screen pt-16">
                            <div className="flex flex-col w-full h-full justify-end items-center">
                                <div className="flex flex-col w-[90%] h-[87%] bg-[#2c2f5f] mx-4 mb-11 rounded-lg p-2">
                                    {botstate === CHATBOTSTATE.THINKING && <div className="flex flex-col w-full h-full bg-[#0F1021]">
                                        <div className="flex flex-row w-full p-0 mb-0 bg-[#2c2f5f] pl-4">
                                            <img src={Groot} className="w-12 h-12 mx-2 my-auto" />
                                            <p className="text-white text-lg my-auto">{"Planner"}</p>
                                        </div>
                                        <div className=" w-full h-full overflow-y-auto" style={{scrollbarColor: 'transparent', scrollbarWidth: 'none'}}>
                                            {<Markdown className="flex flex-col py-3 rounded-lg px-6 bg-[#0F1021] my-0 text-[#7376aa]">{step.current}</Markdown>}
                                        </div>
                                    </div>}
                                    {(botstate === CHATBOTSTATE.COADING || botstate === CHATBOTSTATE.BACKEND) && <div className="flex flex-col w-full h-full bg-[#0F1021]">
                                        <div className="flex flex-row w-full p-0 mb-0 bg-[#2c2f5f] pl-4">
                                            <img src={Groot} className="w-12 h-12 mx-2 my-auto" />
                                            <p className="text-white text-lg my-auto">{"Code Generator"}</p>
                                            <p className="text-white text-md mx-3 my-auto ">{file.current}</p>
                                        </div>
                                        <div ref={codeRef} className="w-full h-full overflow-auto max-h-full">
                                        <div className=" w-full h-fit overflow-visible" style={{overflow: 'visible'}}>
                                            <SyntaxHighlighter language="javascript" style={dracula} wrapLines={true} useInlineStyles={true} customStyle={{height: '100%', overflowX: 'hidden', scrollbarColor: 'transparent', scrollbarWidth: 'none'}} wrapLongLines={true} >
                                                {code.current}
                                            </SyntaxHighlighter>
                                        </div>
                                        </div>
                                    </div>}
                                    {botstate === CHATBOTSTATE.ASSETS && <div className="flex flex-col w-full h-full bg-[#0F1021]">
                                        <div className="flex flex-row w-full p-0 mb-0 bg-[#2c2f5f] pl-4">
                                            <img src={Groot} className="w-12 h-12 mx-2 my-auto" />
                                            <p className="text-white text-lg my-auto">{"Linking Assets"}</p>
                                        </div>
                                        <div ref={codeRef} className="flex w-full h-full overflow-y-auto" style={{scrollbarColor: 'transparent', scrollbarWidth: 'none'}}>
                                            {imgs.current?.length > 0 ? <img src={imgs.current[imgs.current.length-1]} className="w-3/4 h-1/2 my-auto mx-auto" /> : <></>}
                                        </div>
                                    </div>}
                                    {(botstate === CHATBOTSTATE.INITIAL || botstate == CHATBOTSTATE.UIUX) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
                                        <div><img src={ROBOT} className="w-32" /></div>
                                        <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{weddata === ''?'AI WEB DEVELOPER':''}</div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{weddata !== ''?'I am '+weddata:''}</div>
                                        </div>}
                                    {(botstate === CHATBOTSTATE.CONNECT) && <div className="flex flex-col w-full h-full bg-[#d5c2d6] justify-center items-center">
                                        <div><img src={ROBOT} className="w-32" /></div>
                                        <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">
                                            <TypeAnimation
                                                sequence={[
                                                    'I am connecting frontend and backend',
                                                    1000,
                                                    '',
                                                    1000,
                                                    'I am connecting frontend and backend',
                                                    1000,
                                                    '',
                                                    1000,

                                                ]}
                                                wrapper="span"
                                                speed={30}
                                                repeat={Infinity}
                                                />
                                        </div>
                                        <img src={connector} className="w-52" />
                                        </div>}
                                    {(botstate === CHATBOTSTATE.FINALTEST) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
                                        <div><img src={ROBOT} className="w-32" /></div>
                                        <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'AI WEB DEVELOPER'}</div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'I am testing everything'}</div>
                                        </div>}
                                    {(botstate === CHATBOTSTATE.SAVING) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
                                        <div><img src={ROBOT} className="w-32" /></div>
                                        <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'AI WEB DEVELOPER'}</div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'I am saving all your data'}</div>
                                        </div>}
                                    {(botstate === CHATBOTSTATE.ALLDONE) && <div className="flex flex-col w-full h-full bg-[#0F1021] justify-center items-center">
                                        <div><img src={ROBOT} className="w-32" /></div>
                                        <div className="flex flex-row text-lg text center text-white pt-2 mt-2 pb-0 mb-0"><p className="font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center">HI! I AM WED</p></div>
                                        <div className="text-lg text center text-[#2B45DC] py-0 m-0 h-fit">{'What do you want next'}</div>
                                        <div className="flex flex-row h-1/3 w-full justify-center items-center gap-2">
                                            <button className="p-2 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Deploy</button>
                                            <button className="p-2 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Customize</button>
                                        </div>
                                        </div>}
                                </div>

                            </div>
                                            </div>)*/}
            </div>
        </div>
    )
}