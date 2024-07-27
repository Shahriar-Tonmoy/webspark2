import React, { useState } from 'react';

import Footer from '@/components/Footer';
import Pricing from './Pricing';
import FooterUpdated from './FooterUpdated';
import NavUpdated from '@/components/NavUpdated';
//import { ProductType } from '@/functions/types/producttype';

function BuyServices() {

	const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
        // Perform any other actions based on the scroll event
      };
  return (
    <div className="bg-[#06060D] pb-24 mb-24" onScroll={handleScroll}>
		<NavUpdated scroll={scrollTop} />
		<div className='flex flex-col h-full w-full py-10 my-10'>
			<p className='text-3xl mx-auto text-center text-white font-bold'>Buy new Subscription</p>
			<Pricing />
		</div>
        <FooterUpdated />
    </div>
  )
}

export default BuyServices