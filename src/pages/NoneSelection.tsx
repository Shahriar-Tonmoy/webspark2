import React from "react";
import { SliderV2 } from "./SliderV2";
import { SELECTION } from "@/types";

export default function NoneSelection(props: {name: string; updateselection: (data: SELECTION) => void})
{
    return (<div className="flex flex-col h-full w-full justify-between overflow-y-auto" style={{scrollbarWidth: 'none'}}>
        <div className="flex flex-row bg-[#410093] h-[50px] w-full rounded-lg">
            <div className="my-auto ml-6 text-white">
                <p className="font-bold text-2xl m-0">👋 Welcome, {props.name}</p>
                
            </div>

        </div>
        <div className="flex flex-col justify-center items-center w-full h-fit mt-10">
                <div className="p-2 bg-[#0F1021]">
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">GENAI</p>
                </div>
                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-200 text-center mt-3">Start making Websites with AI</p>
            </div>
        <div className="mt-auto">
            <SliderV2 updateselection={props.updateselection} />
        </div>
    </div>)
}