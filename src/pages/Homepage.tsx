// import React from 'react'
import NavigationBar from "@/components/NavigationBar";
import lightMode from "../style/images/Light Mode.jpg";
// import darkMode from "../style/images/Dark Mode.jpg";
import topGradient from "../style/images/bg1.png"
import play from "../style/images/play.png"
import groundbreaking from "../style/images/about-photo-removebg-preview.png"
import aboutusbg from "../style/images/aboutus-bg.png"
import "../style/css/bootstrap.css";
import "../style/css/font-awesome.min.css";
import "../style/css/responsive.css";
import "../style/css/style.css";
import "../style/css/style.scss";
import "../style/css/rewrite.css";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { APPCOOKIE, VALIDATIONCOOKIE, cookieAvailale, getAppCookie } from "./Fuctions/appcookie/appcookie";
import React from "react";

function Homepage() {

  const [playVideo, setPlayVideo] = useState(false);
  const targetComponentRef = useRef<HTMLDivElement>(null);

    const containerStyle = {
      height: 255
      // width: playVideo === true ? '440' : '560'
    };

    const scrollToComponent = () => {
      if (targetComponentRef.current) {
        targetComponentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const navigate = useNavigate();
	useEffect(() => {
		if(cookieAvailale(APPCOOKIE)) {
			if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
				navigate('/activate')
			}
			else {
			navigate('/')
			}
		}
	}, [])

  return (
    <main className="bg-gray-950 relative">
      <div className="hero_area">
        

        {/* header section strats */}
        <header className="header_section z-20">
          <div className="container-fluid">
            <NavigationBar />

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}
          </div>
        </header>
        {/* end header section */}
        
        {/* slider section */}
        <section className="slider_section z-20">
        {/* bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950 */}
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 bg-transparent">
                      <div className="detail-box">
                        <a className="font-bold text-4xl">
                          <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">Introducing</span> <br/>
                          <span className="bg-gradient-to-r from-green-500 via-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Generative Website Builder</span>
                        </a>
                        <p className="text-black">
                          GenWebBuilder stands at the forefront of innovation as a cutting-edge Generative AI-based website building platform. 
                          This revolutionary tool empowers the users by streamlining the website development process through an intuitive and dynamic approach.
                        </p>
                        <div className="btn-box">
                          <button onClick={scrollToComponent} className="btn1">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-rf="stack-x">
                      <div className="flex relative [&>*:not(.data-rf-layer)]:z-10 flex-row grow max-w-4xl rounded-lg z-50 select-none bg-gradient-to-r from-[#cb5bdd] to-[#276bef] p-px overflow-hidden" data-rf="frame" style={containerStyle}>
                        <div className="flex absolute data-rf-layer rounded-[inherit] flex-row inset-[1px] justify-center overflow-hidden" data-rf="frame.layer">
                          <img  width="560" 
                                height="255" 
                                alt="intro video"
                                decoding="async"
                                data-nimg="fill"
                                className={`absolute h-full w-full object-contain object-center 
                                            ${playVideo === true ? "invisible z-5" : ""}`}
                                src={lightMode}>
                          </img>
                          <iframe width="560" 
                                  height="255" 
                                  className={`my-auto ${playVideo === true ? "z-20" : ""}`}
                                  src="https://www.youtube.com/embed/PbqmCsQsMXc?si=KLuKkNh_JmcnDplO" 
                                  title="YouTube video player" 
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                                  allowFullScreen>
                          </iframe>                          
                        </div>
                        <div className="flex absolute data-rf-layer rounded-[inherit] flex-row inset-[1px] justify-center overflow-hidden" data-rf="frame.layer">
                          <div className="flex flex-row relative overflow-hidden cursor-pointer w-20 h-20 my-auto" data-rf="stack">
                            <img  alt="retune demo video"
                                  decoding="async"
                                  data-nimg="fill"
                                  className={`absolute h-full w-full left-0 right-0 top-0 bottom-0 obejct-contain object-center 
                                              ${playVideo === true ? "invisible z-5" : ""}`}
                                  src={play}
                                  onClick={ () => setPlayVideo(true)} />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol> */}
          </div>

        </section>
        {/* end slider section */}
        <div className="z-5 flex absolute data-rf-layer rounded-[inherit] flex-row h-[65%] top-[-30%] left-24 right-24">
          <div className="flex flex-row relative overflow-hidden h-full w-full origin-center opacity-50 blur-[120px]">
            <img className="absolute h-full w-full left-0 right-0 top-0 bottom-0 object-fill object-center transparent" alt="" decoding="async" data-nimg="fill" src={topGradient}/>
          </div>
          {/* fixed top-0 right-0 left-0 bg-gradient-to-r from-gray-950 via-fuchsia-950 to-gray-950 */}
        </div>   
      </div>

         

      {/* about section */}

      <section className="py-12" ref={targetComponentRef}>
        <div className="container">
          <div className="text-center items-center mb-11">
            <span className="text-4xl relative font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Us
            </span>
            <p className="mt-2.5 text-gray-100">
              GenWebBuilder is an AI based platform that revolutionizes website creation with its Generative AI, enabling users to effortlessly generate website Designs from reference websites, 
              drawn architecture, or a scrapped website Design, fostering a user-friendly experience with prompt-driven interactions and responsive design excellence.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img className="absolute opacity-50 blur-[120px] h-full w-full py-5 px-5 left-0 right-0 top-0 bottom-0 object-fill object-center transparent" alt="" decoding="async" data-nimg="fill" src={aboutusbg}/>
                <img className="h-[80%] w-[80%] relative m-auto pt-10" src={groundbreaking} alt=""/>
              </div>
            </div>
            <div className="col-md-6 my-16">
              <div className="">
                {/* <h3 className="font-bold text-white">
                  We Are GenWebBuilder
                </h3> */}
                <p className="mt-4 text-gray-100">
                  GenWebBuilder leverages Generative AI to simplify website creation through three input methods: reference websites, drawn architecture, or specified details. 
                  Users can start by providing a reference website, and the platform generates corresponding code, offering a preview with the option for user feedback and prompt-driven redesign. 
                  Alternatively, users can draw the website architecture, and GenWebBuilder translates it into functional code, allowing for immediate refinement. 
                  The platform also enables website replication from a given URL.
                </p>
                <p className="mt-4 text-gray-100">
                  Noteworthy features include prompt-driven interactions for user control, responsive design excellence for desktop and mobile devices (including iOS optimization), 
                  and flexibility in design language, supporting HTML + Tailwind + JS, React + Tailwind + JS, Bootstrap + JS, and Ionic + Tailwind + JS.
                </p>
              </div>
            </div>
          </div>
          <div className="object-center">  
            <p className="mt-4 text-gray-100">
              The user-friendly interface incorporates simple navigation, drag-and-drop functionality, a WYSIWYG editor, customization options, and interactive tutorials. 
              Responsive design preview ensures adaptability across devices, and a prompt-based feedback system enhances user engagement. 
              A groundbreaking "Download Website" feature allows users to export their created websites seamlessly, providing flexibility and control over their web projects.
            </p>
          </div>
        </div>
      </section>

      {/* end about section */}

      {/* service section */}

      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2 className="text-4xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Our Services
              </h2>
            </div>
            <div className="row">

              <div className="col-md-4 mb-2">
                <div className="box border h-full">
                  <div className="detail-box h-full">
                    <div className="text-gray-300 text-xl">
                      $15/<span className="font-bold uppercase">3 Months</span>
                    </div>
                    <br />
                    <div className="flex flex-col gap-2 text-left">
                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">1 License</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">50 web pages design</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">4 Language Availability</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Discord support</span>
                      </div>

                    </div>
                  </div>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="box border h-full">
                  <div className="detail-box h-full">
                    <div className="text-gray-300 text-xl">
                      $30/<span className="font-bold uppercase">6 Months</span>
                    </div>
                    <br />
                    <div className="flex flex-col gap-2 text-left">
                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">1 License</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">120 web pages design</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">4 Language Design</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Early access to new features</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Priority feature requests</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Email and chat support</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Discord support</span>
                      </div>

                    </div>
                  </div>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="box border h-full">
                  <div className="detail-box h-full">
                    <div className="text-gray-300 text-xl">
                      $50/<span className="font-bold uppercase">Year</span>
                    </div>
                    <br />
                    <div className="flex flex-col gap-2 text-left">
                      <div className="flex flex-row gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">1 License</span>
                      </div>

                      <div className="flex flex-row gap-2">
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">240 web pages design</span>
                      </div>

                      <div className="flex flex-row gap-2">
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">4 + New Language Design  Availability</span>
                      </div>

                      <div className="flex flex-row gap-2">
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Early access to new features</span>
                      </div>

                      <div className="flex flex-row gap-2">
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Priority feature requests</span>
                      </div>

                      <div className="flex flex-row gap-2">
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Email and chat support</span>
                      </div>

                      <div className="flex flex-row gap-2">
                      <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-width="1" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          className="lucide lucide-check-square shrink-0 w-4 h-4 text-white">
                          
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span className="text-gray-200 text-lg">Discord support</span>
                      </div>

                    </div>
                  </div>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="btn-box">
              <a href="">
                See All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* end service section */}

      <Info />

      <Footer />

      {/* jQery */}
      <script type="text/javascript" src={"js/jquery-3.4.1.min.js"}></script>

      {/* popper js */}
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous">
      </script>

      {/* bootstrap js */}
      <script type="text/javascript" src={"js/bootstrap.js"}></script>
      {/* owl slider */}

      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
      </script>
      
      {/* custom js */}
      <script type="text/javascript" src={"js/custom.js"}></script>

      {/* Google Map */}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
      </script>

    </main>
  );
}

export default Homepage