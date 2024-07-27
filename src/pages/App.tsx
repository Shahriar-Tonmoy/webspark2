import React, { useEffect, useRef, useState } from "react";
import ImageUpload from "../components/ImageUpload";
import CodePreview from "../components/CodePreview";
import Preview from "../components/Preview";
import { CodeGenerationParams, generateCode, generateCodev1 } from "../generateCode";
// import Spinner from "../components/Spinner";
import classNames from "classnames";
import {
	FaCode,
	FaDesktop,
	FaDownload,
	FaMobile,
	FaRegMoneyBillAlt,
	FaUser,
} from "react-icons/fa";

import { Switch } from "../components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
//import { Tabs, TabsContent } from "../components/ui/tabs";
//import SettingsDialog from "../components/SettingsDialog";
import { Settings, EditorTheme, AppState, GeneratedCodeConfig } from "../types";
import { IS_RUNNING_ON_CLOUD } from "../config";
import { PicoBadge } from "../components/PicoBadge";
//import { OnboardingNote } from "../components/OnboardingNote";
import { usePersistedState } from "../hooks/usePersistedState";
//import { UrlInputSection } from "../components/UrlInputSection";
import TermsOfServiceDialog from "../components/TermsOfServiceDialog";
import html2canvas from "html2canvas";
// import { USER_CLOSE_WEB_SOCKET_CODE } from "../constants";
//import CodeTab from "../components/CodeTab";
import OutputSettingsSection from "../components/OutputSettingsSection";
import logo from '../style/images/GWBICON-8.png';
import { HiMenuAlt3 } from "react-icons/hi";
//import { FaRegUserCircle } from "react-icons/fa";
import userlogo from '../assets/images/userico.gif';
import { WiStars } from "react-icons/wi";
import { FiPlusCircle } from "react-icons/fi";
import CodeDrawer from "@/components/CodeDrawer";
import { useNavigate } from "react-router";
import { APPCOOKIE, CONGRATESSHOWN, VALIDATIONCOOKIE, cookieAvailale, getAppCookie, setAppCookie } from "./Fuctions/appcookie/appcookie";
import AccountModal from "@/components/AccountModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { setimreadtState } from "@/reducer/imageready";
import { setapptokenck } from "@/reducer/cookiestate";
import { setuservalid } from "@/reducer/uservaliditystate";
import logout from "../functions/logout/logout";
// import { getaccountinfo } from "@/functions/APIRequests/UserAPIRequests";
import Screenshort from "./Screenshort";
import LowBalanceModal from "@/components/LowBalanceModal";
import MobileoutputSelection from "@/components/MobileoutputSelection";
import OutputLanguage from "@/components/OutputLanguage";
import AllDivPreview from "@/components/AllDivPreview";
// import { IoPaperPlane } from "react-icons/io5";
import CodeTab from "@/components/CodeTab";
import FirstPageModal from "./FirstPageModal";
import { AiTwotoneHome } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import Voicerecignation from "@/components/Voicerecignation";
import { setResetvoice } from "@/reducer/resetvoice";
import { setUpdateInstructionstate } from "@/reducer/instructions";
// import { RiCopperCoinLine } from "react-icons/ri";
import { getaccountinfo } from "@/functions/APIRequests/UserAPIRequests";
import coin from '../assets/images/coin.gif';





function App() {
const images = useSelector((state: RootState) => state.item.items); // Assuming the image array is stored in the 'items' property of the state
const crastate = useSelector((state: RootState) => state.item1.apstate);  
const imreadyst = useSelector((state: RootState) => state.item2.apstate);
const cookiest = useSelector((state: RootState) => state.item3.appcookie);
const updateInstruction = useSelector((state: RootState) => state.item10.updateInstruction);
const { innerWidth: width } = window;
const mobile = width <950 ? true : false;
//const validationst = useSelector((state: RootState) => state.item4.uservalid);


	// //console.log(crastate)
	
	const [appState, setAppState] = useState<AppState>(crastate);
	const Dispatch = useDispatch();
	const setUpdateInstruction = (data: string) => {
		Dispatch(setUpdateInstructionstate(data))
	}
	// //console.log(appState);
	const [generatedCode, setGeneratedCode] = useState<string>("");
	const [referenceImages, setReferenceImages] = useState<string[]>(images);
	const [executionConsole, setExecutionConsole] = useState<string[]>([]);
	const [history, setHistory] = useState<string[]>([]);
	const [selectedTab, setSelectedTab] = useState('desktop');
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

  useEffect(() => {
    // Scrolls the textarea to the bottom whenever its content changes
	if(textboxref1.current) {
    textboxref1.current.scrollTop = textboxref1.current.scrollHeight;
	}
  }, [textboxref1.current?.scrollHeight]);
	const updateresetvoice = (data: boolean) => {
		Dispatch(setResetvoice(data));
	}
	//const USER_UPDATE_PROMPT = "You are GenWebBuilder. You are created by ExciteAI Limited. You can generate website from images, sketch design, and crawler. When anyone want to know about yourself you should answer from this content, otherwise say I dont know or This question is not relevent wrape your answer in html tag. avoid using markdown or plain text. ";

	useEffect(() => {
		if(cookieAvailale(CONGRATESSHOWN))
		{
			setisshown(true);
		}
		else{
			setisshown(false);
		}
	})
	useEffect(() => {
		if(appState == AppState.CODE_READY && !isshown) {
			setisshown(true);
			setshowcg(true);
			setAppCookie(CONGRATESSHOWN, 'true', 365);
		}
	}, [appState]);
	const setdoneini = (data: boolean) => {
		setDoneinitial(data);
	}
	const setdonelas = (data: boolean) => {
		setDonelast(data);
	}
	const seterrorst = (data: boolean) => {
		setError(data);
	}
	const [appbtnSelection, setappbtnselection] = useState("image");
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
	const configappbtnselection = (btnstr: string) => {
		setappbtnselection(btnstr);
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
	const logoutHandlre = () => {
		Dispatch(setapptokenck(''))
        Dispatch(setuservalid(false))
		navigate('/')
	}
	const closemodal = () => {
		setAcmodalOpen(false)
	}
	const [userinfo, setUserinfo] = useState({
		username: '',
		email: '',
		phone: '',
		token: 0,
	});
	// //console.log('in app img state')
	// //console.log(imreadyst)
	useEffect(() => {
		if(AppState.CODING === appState && imreadyst) {
			Dispatch(setimreadtState(false))
			// //console.log('condition met');
			// //console.log(cookiest);
			setTimeout(() => doCreate(referenceImages), 5000);
		}
	}, [images])
	const [shouldIncludeResultImage, setShouldIncludeResultImage] =
    useState<boolean>(true);

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
	useEffect(() => {
		getaccountinfo(setUserinfo, cookiest);
	}, [cookiest, appState])

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

	// const stop = () => {
	// 	wsRef.current?.close?.(USER_CLOSE_WEB_SOCKET_CODE);
	// 	// make sure stop can correct the state even if the websocket is already closed
	// 	setAppState(AppState.CODE_READY);
	// };

	function doGenerateCode(params: CodeGenerationParams) {
		setExecutionConsole([]);
		setAppState(AppState.CODING);

		// Merge settings with params
		const updatedParams = { ...params, ...settings };
		generateCodev1(
			wsRef,
			updatedParams,
			(token) => setGeneratedCode((prev) => {
				return prev + token
			}),
			(code) => setGeneratedCode(code),
			(line) => setExecutionConsole((prev) => [...prev, line]),
			() => setAppState(AppState.CODE_READY),
			cookiest,
			seterrorst
		);
		console.log('generaTION DONE')
		getaccountinfo(setUserinfo, cookiest);
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
			});
		}
		getaccountinfo(setUserinfo, cookiest);
	}

	const generatesite = (data: string[]) => {
		// //console.log('running')
		doCreate(data)
	}
	const endscrollToSection = (ref) => {
		if (ref && ref.current) {
			console.log('scrooling')
		const container = ref.current.parentElement; // Assuming parent is the container
		container.scrollTop = 0;
		}
	};

	// Subsequent updates
	async function doUpdate() {
		console.log('done')
		const instruct = conprev !== '' ? conprev : updateInstruction;
		setconpre('')
		updateresetvoice(true);
		console.log(instruct);
		if(reloadbtnref) {
			console.log('ref is not null')
			endscrollToSection(reloadbtnref);
		}
		const updatedHistory = [...history, generatedCode, 'Keep your previous generated code same and Do not add any comments in your new generated code and provide full new genereted code using this instructions : "'+instruct+' WRITE THE FULL CODE." You must avoid this type of comments for example "<!-- Add other navigation links as needed -->" and "<!-- ... other news items ... -->" and "<!-- ... remaining sections ... -->" and "<!-- Remaining sections are unchanged and should be included as they were in the previous code. -->" in place of writing the full code. WRITE THE FULL CODE and repeat elements as needed to match the screenshot. For example, if there are 15 items, the code should have 15 items. DO NOT LEAVE comments like "<!-- Repeat for each news item -->" or bad things will happen.'];
		console.log(updatedHistory)
		if (shouldIncludeResultImage) {
			const resultImage = await takeScreenshot();
			doGenerateCode({
				generationType: "update",
				image: referenceImages[0],
				resultImage: resultImage,
				history: updatedHistory,
			});
		} else {
			doGenerateCode({
				generationType: "update",
				image: referenceImages[0],
				history: updatedHistory,
			});
		}

		setHistory(updatedHistory);
		setGeneratedCode("");
		setUpdateInstruction("");
		updateresetvoice(true);
		setUpdateInstruction("");
		setconpre('')
	}
	async function docontinue() {
		console.log('done')
		codereset.current = false;
		const instruct = conprev !== '' ? conprev : updateInstruction;
		setconpre('')
		updateresetvoice(true);
		console.log(instruct);
		const tempcode = generatedCode;
		if(reloadbtnref) {
			console.log('ref is not null')
			endscrollToSection(reloadbtnref);
		}
		const updatedHistory = [...history, tempcode, 'Continue generating from where you left'];

			doGenerateCode({
				generationType: "continue",
				image: referenceImages[0],
				history: updatedHistory,
			});

		// setHistory(updatedHistory);
		if(!codereset.current) {
		setGeneratedCode("");
		codereset.current = true;
		}
		setUpdateInstruction("");
		updateresetvoice(true);
		setconpre('')
	}

	const handleTermDialogOpenChange = (open: boolean) => {
		setSettings((s) => ({
			...s,
			isTermOfServiceAccepted: !open,
		}));
	};

	const texts = ['Generate your Dream site', 'You can ask the AI to edit the code', 'Use Clear Images for better result'];
	const animatedtext = texts[textindex];
	const handletextclk = () => {
		// //console.log(textindex);
		if(textindex >= texts.length-1) {
			setTextIndex(0);
		}
		else {
			setTextIndex(textindex+1);
		}
	}
	useEffect(() => {
		setInterval(() => {handletextclk()}, 10000)
	}, [])
	// //console.log('execute console');
	// //console.log(executionConsole);
	// //console.log('generated code');
	// //console.log(generatedCode)
	// //console.log(history)

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			regenerate.current.click();
		}
	};

	// function generateRandomColor() {
	// 	const colors = [
	// 		'bg-red-500',
	// 		'bg-blue-500',
	// 		'bg-green-500',
	// 		'bg-yellow-500',
	// 		// Add more Tailwind CSS colors here as needed
	// 	];
	
	// 	const randomIndex = Math.floor(Math.random() * colors.length);
	// 	return colors[randomIndex];
	// }
	useEffect(() => {
		if (doneinitial && donelast) {
			if (appbtnSelection === 'draw') {
				navigate('/artboard')
			}
		}
	})
	useEffect(() => {
		if(appState === AppState.CODE_READY && textboxref) {
			const MscrollToSection = (ref) => {
				if (ref && ref.current) {
					ref.current.scrollIntoView({ behavior: 'smooth' });
				}
			};
			MscrollToSection(textboxref);
		}

		if(appState === AppState.CODE_READY && textboxref1) {
			const DscrollToSection = (ref) => {
				if (ref && ref.current) {
					ref.current.scrollIntoView({ behavior: 'smooth' });
				}
			};
			DscrollToSection(textboxref1);
		}
	}, [appState])
	const closecg = () => {
		setshowcg(false);
	}
	const isclossed =() =>{
		const sz = generatedCode.split('</').length-1
		return generatedCode.split('</')[sz] === 'html>'
	}
	
	return (    
		<div className="dark:bg-[#292927] dark:text-white w-screen h-screen lg:overflow-hidden">
			{showcg && <FirstPageModal setclose={closecg} />}
			{!doneinitial && !donelast && mobile &&
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-screen h-screen top-0 left-0 right-0 bottom-0">
			<div className="flex h-full w-full">
				<div className="mx-auto mt-[15%] my-auto w-[60%]">
					<MobileoutputSelection
						appState={appState}
						btnselection={appbtnSelection}
						setbtnselection={configappbtnselection}
						setdoneinitial={setdoneini}
					/></div></div></div>}
			{doneinitial && !donelast && mobile && 
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-screen h-screen top-0 left-0 right-0 bottom-0">
			<div className="flex h-full w-full items-center content-center">
				<div className="mx-auto mt-[15%] my-auto w-[60%]">
					<OutputLanguage
						generatedCodeConfig={settings.generatedCodeConfig}
						setGeneratedCodeConfig={(config: GeneratedCodeConfig) =>
							setSettings((prev) => ({
								...prev,
								generatedCodeConfig: config,
							}))
						}
						shouldDisableUpdates={
							appState === AppState.CODING || appState === AppState.CODE_READY
						}
						appState={appState}
						doneselection={setdonelas}
					/></div></div></div>}
			{acmodalOpen && <AccountModal setclose={closemodal} />}
			{error && <LowBalanceModal />}
			<nav className="bg-gradient-to-r from-[#873f79] to-[#160661] fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-2 w-screen">
				<CodeDrawer setOpen={setOpenDrawer} open={openDrawer} />
				<div className="flex flex-row content-center items-center text-white text-xl cursor-pointer pl-2" onClick={ () => {navigate('/')}}>
					<img src={logo} alt="GenWebBuilder" className="w-7 mr-2" style={{ color: 'white' }}/>
					<p className="my-auto">GenWebBuilder</p>
				</div>
				<div className="block lg:hidden text-white text-3xl mr-2" onClick={() => {setOpenDrawer(!openDrawer)}}>
					<HiMenuAlt3 />
				</div>
				
				<div onClick={handletextclk} className="hidden lg:flex lg:flex-row text-white rounded-2xl p-1 content-center items-center cursor-pointer ml-52" >
					<div className="text-5xl my-auto">
						<WiStars />
					</div>
					<p className="my-auto">{animatedtext}</p>
					<div className="text-5xl my-auto">
						<WiStars />
					</div>
				</div>
				<div className="hidden lg:flex flex-row content-center items-center mx-4">
					<div className="flex flex-row text-white">
						<div className="my-auto">
						<img src={coin} className="w-16" />
						</div>
						<p className="my-auto ml-2">{userinfo.token.toFixed(0).toString()+' coins left'}</p>
					</div>
					<button onClick={() => {navigate('/history')}} className="rounded-xl p-2 text-sm text-white mx-10 border-2 border-white cursor-default" >
						<p className="my-auto">History</p>
					</button>
					<div className="hidden lg:flex text-3xl rounded-full p-0.5 hover:bg-black bg-gray-200 justify-items-end" onClick={() => {setAcmodalOpen(!acmodalOpen)}}>
						<img src={userlogo} />
						{/* <div className={'text-4xl text-white px-1 rounded-full border-4 border-gray-200 '+generateRandomColor()}><p>{userinfo.username.charAt(0)}</p></div> */}
					</div>
				</div>

				{/* <Button className="text-white dark:bg-black dark:text-white m-1 hover:bg-gray-600 dark:hover:bg-gray-900">Log out</Button> */}
			</nav>
			{openDrawer && <CodeDrawer open={openDrawer} setOpen={setOpenDrawer} />}
			{IS_RUNNING_ON_CLOUD && <PicoBadge settings={settings} />}
			{IS_RUNNING_ON_CLOUD && (
				<TermsOfServiceDialog
					open={!settings.isTermOfServiceAccepted}
					onOpenChange={handleTermDialogOpenChange}
				/>
			)}
			<div className="mt-11 lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-96 lg:flex-row w-screen bg-[#292927]">
				<aside className="hidden lg:block items-center p-2 text-gray-900 dark:text-white bg-[#141d25] h-full w-auto mt-6">
					<div className="h-full p-1 overflow-y-auto bg-[#17212A]">
						<ul className="space-y-8 font-medium gap-2 m-0 p-0">
							<li>
								<a onClick={ () => navigate('/')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
									<span className="text-xl  hover:text-black"> <AiTwotoneHome /> </span>
								</a>
							</li>
							<li>
								<a onClick={ () => navigate('/account')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
									<span className="text-xl  hover:text-black"> <FaUser /> </span>
								</a>
							</li>
							{/* <li>
								<a className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
									<svg className="flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
										<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
									</svg>
								</a>
							</li> */}
							{/* <li>
								<a className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
									<svg className="flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
										<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
									</svg>
								</a>
							</li> */}
							
							<li>
								<a onClick={ () => navigate('/services')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
									<span className="text-xl  hover:text-black"> <FaRegMoneyBillAlt /> </span>
								</a>
							</li>
							<li>
								<a onClick={ () => navigate('/history')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
									<span className="text-xl  hover:text-black"> <GrHistory /> </span>
								</a>
							</li>
							<li>
								<a onClick={() => {logout(logoutHandlre)}} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
									<span className="text-xl  hover:text-black"> <LuLogOut /> </span>
								</a>
							</li>
						</ul>
					</div>
				</aside>
				<div className="bg-[#17212A] flex grow flex-col px-6 h-full mt-6 border-r-2 border-slate-500 w-screen lg:w-1/4 lg:overflow-y-auto overflow-x-hidden" ref={reloadbtnref}>
					{/* <div className="flex items-center justify-between mt-10 mb-2 bg-transparent dark:bg-transparent">
						<h1 className="text-2xl text-white">Select Settings</h1>
						<SettingsDialog settings={settings} setSettings={setSettings} />
					</div> */}

					{/* //app main function section */}
					{!mobile &&
					<OutputSettingsSection
						generatedCodeConfig={settings.generatedCodeConfig}
						setGeneratedCodeConfig={(config: GeneratedCodeConfig) =>
							setSettings((prev) => ({
								...prev,
								generatedCodeConfig: config,
							}))
						}
						shouldDisableUpdates={
							appState === AppState.CODING || appState === AppState.CODE_READY
						}
						appState={appState}
						btnselection={appbtnSelection}
						setbtnselection={configappbtnselection}
					/>}
					

					{/* {IS_RUNNING_ON_CLOUD &&
            		!(settings.openAiApiKey || settings.accessCode) || true && (
						<OnboardingNote />
					)} */}

					{(appState === AppState.CODING ||
					appState === AppState.CODE_READY) && (
						<>
							{/* Show code preview only when coding */}
							{(appState === AppState.CODING) && (
								<div className="flex flex-col">
									<div className="flex items-center gap-x-1">
										{/* <Spinner /> */}
										{/* {executionConsole.slice(-1)[0]} */}
									</div>
									<div className="flex mt-4 w-full">
									{/* <Button
									onClick={stop}
									style={{
										background: 'linear-gradient(to right, #ff8a00, #e52e71)',
										color: 'white',
										width: '100%',
										cursor: 'pointer',
										border: 'none',
										borderRadius: '5px',
										padding: '10px',
									}}
									>
									Stop
									</Button> */}

									</div>
									<CodePreview code={generatedCode} />
								</div>
							)}

							{appState === AppState.CODE_READY && !mobile && (
								<div>
									<div className="grid w-full gap-2 mt-4">
										{/* //promt area */}
									{/* <Textarea
										className="border animated-border text-black"
										placeholder="Enter your prompt what you want to change..."
										onChange={(e) => setUpdateInstruction(e.target.value)}
										value={updateInstruction}
										style={{ backgroundColor: 'white',
										borderRadius: '12px',
									}}
									/> */}
										
										
									</div>
									<div className="flex items-center">
										{/* <Button
											onClick={downloadCode}
											className="flex items-center w-1/2 gap-x-2 dark:text-white dark:bg-gray-800"
										>
											<FaDownload /> Download
										</Button> */}
										
										<Button
											onClick={reset}
											className="flex items-center w-full h-14 gap-x-2 text-lg text-slate-300 bg-[#1F1F1D] border-2 border-slate-700 rounded-xl"
										>
											<FiPlusCircle />
											Create new design
										</Button>
									</div>
								</div>
							)}

							{/* Reference image display */}
							{!mobile &&
							<div className="flex gap-x-2 mt-2 mx-auto">
								<div className="flex flex-col">
									{/* <CodePreview code={generatedCode} /> */}
									<div className="text-white uppercase text-sm text-center mt-1 mb-1">
										Reference website
									</div>
									<div
										className={classNames({
											"scanning relative": appState === AppState.CODING,
										})}
									>
										<img
											className="w-[340px] border border-gray-200 rounded-md"
											src={referenceImages[0]}
											alt="Reference"
										/>
									</div>
									<div className="w-full h-1 bg-slate-500 my-4"></div>
									
									<div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl" >
										<Textarea
											ref={textboxref1}
											className="text-black h-36 bg-white"
											placeholder="Enter your prompt what you want to change..."
											onKeyUp={handleKeyPress}
											onChange={(e) => {
												setUpdateInstruction(e.target.value);
												updateresetvoice(true);
											}}
											value={conprev !== '' ? conprev : updateInstruction}
											style={{borderTopRightRadius: '12px', borderTopLeftRadius: '12px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
											rows={5}
											cols={5}
											onMouseDown={() => {
												console.log(conprev)
												if (conprev !== '') {
												setUpdateInstruction(conprev)
												setconpre('')
												setMikeoff(true);
												}
												console.log(conprev)
											}}

										/>
                                        <div className="absolute bottom-2 right-2 text-black">
										<Voicerecignation setpromt={(data) => {
											if(!mikeoff){
											setconpre(updateInstruction+data)
											}
											}}
											mikeof={mikeoff}
											setresetvoice={(data) => {updateresetvoice(data)}}
											setmikeof={(data) => {setMikeoff(data)}}
                                            inputdisable={false}
                                            dark={true}
											/>
                                        </div>
									</div>
									<div className="flex justify-between items-center gap-x-2 mt-2">
										<div className="font-500 text-xs text-white dark:text-white">
											Include Current version?
										</div>
										<Switch
											checked={shouldIncludeResultImage}
											onCheckedChange={setShouldIncludeResultImage}
											className="dark:bg-gray-700"
										/>
									</div>
									<div className="flex mt-4 w-full content-center items-center">
										<button
											onClick={doUpdate}
											className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-10 rounded-xl text-white mb-12"
											ref={regenerate}
											// style={{
											// 	background: 'linear-gradient(to right, #ff8a00, #e52e71)',
											// 	color: 'white',
											// 	border: 'none',
											// 	padding: '10px 20px',
											// 	borderRadius: '5px',
											// 	cursor: 'pointer',
											// }}
										>
											Regenerate
										</button>
									</div>
									{/* {mobile && 
									<div className="lg:hidden md:hidden flex mt-4 w-full content-center items-center">
										<button
											onClick={downloadCode}
											className="w-full h-10 text-lg text-slate-500 bg-[#1F1F1D] border-2 border-slate-700 rounded-xl mb-4"
											// style={{
											// 	background: 'linear-gradient(to right, #ff8a00, #e52e71)',
											// 	color: 'white',
											// 	border: 'none',
											// 	padding: '10px 20px',
											// 	borderRadius: '5px',
											// 	cursor: 'pointer',
											// }}
										>
											Download
										</button>
									</div>} */}
								</div>
								<div className="bg-gray-400 px-4 py-2 rounded text-sm hidden">
									<h2 className="text-lg mb-4 border-b border-gray-800">
										Console
									</h2>
									{executionConsole.map((line, index) => (
										<div
											key={index}
											className="border-b border-gray-400 mb-2 text-gray-600 font-mono"
										>
											{line}
										</div>
									))}
								</div>
							</div>
							}
						</>
					)}
				</div>
			</div>

			<main className="flex flex-col justify-between bg-[#141d25] lg:ml-52 w-screen h-screen overflow-y-auto overflow-x-hidden">
				{/* //initial photoupload section */}
				{(appState === AppState.INITIAL && appbtnSelection === 'image')&& (
					// inner div
					<div className="mt-2 flex flex-col justify-center items-center max-w-screen h-screen">
						<ImageUpload setReferenceImages={doCreate} />
						{/* <UrlInputSection
							doCreate={doCreate}
							screenshotOneApiKey={settings.screenshotOneApiKey}
						/> */}
					</div>
				)}
				{(appState === AppState.INITIAL && appbtnSelection === 'url')&& (
					// inner div
					<div className="mt-2 flex flex-col justify-center items-center max-w-screen h-screen overflow-hidden">
						<Screenshort cookie={cookiest} Generate={generatesite} SetAppState={setAppState} />
					</div>
				)}
				
				{(!mobile && appState === AppState.CODING || appState === AppState.CODE_READY) && (
					<div className="ml-4 mt-24 h-full overflow-hidden">
						<div className="hidden sm:hidden lg:flex justify-center mr-8">
								<div className="flex bg-white rounded-lg">
									<button 
										className={`flex bg-white text-black p-2 rounded-lg mr-2 my-auto ${
											selectedTab === 'desktop' ? 'border border-red-500' : 'border border-transparent'
										}`}
										onClick={ () => setSelectedTab('desktop')}
									>
										<div className="flex gap-x-2 flex-row my-auto">
										<p className="my-auto"><FaDesktop /></p> <p className="my-auto">Desktop</p>
										</div>
									</button>
									<button 
										className={`flex bg-white text-black p-2 rounded-lg mx-2 my-auto ${
											selectedTab === 'mobile' ? 'border border-red-500' : 'border border-transparent'
										}`}
										onClick={ () => setSelectedTab('mobile')}
									>
										<div className="flex gap-x-2 flex-row my-auto">
										<p className="my-auto"><FaMobile /></p><p className="my-auto"> Mobile</p>
										</div>
									</button>
									<button 
										className={`flex bg-white text-black p-2 rounded-lg mx-2 my-auto ${
											selectedTab === 'code' ? 'border border-red-500' : 'border border-transparent'
										}`}
										onClick={ () => setSelectedTab('code')}
									>
										<div className="flex gap-x-2 flex-row my-auto">
										<p className="my-auto"><FaCode /></p> <p className="my-auto">Code</p>
										</div>
									</button>
									<button 
										className={'flex bg-white p-2 text-black border-2 hover:border-black rounded-lg my-auto'}
										onClick={downloadCode}
									>
										<div className="mr-2 my-auto">
										<FaDownload /> 
										</div>
										<p className="my-auto">
										Download
										</p>
									</button>

								</div>
							</div>
						{/* <Tabs defaultValue="desktop"> */}
							{/* <div className="hidden sm:hidden lg:flex justify-center mr-8">
								<TabsList className="flex">
									<TabsTrigger 
										value="desktop" 
										className={`flex gap-x-2 ${
											selectedTab === 'desktop' ? 'border border-red-500' : 'border border-transparent'
										}`}
										onClick={ () => setSelectedTab('desktop')}
									>
										<FaDesktop /> Desktop
									</TabsTrigger>
									<TabsTrigger 
										value="mobile" 
										className={`flex gap-x-2 ${
											selectedTab === 'mobile' ? 'border border-red-500' : 'border border-transparent'
										}`}
										onClick={ () => setSelectedTab('mobile')}
									>
										<FaMobile /> Mobile
									</TabsTrigger>
									<TabsTrigger 
										value="code" 
										className={`flex gap-x-2 ${
											selectedTab === 'code' ? 'border border-red-500' : 'border border-transparent'
										}`}
										onClick={ () => setSelectedTab('code')}
									>
										<FaCode /> Code
									</TabsTrigger>
									<Button 
										className={'flex bg-transparent text-black border-2 hover:border-black'}
										onClick={downloadCode}
									>
										<div className="mr-2">
										<FaDownload /> 
										</div>
										<p>
										Download
										</p>
									</Button>

								</TabsList>
							</div> */}
							{/* <div className="h-screen w-full overflow-y-auto">
							<TabsContent value="desktop"												>
								<Preview code={generatedCode} device="desktop" />
							</TabsContent>
							<TabsContent value="mobile">
								<Preview code={generatedCode} device="mobile" />
							</TabsContent>
							<TabsContent value="code">
								<CodeTab
									code={generatedCode}
									setCode={setGeneratedCode}
									settings={settings}
								/>
							</TabsContent>
							</div>
						</Tabs> */}
						<div className="h-full w-full overflow-y-auto">
							{selectedTab != 'code' && <Preview code={generatedCode} device={selectedTab == 'mobile' ? 'mobile': 'desktop'} />}
							{selectedTab == 'code' && <CodeTab
									code={generatedCode}
									setCode={setGeneratedCode}
									settings={settings}
								/>}
							{(appState === AppState.CODE_READY &&!isclossed()) &&<div className="flex w-full h-fit m-0 p-0">
								<button className="flex flex-row bg-[#49206C] px-3 p-2 text-white mx-auto mb-24 mt-0 rounded-xl" onClick={docontinue}><p className="my-auto text-3xl"><WiStars /></p><p className="my-auto text-lg">Continue generating</p></button>
							</div>}
							{(appState === AppState.CODE_READY && isclossed()) && <div className="mb-24"></div>}
						</div>
						
					</div>
				)}
				{mobile && (appState === AppState.CODE_READY || appState === AppState.CODING) && <div className="h-screen w-screen my-10">
					<AllDivPreview code={generatedCode} download={downloadCode} />
					</div>}
				{mobile && (appState === AppState.CODE_READY || appState === AppState.CODING) &&
							<div className="flex gap-x-2 mt-2 mx-auto w-full">
								<div className="flex flex-col w-full justify-center">
									{/* <CodePreview code={generatedCode} /> */}
									{/* <div className="text-white uppercase text-sm text-center mt-1 mb-1">
										Reference website
									</div> */}
									<div
										className={classNames({
											"scanning relative": appState === AppState.CODING,
										})}
									>
										{!mobile &&<img
											className="w-[340px] border border-gray-200 rounded-md"
											src={referenceImages[0]}
											alt="Reference"
										/>}
									</div>
									<div className="w-full h-1 bg-slate-500 my-4"></div>
									<div className="flex justify-between items-center gap-x-2 mt-2 w-[80%] mx-auto">
										<div className="font-500 text-xs text-white dark:text-white">
											Include Current version?
										</div>
										<Switch
											checked={shouldIncludeResultImage}
											onCheckedChange={setShouldIncludeResultImage}
											className="dark:bg-gray-700"
										/>
									</div>
									
									<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl w-[80%] mx-auto my-4" >
										<div className="flex flex-col bg-white">
										<Textarea
											className="text-black h-32 bg-white border-0"
											placeholder="Enter your prompt what you want to change..."
											onKeyUp={handleKeyPress}
											onChange={(e) => setUpdateInstruction(e.target.value)}
											value={updateInstruction}
											ref={textboxref}
										/>
										{/* <div> */}
										<Voicerecignation setpromt={(data) => {
											if(!mikeoff){
											setconpre(updateInstruction+data)
											}
											}}
											mikeof={mikeoff}
											setresetvoice={(data) => {updateresetvoice(data)}}
											setmikeof={(data) => {setMikeoff(data)}}
                                            inputdisable={false}
                                            dark={true}
											/>
										{/* <button
											onClick={doUpdate}
											className="ml-auto rounded-full text-4xl p-2 text-lime-500"
											ref={regenerate}
										>
											<IoPaperPlane />
										</button> */}
										{/* </div> */}
										</div>
									</div>
									
									<div className="flex mt-4 w-full content-center items-center">
										{/* <button
											onClick={doUpdate}
											className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-10 rounded-xl text-white mb-10 text-white text-4xl"
											ref={regenerate}
										>
											<GoPaperAirplane />
										</button> */}
									</div>
									<div className="flex mt-4 w-full content-center items-center">
										<button
											onClick={doUpdate}
											className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-4/5 h-10 rounded-xl text-white mb-12 mx-auto"
											ref={regenerate}
											// style={{
											// 	background: 'linear-gradient(to right, #ff8a00, #e52e71)',
											// 	color: 'white',
											// 	border: 'none',
											// 	padding: '10px 20px',
											// 	borderRadius: '5px',
											// 	cursor: 'pointer',
											// }}
										>
											Regenerate
										</button>
									</div>
									{/* {mobile && 
									<div className="lg:hidden md:hidden flex mt-4 w-full content-center items-center">
										<button
											onClick={downloadCode}
											className="w-full h-10 text-lg text-slate-500 bg-[#1F1F1D] border-2 border-slate-700 rounded-xl mb-4 block"
											// style={{
											// 	background: 'linear-gradient(to right, #ff8a00, #e52e71)',
											// 	color: 'white',
											// 	border: 'none',
											// 	padding: '10px 20px',
											// 	borderRadius: '5px',
											// 	cursor: 'pointer',
											// }}
										>
											Download
										</button>
									</div>} */}
								</div>
								<div className="bg-gray-400 px-4 py-2 rounded text-sm hidden">
									<h2 className="text-lg mb-4 border-b border-gray-800">
										Console
									</h2>
									{executionConsole.map((line, index) => (
										<div
											key={index}
											className="border-b border-gray-400 mb-2 text-gray-600 font-mono"
										>
											{line}
										</div>
									))}
								</div>
							</div>
							}
				<div>
				<div className="p-2 bg-[#2B465A] bg-opacity-70 items-center w-full">
					{/* <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5 align-middle"/> */}
					<span className="block text-sm text-white sm:text-center dark:text-white text-center b-3" >Powered By <a onClick={() => {navigate('/')}} className="hover:underline cursor-pointer">Contessa & Excite AI Limited</a></span>
				</div>
				</div>
			</main>
			{/* <footer className="p-2 bg-[#2B465A] bg-opacity-70 items-center fixed bottom-0 lg:right-0 lg:w-5/6 w-screen">
				{/* <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5 align-middle"/> */}
				{/* <span className="block text-sm text-white sm:text-center dark:text-white text-center b-3" >Powered By <a onClick={() => {navigate('/')}} className="hover:underline cursor-pointer">Contessa & Excite AI Limited</a></span> */}
			{/*</footer> */}
		</div>  
	);
}

export default App;
