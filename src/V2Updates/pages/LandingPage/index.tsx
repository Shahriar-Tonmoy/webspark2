import React from 'react';
import './index.css';
import NavBarV2 from '@/V2Updates/components/NavBar/NavBarV2';
import Hero from '@/V2Updates/components/LandingPage/Hero';
import Colab from '@/V2Updates/components/LandingPage/Colab';
import Deploy from '@/V2Updates/components/LandingPage/Deploy';
import BugFixer from '@/V2Updates/components/LandingPage/BugFixer';
import APIEnd from '@/V2Updates/components/LandingPage/APIEnd';
import Footer from '@/V2Updates/components/Footer';
import HomepageParallax from '@/pages/HomepageParalax';


export default function LandingPage() {
    return (
        // <div className="flex flex-col overflow-hidden bg-[#fff] relative mx-auto my-0 justify-center content-center">

            

        //     <div className='flex justify-start'>
        //         <NavBarV2 />
        //     </div>

        //     <Hero />
           
        //     <Colab />
            
        //     <Deploy />
           
        //     <BugFixer />
            
        //     <APIEnd />
            
            
        // </div>
        <div>
            <HomepageParallax/>
        </div>
    )
}