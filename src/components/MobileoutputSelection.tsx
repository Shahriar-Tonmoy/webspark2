// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectTrigger,
// } from "./ui/select";
import React from "react";
import { AppState } from "../types";
import { FaRegImage } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { GiHalfBodyCrawling } from "react-icons/gi";
//import { useNavigate } from "react-router";
// import { SiHtml5 } from "react-icons/si";
// import { SiTailwindcss } from "react-icons/si";



interface Props {
  appState: AppState;
  btnselection: string;
  setbtnselection: (string) => void;
  setdoneinitial: (boolean) => void;
}

function MobileoutputSelection({
	appState,
	btnselection,
	setbtnselection,
    setdoneinitial
}: Props) {
	//const navigate = useNavigate();
	return (
		<div className={ (appState == AppState.INITIAL) ? "flex flex-col justify-between text-sm mt-4 my-auto":"hidden"}>

			{appState == AppState.INITIAL && <div className="text-white">
				{/* <span>Select your generation canvas: </span> */}
				<div className="gap-2 justify-between">
					<button 
						value = "image" 
						className={`flex flex-row justify-center hover:bg-[#ECF0F3] hover:text-[#07273D] m-1 p-3 w-full rounded outline-0 border-2 border-slate-500 active:border-0 active:outline-0 focus:border-0 focus:outline-0 ${
							btnselection === "image" ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner shadow-foreground border-0 outline-0" : "bg-[#141D25]"
						}`}
						onClick={ () => {
                            setbtnselection("image");
                            setdoneinitial(true);
                            }}>
							<div className="my-auto text-xl mr-2">
						<FaRegImage />
						</div>
						<p className="my-auto">From Image</p>
					</button>
					<button 
						value = "draw"
						className={`flex flex-row justify-center hover:bg-[#ECF0F3] hover:text-[#07273D] m-1 p-3 w-full rounded outline-0 border-2 border-slate-500 active:border-0 active:outline-0 focus:border-0 focus:outline-0 ${
							btnselection === "draw" ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner shadow-foreground" : "bg-[#141D25]"
						}`}
						onClick={ () => {
							setbtnselection("draw");
							setdoneinitial(true);
							}}>
							<div className="my-auto text-xl mr-2">
							<LuPencilLine />
							</div>
						<p className="my-auto"> From Sketch </p>
					</button>
					<button 
						value = "url" 
						className={`flex flex-row justify-center hover:bg-[#ECF0F3] hover:text-[#07273D] m-1 p-3 w-full rounded outline-0 border-2 border-slate-500 active:border-0 active:outline-0 focus:border-0 focus:outline-0 ${
							btnselection === "url" ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner shadow-foreground border-0 outline-0" : "bg-[#141D25]"
						}`}
						onClick={ () => {
							setbtnselection("url")
                            setdoneinitial(true)
							}}>
							<div className="my-auto text-xl mr-2">
								<GiHalfBodyCrawling />
							</div>
						<p className="my-auto">From Crawler</p>
					</button>
				</div>
			</div>}
			<div className="flex flex-col my-3 w-full">
			</div>
		</div>
	);
}

export default MobileoutputSelection;
