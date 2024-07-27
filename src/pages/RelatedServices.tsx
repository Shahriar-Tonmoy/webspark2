import React from "react";
import pencil from '../assets/images/pencil.webp';
import img from '../assets/images/img.png';
import Code from '../assets/images/code.webp';
import pen from '../assets/images/pen.png';
import crawler from '../assets/images/crawler.png';
import { useNavigate } from "react-router";


const RELATEDSERV = [
    {name: 'From Image', img: img},
    {name: 'Sketch Design', img: pencil},
    {name: 'Website Generator', img: Code},
    {name: 'Handwritten Design', img: pen},
    {name: 'Web Crawler', img: crawler}
]

export default function RelatedServices(props: {loggedin: boolean}) {
    const { innerWidth: width } = window;
    const mobile = width <= 1030 ? true : false;
    const navigate = useNavigate();
    return (
        <div className="pb-2 mb-16">
        <div className="xl:hidden lg:md lg:grid-cols-4 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-1 gap-5 m-10">
                {RELATEDSERV.map((data, index) => (
                <div className="flex flex-col bg-[#0F1021] p-4 justify-center items-center rounded-xl" key={index}>
                    <img src={data.img} />
                    <p className="text-white">{data.name}</p>
                    <button onClick={props.loggedin ? () => {navigate('/code')} : () => {navigate('/register')}} className="px-5 py-3 rounded-xl font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Try It Now</button>
                </div>))}
        </div>
        {!mobile && <div className="flex flex-row justify-center gap-4 items-end">
                <div className="flex flex-col bg-[#0F1021] h-60 py-4 px-16 justify-center items-center rounded-xl border-2 border-[#0F1021] transition duration-500 hover:border-2 hover:border-[#7064E9]" key={1}>
                    <img src={RELATEDSERV[0].img} />
                    <p className="text-white">{RELATEDSERV[0].name}</p>
                    <button onClick={props.loggedin ? () => {navigate('/code')} : () => {navigate('/register')}} className="py-2 px-4 rounded-xl font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Try It Now</button>
                </div>
                <div className="flex flex-col bg-[#0F1021] h-64 py-10 px-16 justify-center items-center rounded-xl border-2 border-[#0F1021] transition duration-500 hover:border-2 hover:border-[#7064E9]" key={2}>
                    <img src={RELATEDSERV[1].img} />
                    <p className="text-white">{RELATEDSERV[1].name}</p>
                    <button onClick={props.loggedin ? () => {navigate('/code')} : () => {navigate('/register')}} className="py-2 px-4 rounded-xl font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Try It Now</button>
                </div>
                <div className="flex flex-col bg-[#0F1021] h-72 py-16 px-16 justify-center items-center rounded-xl pb-10 border-2 border-[#0F1021] transition duration-500 hover:border-2 hover:border-[#7064E9]" key={3}>
                    <img src={RELATEDSERV[2].img} />
                    <p className="text-white">{RELATEDSERV[2].name}</p>
                    <button onClick={props.loggedin ? () => {navigate('/code')} : () => {navigate('/register')}} className="py-2 px-4 rounded-xl font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Try It Now</button>
                </div>
                <div className="flex flex-col bg-[#0F1021] h-64 py-10 px-16 justify-center items-center rounded-xl pb-5 border-2 border-[#0F1021] transition duration-500 hover:border-2 hover:border-[#7064E9]" key={4}>
                    <img src={RELATEDSERV[3].img} />
                    <p className="text-white">{RELATEDSERV[3].name}</p>
                    <button onClick={props.loggedin ? () => {navigate('/code')} : () => {navigate('/register')}} className="py-2 px-4 rounded-xl font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Try It Now</button>
                </div>
                <div className="flex flex-col bg-[#0F1021] h-60 py-4 px-16 justify-center items-center rounded-xl border-2 border-[#0F1021] transition duration-500 hover:border-2 hover:border-[#7064E9]" key={5}>
                    <img src={RELATEDSERV[4].img} />
                    <p className="text-white">{RELATEDSERV[4].name}</p>
                    <button onClick={props.loggedin ? () => {navigate('/code')} : () => {navigate('/register')}} className="py-2 px-4 rounded-xl font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">Try It Now</button>
                </div>
        </div>}
        </div>
    );
}