//import NavigationBar from '@/components/NavigationBar';
import NavigationBar from '@/components/NavigationBar';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.css';
import '../assets/css/templatemo-softy-pinko.css';
import '../assets/css/custom.css';
import '../index.css'
import fea1 from '../assets/images/Designer.jpeg';
import fea3 from '../assets/images/f2.jpeg';
import fea2 from '../assets/images/f3.jpeg';
import work from '../assets/images/work.png';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { APPCOOKIE, VALIDATIONCOOKIE, cookieAvailale, getAppCookie } from './Fuctions/appcookie/appcookie';
// import { setuservalid } from '@/reducer/uservaliditystate';
// import { setapptokenck } from '@/reducer/cookiestate';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import { Homeselector } from '@/functions/enums/homeselector';
// import { WiStars } from "react-icons/wi";
import { sendmessage, waitlistnum } from '@/functions/APIRequests/UserAPIRequests';
import Slider from './Slider';
import { InfiniteSlider } from './sslcoomerz/pages/IconSlider';
import { InfiniteSliderImage } from './sslcoomerz/pages/ImageSlider';
import BG from '../assets/images/banner1.svg';
import Footer from '@/components/Footer';
//import gb from '../assets/images/gb.png';
// import '../assets/js/custom';
// import '../assets/js/bootstrap.min';
// import '../assets/js/scrollreveal.min';
// import '../assets/js/waypoints.min';
// import '../assets/js/imgfix.min';
// import '../assets/js/jquery.counterup.min';
// const divStyle = {
//     backgroundImage: 'linear-gradient(to bottom, #fd5c63, #ff9844)',
//     // Add any other styles you want for the div here
//   };
export default function HomepageUpdated() {
    type mailstate = { state: boolean; message: string };
    const { innerWidth: width } = window;
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const pricingSectionRef = useRef(null);
    const contactsectionref = useRef(null);
    const featuresref = useRef(null);
    const workprocessref = useRef(null);
    const [loggedin, setLogedin] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [umessage, setMessage] = useState('');
    const [waitlist, setwaitlist] = useState(300);
    useEffect(() => {
        waitlistnum((num)=>{setwaitlist(num)})
    }, [])

    const pagestate = useSelector((state: RootState) => state.item6.homestate);
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

    // //console.log(width);
    let w2 = width;
    if(width > 500) {
        w2 = width/3
    }
    else {
        w2 = width-30;
    }
    useEffect(() => {
        if(cookieAvailale(APPCOOKIE)) {
          if(getAppCookie(VALIDATIONCOOKIE) === 'false') {
            navigate('/activate')
          }
          else {
            setLogedin(true)
          }
        }
        else {
            setLogedin(false)
        }
      }, [])

    // useEffect(() => {
    //     dispatch(setapptokenck(getAppCookie(APPCOOKIE)))
    //     dispatch(setuservalid(getAppCookie(VALIDATIONCOOKIE) === 'true' ? true : false))
    // }, [])

    // const scrollToSection = (ref) => {
    //     ref.current.scrollIntoView({ behavior: 'smooth' });
    //   };
    
    //   const handlePricingClick = () => {
    //     scrollToSection(pricingSectionRef);
    //   };
    
    //   const handlefeatureclick = () => {
    //     scrollToSection(featuresref);
    //   };
    //   const handlecontactclick = () => {
    //     scrollToSection(contactsectionref);
    //   };
    //   const handleworkprocessclick = () => {
    //     scrollToSection(workprocessref);
    //   };


    //   switch(pagestate) {
    //     case Homeselector.CONTACT:
    //         handlecontactclick();
    //         break;
    //     case Homeselector.FEATURES:
    //         handlefeatureclick();
    //         break;
    //     case Homeselector.PRICING:
    //         handlePricingClick();
    //         break;
    //     case Homeselector.WORKPROCESS:
    //         handleworkprocessclick();
    //         break;
    //   }
    let btncolor = '#00000';
      useEffect(() => {
        const scrollToSection = (ref) => {
            if (ref && ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
    
        switch (pagestate) {
            case Homeselector.CONTACT:
                scrollToSection(contactsectionref);
                break;
            case Homeselector.FEATURES:
                scrollToSection(featuresref);
                break;
            case Homeselector.PRICING:
                scrollToSection(pricingSectionRef);
                break;
            case Homeselector.WORKPROCESS:
                scrollToSection(workprocessref);
                break;
            default:
                break;
        }
    }, [pagestate]);

    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // useEffect( () => {
    //     const intervalId = setInterval(() => {
    //       setCurrentYear(new Date().getFullYear());
    //     }, 1000);
    
    //     return () => clearInterval(intervalId);
    // },[])
    
    // Slides

    const [slideIndex, setSlideIndex] = useState(1);
    const slidesRef = useRef([]);
    //const dotsRef = useRef([]);

    const plusSlides = (n) => {
        showSlides(slideIndex + n);
    };

    // const currentSlide = (n) => {
    //     showSlides(n);
    // };

    const showSlides = (n) => {
        //let i;

        if (n > slidesRef.current.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slidesRef.current.length);
        }

        // for (i = 0; i < slidesRef.current.length; i++) {
        //     slidesRef.current[i].style.display = "none";
        // }

        // for (i = 0; i < dotsRef.current.length; i++) {
        //     dotsRef.current[i].className = dotsRef.current[i].className.replace(" active", "");
        // }

        // slidesRef.current[slideIndex - 1].style.display = "block";
        //dotsRef.current[slideIndex - 1].className += " active";
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            plusSlides(1);
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [slideIndex]);

    // Use refs to capture the elements
    // const setSlideRef = (el, index) => {
    //     slidesRef.current[index] = el;
    // };

    // const setDotRef = (el, index) => {
    //     dotsRef.current[index] = el;
    // };

    const handlename = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUsername(value);
        //props.setphone(value)
      };
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
    <div className='bg-white'>
        {/* <div id="preloader">
            <div className="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>   */}
        <NavigationBar />
        <div className="flex bg-cover w-screen h-fit justify-center content-center items-center" style={{backgroundImage: `url(${BG})`}} id="welcome">
            <div className="flex flex-col justify-center content-center h-screen text-white my-16">
                <div className="flex flex-col justify-center content-center">
                    <div className="flex flex-col justify-center content-center">
                        
                        <div className='flex flex-col justify-center content-center text-center sm:px-[15%] lg:px-[5%] sm:mt-[20%] mt-[20%] lg:mt-[5%] gap-5'>
                            <h1 className="text-2xl lg:text-4xl md:text-4xl xl:text-5xl">
                                <strong>Introducing</strong><br/>Generative Website Builder<br/> for your <strong>business</strong>
                            </h1>
                            <p>Welcome to GenWebBuilder, where innovation meets simplicity. Transform images into stunning websites effortlessly with our cutting-edge Generative AI technology. No coding needed—just your vision turned into reality, instantly. Join us and redefine web creation in a click.</p>
                            <h1 className='text-3xl font-bold'>Start Today</h1>
                            <button onClick={loggedin ?() => {navigate('/code')}:() => {navigate('/register')}} className="bg-[#4141b5] font-bold h-16 w-56 mx-auto text-slate-50 rounded-full hover:bg-white focus:text-black active:text-black hover:text-black drop-shadow-2xl" style={{color: btncolor}} onMouseEnter={() => {btncolor = 'black'}}>{loggedin? 'Generate Website': 'Get started'}</button>
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <section ref={featuresref} className="bg-white">
            <div className="container pt-5 pb-10">
                <div className="row">
                    <div className="">
                        <div className="row gap-y-8">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                <div className="features-small-item h-full">
                                    <div className="icon">
                                        <i><img src={fea1} alt="" className='rounded-full'/></i>
                                    </div>
                                    <h5 className="features-title">Visuals to Vibrant Websites</h5>
                                    <p> Instantly convert images, sketches, or online content into stunning, interactive web applications. Say goodbye to long development cycles; our platform effortlessly transforms your visuals into engaging online experiences.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                <div className="features-small-item h-full">
                                    <div className="icon">
                                        <i><img src={fea2} alt="" className='rounded-full'/></i>
                                    </div>
                                    <h5 className="features-title">Tailored Creations at Your Fingertips</h5>
                                    <p>Customize every detail of your web app with ease. Our unique feature allows you to modify generated webapp through simple prompts, ensuring your website perfectly matches your imagination.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                <div className="features-small-item h-full">
                                    <div className="icon">
                                        <i><img src={fea3} alt="" className='rounded-full'/></i>
                                    </div>
                                    <h5 className="features-title">AI-Powered Rapid Development</h5>
                                    <p>Experience the future of website creation. Our AI-driven platform automates the entire process, bringing your ideas to life swiftly. No coding expertise needed—just innovation at its finest.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section padding-top-70 padding-bottom-0 bg-white" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 flex justify-center rounded-full my-auto" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <iframe className='rounded-xl' width={w2.toString()} height={(w2/1.7).toString()} src="https://www.youtube.com/embed/RbLAU9QpHo4?si=58u7jiNoqkjprZWD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                        <div className="left-heading lg:text-left md:text-center sm:text-center">
                            <h2 className="section-title">About GenWebBuilder</h2>
                        </div>
                        <div className="left-text">
                            <p>Welcome to GenWebBuilder, an innovative platform at the forefront of transforming website creation through the power of Generative AI. Our revolutionary technology allows users to seamlessly generate unique website designs from various sources such as reference websites, architectural drawings, or scrapped website designs. Experience a user-friendly interface with prompt-driven interactions and responsive design excellence, ensuring an unparalleled website development journey. 

                            <strong className='text-sky-500 cursor-pointer' onClick={() => {navigate('/about')}}>see more ...</strong></p>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-12">
                        <div className="hr"></div>
                    </div>
                </div> */}
            </div>
        </section>
        <div className='mt-20'>
            <div>
                <p className='text-center mb-5 text-2xl font-bold'>Used by more than 100k developers World wide</p>
            </div>
        <InfiniteSlider />
        </div>
        <section className="section padding-bottom-100 bg-white">
            <div className="container">
                <div className="row text-center">
                    <div className='w-full mb-3' >
                        <h4 className='text-center'><strong>Fueling Business Growth with Our Platform</strong></h4>
                    </div>
                    <p>GenwebBuilder fuels business growth by transforming images and sketches into engaging web applications instantly. Craft captivating experiences, adapt to market dynamics, and scale seamlessly from startups to enterprises. With data-driven insights, drive conversions effortlessly. GenwebBuilder: Your catalyst for streamlined web development and sustained growth.</p>
                </div>
            </div>
        </section>

        {/* WORK PROCESS SECTION */}

        <section ref={workprocessref} className="mini" id="work-process">
            <div className="mini-content">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="info">
                                <h1>Work Process</h1>
                                <p>GenwebBuilder simplifies web development by swiftly transforming images and sketches into functional web applications. With intuitive prompts for customization, create tailored designs effortlessly.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full justify-center'>
                        <img src={work} className='mx-auto' />
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" className="mini-box">
                                <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                                <strong>Get Ideas</strong>
                                <span>Godard pabst prism fam cliche.</span>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" className="mini-box">
                                <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                                <strong>Sketch Up</strong>
                                <span>Godard pabst prism fam cliche.</span>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" className="mini-box">
                                <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                                <strong>Discuss</strong>
                                <span>Godard pabst prism fam cliche.</span>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" className="mini-box">
                                <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                                <strong>Revise</strong>
                                <span>Godard pabst prism fam cliche.</span>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" className="mini-box">
                                <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                                <strong>Approve</strong>
                                <span>Godard pabst prism fam cliche.</span>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#" className="mini-box">
                                <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                                <strong>Launch</strong>
                                <span>Godard pabst prism fam cliche.</span>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        
        {/* Slider */}

        <div className='font-sans'>
            <div className='flex flex-col my-10'>
                <p className='text-2xl font-bold text-center'>Feature Gallery</p>
                <div className='mx-auto h-1 w-[30%] bg-[#B670D8] my-2'></div>
            </div>
            {width < 700 && <Slider />}
            {width >= 700 && <InfiniteSliderImage />}
        </div>

        {/* PRICING PLAN SECTION */}

        {/* <section ref={pricingSectionRef} className="section colored" id="pricing-plans">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Pricing Plans</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full align-items-center align-content-center justify-center'>

                    <div className="mx-auto" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <h3 className="pricing-title">Pay as you go</h3>
                            </div>
                            <div className="pricing-body">
                                <div className="price-wrapper">
                                    <span className="currency">$</span>
                                    <span className="price">0.99</span>
                                    <span className="period">2 webpages</span>
                                </div>
                                <ul className="list">
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="#" className="main-button">Purchase Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">Basic</h3>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="price">14.99</span>
                                        <span className="period">3 Months</span>
                                    </div>
                                    <ul className="list">
                                        <li className="active">1 License</li>
                                        <li className="active">50 web pages design</li>
                                        <li className="active">Last 5 days History</li>
                                        <li className="active">Chat Support</li>
                                        <li className="active">5 Web-Framework support</li>
                                        <li className="active">AI Chat Support</li>
                                        <li className="active">Discord Support</li>
                                        <li className="active text-white">.</li>
                                        <li className="active text-white">.</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="main-button">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div className="pricing-item active">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">Pro</h3>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="price">29.99</span>
                                        <span className="period">6 Months</span>
                                    </div>
                                    <ul className="list">
                                        <li className="active">1 License</li>
                                        <li className="active">120 web pages design</li>
                                        <li className="active">Last 15 days History</li>
                                        <li className="active">Early Access to new Features</li>
                                        <li className="active">Priority Feature Requests</li>
                                        <li className="active">Chat Support</li>
                                        <li className="active">5+ Web-Framework support</li>
                                        <li className="active">AI Chat Support</li>
                                        <li className="active">Discord Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="main-button">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">Gold</h3>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="price">51.99</span>
                                        <span className="period">1 Year</span>
                                    </div>
                                    <ul className="list">
                                        <li className="active">1 License</li>
                                        <li className="active">250 web pages design</li>
                                        <li className="active">Last 1 Month History</li>
                                        <li className="active">Early Access to new Features</li>
                                        <li className="active">Priority Feature Requests</li>
                                        <li className="active">Chat Support</li>
                                        <li className="active">5+ Web-Framework support</li>
                                        <li className="active">AI Chat Support</li>
                                        <li className="active">Discord Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="main-button">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <h3 className="pricing-title">Enterprise</h3>
                            </div>
                            <div className="pricing-body">
                                <a href='mailto:sales@exciteai.org' >
                                    <div className="price-wrapper">
                                        <span className="currency"></span>
                                        <span className="price">Contact Sales</span>
                                        <span className="period">2 webpage</span>
                                    </div>
                                </a>
                                <ul className="list">
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <a href="#" className="main-button">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* CONTENT SECTION */}

        <section className="counter">
            <div className="content">
                <div className="container">
                    <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row justify-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="count-item decoration-bottom">
                                <strong>1000+</strong>
                                <span>WebSites Generated</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="count-item decoration-top">
                                <strong>{waitlist.toString()+"+"}</strong>
                                <span>Happy Clients</span>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="count-item decoration-bottom">
                                <strong>18</strong>
                                <span>Awards Wins</span>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="count-item">
                                <strong>180+</strong>
                                <span>Countries</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="section" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Blog Entries</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-post-thumb">
                            <div className="img">
                                <img src="assets/images/blog-item-01.png" alt=""/>
                            </div>
                            <div className="blog-content">
                                <h3>
                                    <a href="#">Vivamus ac vehicula dui</a>
                                </h3>
                                <div className="text">
                                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                                </div>
                                <a href="#" className="main-button">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-post-thumb">
                            <div className="img">
                                <img src="assets/images/blog-item-02.png" alt=""/>
                            </div>
                            <div className="blog-content">
                                <h3>
                                    <a href="#">Phasellus convallis augue</a>
                                </h3>
                                <div className="text">
                                    Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                                </div>
                                <a href="#" className="main-button">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-post-thumb">
                            <div className="img">
                                <img src="assets/images/blog-item-03.png" alt=""/>
                            </div>
                            <div className="blog-content">
                                <h3>
                                    <a href="#">Nam gravida purus non</a>
                                </h3>
                                <div className="text">
                                    Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                                </div>
                                <a href="#" className="main-button">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <section ref={contactsectionref} className="section colored" id="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Talk To Us</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Got questions or ideas? We're here to help! Reach out and let's turn your concepts into reality.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center align-content-center justify-content-center">
                    <div className="col-lg-8 col-md-6 col-sm-12 mx-auto">
                        <div className="contact-form">
                            <div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input value={username} onChange={handlename} name="name" type="text" className="form-control" id="name" placeholder="Full Name" required={true}/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input value={email} onChange={handleemail} name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address" required={true}/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea value={umessage} onChange={handlmessage} name="message" rows={6} className="form-control" id="message" placeholder="Your Message" required={true}></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="flex w-full justify-center">
                                        <fieldset>
                                        {success &&<div><p className='text-green-500'>Mail sent Successfully</p></div>}
                                        {error &&<div><p className='text-red-500'>Mail sent Failed</p></div>}
                                            <button onClick={() => {sendmessage(handlesendmessage, email, username, umessage)}} type="submit" id="form-submit" className="main-button">Send Message</button>
                                        </fieldset>
                                        
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
{/* 
        <script src="assets/js/jquery-2.1.0.min.js"></script>

        <script src="assets/js/popper.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/scrollreveal.min.js"></script>
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/imgfix.min.js"></script> 
        <script src="assets/js/custom.js"></script> */}

    </div> );
}