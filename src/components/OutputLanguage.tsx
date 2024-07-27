// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectTrigger,
// } from "./ui/select";
import React from "react";
import { AppState, GeneratedCodeConfig } from "../types";
//import { useNavigate } from "react-router";
// import { SiHtml5 } from "react-icons/si";
// import { SiTailwindcss } from "react-icons/si";

function generateDisplayComponent(config: GeneratedCodeConfig) {
	switch (config) {
	case GeneratedCodeConfig.HTML_TAILWIND:
		return (
			<div>
				<span className="font-semibold">Html</span> +{" "}
				<span className="font-semibold">Tailwind</span> +{""}
				<span className="font-semibold">JS</span>
			</div>
		);
	case GeneratedCodeConfig.REACT_TAILWIND:
		return (
			<div>
				<span className="font-semibold">React</span> +{" "}
				<span className="font-semibold">Tailwind</span>
			</div>
		);
	case GeneratedCodeConfig.BOOTSTRAP:
		return (
			<div>
				<span className="font-semibold">Bootstrap</span> +{""}
				<span className="font-semibold">JS</span>
			</div>
		);
	case GeneratedCodeConfig.IONIC_TAILWIND:
		return (
			<div>
				<span className="font-semibold">Ionic</span> +{" "}
				<span className="font-semibold">Tailwind</span>
			</div>
		);
	default:
		// TODO: Should never reach this out. Error out
		return config;
	}
}

interface Props {
  generatedCodeConfig: GeneratedCodeConfig;
  setGeneratedCodeConfig: (config: GeneratedCodeConfig) => void;
  shouldDisableUpdates?: boolean;
  appState: AppState;
  doneselection: (st: boolean) => void;
}

function OutputLanguage({
	generatedCodeConfig,
	setGeneratedCodeConfig,
	shouldDisableUpdates = false,
	appState,
    doneselection
}: Props) {
	//const navigate = useNavigate();
	return (
		<div className={ (appState == AppState.INITIAL) ? "flex flex-col justify-between text-sm mt-4 my-auto":"hidden"}>
			<div className="flex flex-col my-3 w-full">
				{appState === AppState.INITIAL && <><span className="mt-3 mb-4 text-white">Select language:</span><div className="grid grid-rows-2 gap-4">
					<div className="flex flex-col w-full">
						<button
							className={`w-full p-3 my-2 rounded border-2 border-slate-500 ${
								generatedCodeConfig === GeneratedCodeConfig.HTML_TAILWIND
									? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner shadow-foreground border-0 outline-0"
									: "bg-[#141D25] text-white dark:bg-gray-800"
							}`}
							onClick={() => {
                                doneselection(true);
                                setGeneratedCodeConfig(GeneratedCodeConfig.HTML_TAILWIND)
                            }}
							disabled={shouldDisableUpdates}
						>
							{generateDisplayComponent(GeneratedCodeConfig.HTML_TAILWIND)}
						</button>

						<button
							className={`w-full p-3 my-2 rounded border-2 border-slate-500 ${
								generatedCodeConfig === GeneratedCodeConfig.REACT_TAILWIND
									? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner shadow-foreground border-0 outline-0"
									: "bg-[#141D25] text-white dark:bg-gray-800"
							}`}
							onClick={() => {
                                doneselection(true);
                                setGeneratedCodeConfig(GeneratedCodeConfig.REACT_TAILWIND)
                            }}
							disabled={shouldDisableUpdates}
						>
							{generateDisplayComponent(GeneratedCodeConfig.REACT_TAILWIND)}
						</button>
						<button
							className={`w-full p-3 my-2 rounded border-2 border-slate-500 ${
								generatedCodeConfig === GeneratedCodeConfig.BOOTSTRAP
									? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner shadow-foreground border-0 outline-0"
									: "bg-[#141D25] text-white dark:bg-gray-800"
							}`}
							onClick={() => {
                                doneselection(true);
                                setGeneratedCodeConfig(GeneratedCodeConfig.BOOTSTRAP)
                            }}
							disabled={shouldDisableUpdates}
						>
							{generateDisplayComponent(GeneratedCodeConfig.BOOTSTRAP)}
						</button>

						<button
							className={`w-full p-3 my-2 rounded border-2 border-slate-500 ${
								generatedCodeConfig === GeneratedCodeConfig.IONIC_TAILWIND
									? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-inner shadow-foreground border-0 outline-0"
									: "bg-[#141D25] text-white dark:bg-gray-800"
							}`}
							onClick={() => {
                                doneselection(true);
                                setGeneratedCodeConfig(GeneratedCodeConfig.IONIC_TAILWIND)
                            }}
							disabled={shouldDisableUpdates}
						>
							{generateDisplayComponent(GeneratedCodeConfig.IONIC_TAILWIND)}
						</button>
					</div>
				</div></>}
			</div>
		</div>
	);
}

export default OutputLanguage;
