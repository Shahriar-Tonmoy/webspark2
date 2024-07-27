import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

export default function PreviewTest(){
    const [iurl, setiurl] = useState('');
    const [device, setdevice] = useState('desktop')
    const btn1ref = useRef<HTMLButtonElement>(null);
    const btn2ref = useRef<HTMLButtonElement>(null);
    const btn3ref = useRef<HTMLButtonElement>(null);
    const ifreameref = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
    const paramsString = window.location.hash.substring(1);
    const params = new URLSearchParams(paramsString);
    ifreameref.current.onload = () => {
        setTimeout(() => {
            btn2ref.current.click()
            setTimeout(() => {
                btn3ref.current.click()
                setTimeout(() => {
                    btn1ref.current.click()
                }, 3000);
            }, 3000);
        }, 3000);
    }

    setiurl('http://aiuse.genwebbuilder.com'+params.get('site'));
    // setiurl('https://genwebbuilder.com')
    }, []);
    return (<div className='h-full w-full bg-slate-200 overflow-y-auto'>
        <div className='flex flex-col'>
            <div className='flex flex-row w-full h-fit justify-center items-center gap-1 mt-2'>
                <button ref={btn1ref} className='p-2 bg-blue-700 text-white rounded-lg' onClick={() => {setdevice('desktop')}} >Desktop</button>
                <button ref={btn2ref} className='p-2 bg-blue-700 text-white rounded-lg' onClick={() => {setdevice('tab')}} >Tab</button>
                <button ref={btn3ref} className='p-2 bg-blue-700 text-white rounded-lg' onClick={() => {setdevice('mobile')}} >Mobile</button>
            </div>
        <iframe
        className={classNames(
            "border-[4px] border-black rounded-[20px] shadow-lg mx-auto",
            "transform scale-[0.9] mt-2",
            {
                "w-4/5 h-[862px]": device === "desktop",
                "w-3/4 h-[900px]": device === "tab",
                "w-[400px] h-[832px]": device === "mobile",
            }
        )}
         src={iurl} ref={ifreameref} />
         </div>
    </div>)
}