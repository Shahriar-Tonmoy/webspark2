import React, { ChangeEvent, useState } from "react";
import { sendmessage } from '@/functions/APIRequests/UserAPIRequests';

export default function ContactUs() {
    type mailstate = { state: boolean; message: string };
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [umessage, setMessage] = useState('');
    const handlename = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUsername(value);
        //props.setphone(value)
      };
      const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);
    const handlesendmessage = (mdata: mailstate) => {
        if(mdata.state) {
            setsuccess(true);
        }
        else {
            seterror(true);
        }
    }
      const handleemail = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
        //props.setphone(value)
      };
      const handlmessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setMessage(value);
        //props.setphone(value)
      };
    return (
<div className="container my-10 mx-auto md:px-6">
  <section className="mb-32">
  <div className="flex flex-col justify-center items-center w-full h-fit">
                <div className="p-2 bg-[#0F1021]">
                    <p className="text-5xl font-bold bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent text-center m-0 p-0">Let's Talk</p>
                </div>
                <p className="text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl font-bold text-slate-500 text-center mt-3 mb-5">Got questions or ideas? We're here to help! Reach out and let's turn your concepts into reality.</p>
            </div>

    <div className="flex flex-wrap bg-[#0F1021] p-4 rounded-xl text-slate-300 items-center">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
        <form>
          <div className="p-2">
            <input type="text"
              className="py-2 w-full bg-[#0F1021] border-2 border-[#272838] outline-0 active:outline-0 focus:outline-0 active:border-[#7064E9] focus:border-[#7064E9] rounded-lg px-2"
              id="exampleInput90" placeholder="Name" value={username} onChange={handlename}  />
          </div>
          <div className="p-2">
            <input type="email"
              className="py-2 w-full bg-[#0F1021] border-2 border-[#272838] outline-0 active:outline-0 focus:outline-0 active:border-[#7064E9] focus:border-[#7064E9] rounded-lg px-2"
              id="exampleInput91" placeholder="Email address" value={email} onChange={handleemail} />
          </div>
          <div className="p-2">
            <textarea
              className="py-2 w-full bg-[#0F1021] border-2 border-[#272838] outline-0 active:outline-0 focus:outline-0 active:border-[#7064E9] focus:border-[#7064E9] rounded-lg px-2"
              id="exampleFormControlTextarea1" rows={3} placeholder="Your message" value={umessage} onChange={handlmessage}></textarea>
            {/* <label htmlFor="exampleFormControlTextarea1"
              className="pointer-events-none absolute z-10 bg-[#0F1021] px-2 top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-blue-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-blue-600">Message</label> */}
          </div>
          {/* <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox" value="" id="exampleCheck96" checked />
            <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
              Send me a copy of this message
            </label>
          </div> */}
          <div className="p-2">
          <button type="button" data-te-ripple-init data-te-ripple-color="light"
            onClick={() => {sendmessage(handlesendmessage, email, username, umessage)}}
            className="mb-6 mt-4 py-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 inline-block w-full rounded-xl font-bold border-2 border-slate-500 opacity-90 hover:border-transparent hover:opacity-100 cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 text-white">
            Send Message
          </button>
          </div>
          {error && <p className="my-2 text-red-500 text-center">An Error Ocoured</p>}
          {success && <p className="my-2 text-green-400 text-center">Message Sent Successfully</p>}
        </form>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 my-auto">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">
                  Technical support
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  support@exciteai.org
                </p>
                {/* <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p> */}
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">
                  Sales questions
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  sales@exciteai.org
                </p>
                {/* <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p> */}
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">Press</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  info@exciteai.org
                </p>
                {/* <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p> */}
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">Bug report</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  bugs@exciteai.org
                </p>
                {/* <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    )
}