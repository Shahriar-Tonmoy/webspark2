import { useEffect, useState } from "react";
//import useThrottle from "../hooks/useThrottle";
import React from "react";
import { getHistory } from "@/functions/APIRequests/UserAPIRequests";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setapptokenck } from "@/reducer/cookiestate";
import { setuservalid } from "@/reducer/uservaliditystate";
import { APPCOOKIE, VALIDATIONCOOKIE, getAppCookie } from "./Fuctions/appcookie/appcookie";
import classNames from "classnames";
//import { LuDownload } from "react-icons/lu";
import CodeDrawer from "@/components/CodeDrawer";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from '../assets/images/glogo.svg'
import userlogo from '../assets/images/userico.gif';
import { PicoBadge } from "@/components/PicoBadge";
import TermsOfServiceDialog from "@/components/TermsOfServiceDialog";
import { IS_RUNNING_ON_CLOUD } from "@/config";
import { Settings, EditorTheme, GeneratedCodeConfig } from "../types";
import { usePersistedState } from "@/hooks/usePersistedState";
import AccountModal from "@/components/AccountModal";
import { useNavigate } from "react-router";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { WiStars } from "react-icons/wi";
// import useThrottle from "../hooks/useThrottle";

type historytype = {history: [{ code: string; ts: string}]; page: number; prev: number; fow: number}
function HistoryPreview() {
    const navigate = useNavigate()
    const [openDrawer, setOpenDrawer] = useState(false);
    
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
    useEffect(() => {
		if (!settings.generatedCodeConfig) {
			setSettings((prev) => ({
				...prev,
				generatedCodeConfig: GeneratedCodeConfig.HTML_TAILWIND,
			}));
		}
	}, [settings.generatedCodeConfig, setSettings]);
    const handleTermDialogOpenChange = (open: boolean) => {
		setSettings((s) => ({
			...s,
			isTermOfServiceAccepted: !open,
		}));
	};
    
    const [acmodalOpen, setAcmodalOpen] = useState(false);
    const closemodal = () => {
        setAcmodalOpen(false)
    }

    const dispatch = useDispatch();
	const cookiest = useSelector((state: RootState) => state.item3.appcookie);
    const [history, setHistory] = useState<historytype>(null);
    const [page, setPage] = useState(1);
    const getallhistory = (data: historytype) => {
        setHistory(data)
    }
    useEffect(() => {
        //console.log('requesting');
        if(cookiest !== '') {
        getHistory(getallhistory, cookiest, page)
        }
    }, [cookiest, page])
    useEffect(() => {
        dispatch(setapptokenck(getAppCookie(APPCOOKIE)))
        dispatch(setuservalid(getAppCookie(VALIDATIONCOOKIE) === 'true' ? true : false))
    }, [])
    const device = "desktop" || "mobile"

    const renderHistory = () => {
        //console.log(history);
        if (history !== null && history !== undefined && history.history.length > 0) {
            return history.history.map((value, index) => {
                const datetime = new Date(value.ts)
                const downloadCode = () => {
                    // Create a blob from the generated code
                    const blob = new Blob([value.code], { type: "text/html" });
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

                return (
                    <div key={index} className="w-full justify-center">
                        <div className="flex">
                            <button className="w-[90.3%] bg-black text-white mx-auto px-4 py-2 text-center flex justify-between">
                                <span>{datetime.toLocaleDateString()}</span>
                                <span>{datetime.toLocaleTimeString()}</span>
                            </button>
                            {/* <button className="bg-slate-400 text-2xl p-2 rounded-full ml-[-48px]" onClick={downloadCode}>
                                <LuDownload />
                            </button> */}
                        </div>
                        {/* <div className="flex justify-end rounded-xl mb-[-34px] scale-[0.9] w-full">
                            <button className="bg-slate-400 text-2xl p-2 rounded-full" onClick={downloadCode}>
                                <LuDownload />
                            </button>
                        </div> */}
                        <iframe
                            title="Preview"
                            className={classNames(
                                "border-[4px] border-black rounded-[20px] shadow-lg",
                                "transform scale-[0.9] mt-2",
                                {
                                    "w-full h-[832px]": device === "desktop",
                                    "w-[400px] h-[832px]": device === "mobile"
                                }
                            )}
                            srcDoc={value.code}
                        ></iframe>
                        <div className="flex flex-row justify-center mb-2 lg:mx-14">
                            {/* <span className="ml-4 font-semibold">{datetime.toLocaleDateString()}</span> */}
                            <button 
                                onClick={downloadCode} 
                                className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 hover:from-indigo-500 to-pink-500 hover:to-pink-400"
                            >Download</button>
                            
                            {/* <span className="mr-4 font-semibold">{datetime.toLocaleTimeString()}</span> */}
                        </div>
                        <hr className="my-2 mt-4 mx-5 mb-4 border-[2px] border-solid border-slate-300 sm:mx-auto lg:my-5 align-middle"/>
                    </div>
                );
            });
        } else {
            return <h1 className="text-center w-full">No History available</h1>;
        }
    };
    // <WiStars />
	return (
		<body className="bg-slate-200 h-full w-full overflow-x-hidden">
            {acmodalOpen && <AccountModal setclose={closemodal} />}
            <nav className="bg-gradient-to-r from-[#873f79] to-[#160661] fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-2 w-screen">
				<CodeDrawer setOpen={setOpenDrawer} open={openDrawer} />
				<div className="flex flex-row content-center items-center text-white text-sm lg:text-xl cursor-pointer" onClick={ () => {navigate('/')}}>
					<img src={logo} alt="GenWebBuilder" className="w-24 lg:w-32 mr-2" style={{ color: 'white' }}/>
				</div>
				<div className="block lg:hidden text-white text-3xl mr-2" onClick={() => {setOpenDrawer(!openDrawer)}}>
                    <HiMenuAlt3 />
				</div>
				<a className="mx-64 text-center text-white mt-2 fixed right-0 left-0 top-1 font-bold lg:text-3xl text-md hidden lg:block">
                    Previous Generation History
                </a>
				<div className="hidden lg:flex lg:flex-row content-center items-center mx-4">
					<button className="rounded-xl p-2 text-sm text-white mx-10 border-2 border-black cursor-pointer" onClick={ () => {navigate('/code')}}>
						Back to Code
					</button>
					<div className="hidden lg:flex text-3xl rounded-2xl w-20 bg-[#BA51DD] justify-items-end" onClick={() => {setAcmodalOpen(!acmodalOpen)}}>
						<img src={userlogo} />
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

            <div className="flex flex-wrap justify-between overflow-y-auto mt-20">
                {renderHistory()}
            </div>
            {(history !== null && history !== undefined && history.history.length > 0) && <div className="flex justify-center">
            <ul className="inline-flex -space-x-px text-base h-10">
            {history.prev != null && <><li>
              <a onClick={() => {setPage(page > 0 ? page-1 : page)}} className="flex items-center justify-center p-2 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">Previous</a>
            </li>
            <li>
              <a onClick={() => {setPage(page > 0 ? page-1 : page)}} className="flex items-center justify-center p-2 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">{history.prev}</a>
            </li></>}
            <li>
              <a aria-current="page" className="flex items-center justify-center p-2 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">{history.page}</a>
            </li>
            {history.fow != null && <><li>
              <a onClick={() => {setPage(page+1)}} className="flex items-center justify-center p-2 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">{history.fow}</a>
            </li>
            <li>
              <a onClick={() => {setPage(page+1)}} className="flex items-center justify-center p-2 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">{" Next  "}</a>
            </li></>}
          </ul>
          </div>
            }
        </body>
	);
}

export default HistoryPreview;