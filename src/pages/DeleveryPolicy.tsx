import Footer from "@/components/Footer";
import NavUpdated from "@/components/NavUpdated";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import FooterUpdated from "./FooterUpdated";

export default function DeliveryPolicy() {
    const navigate = useNavigate();
    const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
    // Perform any other actions based on the scroll event
  };
  return (
    <div className="bg-[#06060E] h-full w-full overflow-y-auto" onScroll={handleScroll}>
      <NavUpdated scroll={scrollTop} />
      <div className="bg-[#06060D] p-8 max-w-2xl mx-auto pt-32 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Delivery Policy</h1>
        <p className="text-slate-200 text-sm mb-8">Last updated: January 11, 2024</p>
      </div>
      <p className="mb-4">
        This Delivery Policy outlines the terms and conditions for the delivery of products and services provided by GenWebBuilder through the website genwebbuilder.com.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Delivery Process</h2>
      <p className="mb-4">
        GenWebBuilder delivers digital products and services, and therefore, no physical shipment is involved. Upon completing a purchase or subscription, users will gain immediate access to the respective digital products and services through their GenWebBuilder account.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Delivery Timeframe</h2>
      <p className="mb-4">
        The delivery of digital products and services is instantaneous. Users will receive access details immediately after completing the purchase or subscription process. If there are any unexpected delays or issues, GenWebBuilder will notify users promptly.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Refund Policy</h2>
      <span>
      <p className="mb-4">
        Please refer to our <a onClick={() => {navigate('/refoundpolicy')}}><p className="text-blue-500">Refund Policy</p></a> for information regarding refunds related to digital products and services.
      </p></span>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Delivery Policy, you can contact us at support@exciteai.com or by visiting our website: genwebbuilder.com.
      </p>
    </div>
    <FooterUpdated />
    </div>
  );
}
