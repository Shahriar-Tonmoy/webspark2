import React from "react";
import '../../assets/css/steller.css'; // You can remove this if you're not using any additional CSS
import logo from '../../assets/imgs/logo.svg';


export default function NavProd(props: {setlogo: (data: string) => void; logostr: string;}) {
    return (
        <nav className="bg-white shadow-lg fixed z-20 w-screen">
            <div className="relative group">
        </div>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <a className="w-12" href="#"><img src={props.logostr?props.logostr:logo} alt=""/></a>
                    <button className="block lg:hidden navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M21.75 18.75H2.25C1.00781 18.75 0 17.7422 0 16.5C0 15.2578 1.00781 14.25 2.25 14.25H21.75C22.9922 14.25 24 15.2578 24 16.5C24 17.7422 22.9922 18.75 21.75 18.75ZM21.75 10.5H2.25C1.00781 10.5 0 9.49219 0 8.25C0 7.00781 1.00781 6 2.25 6H21.75C22.9922 6 24 7.00781 24 8.25C24 9.49219 22.9922 10.5 21.75 10.5ZM24 1.5C24 2.74219 22.9922 3.75 21.75 3.75H2.25C1.00781 3.75 0 2.74219 0 1.5C0 0.257812 1.00781 -0.75 2.25 -0.75H21.75C22.9922 -0.75 24 0.257812 24 1.5Z"></path>
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end" id="navbarSupportedContent">
                        <ul className="flex flex-row ml-auto align-items-center my-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Service</a>
                            </li>                   
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testmonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="- btn btn-primary rounded ml-4" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>          
        </nav>
    );
}
