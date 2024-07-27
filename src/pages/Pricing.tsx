import React, { useEffect, useState } from "react";
import { APPCOOKIE, PRODUCTCOOKIE, getAppCookie, setAppCookie } from './Fuctions/appcookie/appcookie';
import './Animatedline.scss'
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { setHomeState } from "@/reducer/homestate";
import { Homeselector } from "@/functions/enums/homeselector";

export default function Pricing() {
    const [cookiest, setcookiest] = useState('');
    const [plan, setPlan] = useState(true);
      const navigate = useNavigate();
	const dispatch = useDispatch();
    
      useEffect(() => {
        setcookiest(getAppCookie(APPCOOKIE));
    }, [])
      
    //   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isbd = false;
	console.log(Intl.DateTimeFormat().resolvedOptions());
      const PURCHASE = (id: number) => {
        if (cookiest != ''){
        const buyobj = {amount:1,id:1, name:'', webpage:1};
        switch(id) {
            case 1:
                buyobj.amount = 14.99
                buyobj.id = 1
                buyobj.name = 'BASIC'
                buyobj.webpage = 170
                break;
            case 2:
                buyobj.amount = 29.99
                buyobj.id = 2
                buyobj.name = 'Pro'
                buyobj.webpage = 330
                break;
            case 3:
                buyobj.amount = 51.99
                buyobj.id = 3
                buyobj.name = 'GOLD'
                buyobj.webpage = 550
                break;
            case 4:
                buyobj.amount = 1*2
                buyobj.id = 4
                buyobj.name = 'PAY AS YOU GO'
                buyobj.webpage = 20
                break;
        }
        //console.log(buyobj)
        setAppCookie(PRODUCTCOOKIE, JSON.stringify(buyobj), 1)
        navigate('/checkout')
        }
        else {
            navigate('/login')
        }
      }
    return (
        <section className="py-2 dark:bg-gray-800 dark:text-gray-100">
	<div className="container px-4 mx-auto">
		<div className="flex w-full justify-center m-0 p-0">
			<p className="mx-auto text-center text-lg text-slate-500">Collaborate with AI to generate beautiful and modern website</p>
		</div>
        <div className='flex flex-col justify-center w-full my-10'>
			<div className="flex flex-row rounded-full p-2 border-2 border-slate-700 w-fit mx-auto text-md text-white">
				<button className={`xs:px-3 sm:px-3 md:px-5 lg:px-5 xl:px-5 xs:py-1 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-3xl ${(plan === true)? `bg-[#7064E9]`: ``}`} onClick={() => {setPlan(true)}}>Plans</button>
				<button className={`xs:px-1 sm:px-2 md:px-4 lg:px-5 xl:px-5 xs:py-1 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-3xl ${(plan === false)? `bg-[#7064E9] text-md`: `sm:text-sm xs:text-sm md:text-md lg:text-md xl:text-md`}`} onClick={() => {setPlan(false)}}>Pay as you go</button>
			</div>
		</div>
            {plan && <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-stretch mx-0 text-[#7064E9] gap-5">
			<div className="flex w-full mb-8 sm:px-4 lg:mb-0 bg-[#0F1021] rounded-lg shadow-2xl hover:shadow-[#7064E9]">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded sm:p-8 dark:bg-gray-900">
					<div className="space-y-2 justify-center text-center">
						<h4 className="text-4xl font-bold text-white mb-3">Basic</h4>
						<div className="flex flex-row text-4xl font-bold justify-center">
						<sup className="text-sm">{isbd? 'BDT':'$'} </sup><p>{isbd? ' 1648':'14.99'}</p>
						</div>
						<p>3 Months</p>
					</div>
					<div className="divider" ></div>
					<p className="mt-3 leadi dark:text-gray-400 text-center text-[#7073A6]">Streamline web development with our Basic plan's priority access and support.</p>
					<ul className="flex-1 mb-6 text-[#7073A6]">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>1 License</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>170 coins</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Previous 3 month history</span>
						</li>
                        <li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Priority Feature Requests</span>
						</li>
					</ul>
					<button className="px-5 py-3 rounded-lg font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white" onClick={() => {PURCHASE(1)}}>Try Now</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 lg:mb-0 bg-[#0F1021] rounded-lg shadow-2xl hover:shadow-[#7064E9]">
				<div style={{background: 'radial-gradient(80.40% 50.55% at 50.00% -5.29%, #555182, transparent, transparent)'}} className="flex flex-grow flex-col p-6 space-y-6 rounded sm:p-8 dark:text-gray-900">
					<div className="space-y-2 justify-center text-center">
						<h4 className="text-4xl font-bold text-white mb-3">Pro</h4>
						<div className="flex flex-row text-4xl font-bold justify-center">
						<sup className="text-sm">{isbd? 'BDT':'$'} </sup><p>{isbd? ' 3298':'29.99'}</p>
						</div>
						<p>6 Months</p>
					</div>
					<div className="divider" ></div>
					<p className="leadi text-center text-[#7073A6]">Upgrade to Pro: 6 months of optimized support and features.</p>
					<ul className="flex-1 space-y-2 text-[#7073A6]">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>1 License</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>330 coins </span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Previous 6 month history</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Priority Feature Requests</span>
						</li>
					</ul>
					<button className="px-5 py-3 rounded-lg font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white" onClick={() => {PURCHASE(2)}}>Purchase Now</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 lg:mb-0 bg-[#0F1021] rounded-lg shadow-2xl hover:shadow-[#7064E9]">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded sm:p-8 dark:bg-gray-900">
					<div className="space-y-2 text-center">
						<h4 className="text-4xl font-bold text-white text-center mb-3">Gold</h4>
						<div className="flex flex-row text-4xl font-bold justify-center">
						<sup className="text-sm">{isbd? 'BDT':'$'} </sup><p>{isbd? ' 5718':'51.99'}</p>
						</div>
						<p>12 Months</p>
					</div>
					<div className="divider" ></div>
					<p className="leadi text-center text-[#7073A6]">Elevate with Gold: 1 year of premium support and features.</p>
					<ul className="space-y-2 text-[#7073A6]">
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>1 License</span>
						</li>
                        <li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>550 coins</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Previous 1 year history</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Priority Feature Requests</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Chat support</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Early Access to new Features</span>
						</li>
					</ul>
					<button className="px-5 py-3 rounded-lg font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white" onClick={() => {PURCHASE(3)}}>Purchase Now</button>
				</div>
			</div>
		</div>}
        {!plan && <section className="py-6">
	<div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center gap-5">
		<div className="flex flex-col items-center justify-center p-2 pb-8 text-center bg-[#0F1021] rounded-xl shadow-xl shadow-transparent transition duration-300 text-slate-300 hover:shadow-[#7064E9] xs:w-full sm:w-full md:w-[45%] lg:w-[50%] xl:w-[50%] py-5 px-3">
			<span className="text-lg mb-3">Pay as you go</span>
			<div className="flex flex-row text-4xl font-bold justify-center text-[#7064E9]">
						<sup className="text-sm">{isbd? 'BDT':'$'} </sup><p>{isbd? ' 220':'2.00'}</p>
						</div>
			<p className="font-semibold text-center">Get started with pay as you go. Get 10 coins for webpage generation at {isbd? "BDT 110": "$1"} . Starting from just {isbd? "BDT 220": "$2"}  </p>
			<button className="px-5 py-3 rounded-lg font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white" onClick={() => {PURCHASE(4)}}>Add Funds</button>
		</div>
		<div className="flex flex-col items-center justify-center p-2 pb-8 text-center bg-[#0F1021] rounded-xl shadow-xl shadow-transparent transition duration-300 text-slate-300 hover:shadow-[#7064E9] xs:w-full sm:w-full md:w-[45%] lg:w-[50%] xl:w-[50%] py-5 px-3">
			<span className="text-lg font-semibold">Advanced</span>
            <p className="text-5xl font-bold text-center">Contact Sales</p>
			<p className="font-semibold">For Businesses contact us to get a quote to speed up your production</p>
			<button className="px-5 py-3 rounded-lg font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white" onClick={() => {
				dispatch(setHomeState(Homeselector.CONTACT))
				navigate('/')
				}}>Contact us</button>
		</div>
	</div>
</section>}
	</div>
</section>
    )
}