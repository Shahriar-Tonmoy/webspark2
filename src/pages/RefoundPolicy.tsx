import NavUpdated from "@/components/NavUpdated";
import React ,{ useState } from "react";
import FooterUpdated from "./FooterUpdated";

export default function RefundPolicy() {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
    // Perform any other actions based on the scroll event
  };
  return (
    <div className="bg-[#06060E] h-full w-full overflow-y-auto" onScroll={handleScroll}>
      <NavUpdated scroll={scrollTop} />
      <div className="bg-[#06060D] text-white p-8 max-w-2xl mx-auto pt-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
        <p className="text-slate-200 text-sm mb-8">Last updated: January 11, 2024</p>
      </div>
      <p className="mb-4">
        This Refund Policy applies to the subscription-based and pay-as-you-go services offered by GenWebBuilder through the website genwebbuilder.com.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Subscription Payments</h2>
      <p className="mb-4">
        For subscription-based services, GenWebBuilder offers a 7-day money-back guarantee. If you are not satisfied with our service within the first 7 days of your subscription, you may request a full refund. After the 7-day period, no refunds will be provided for subscription payments.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Pay-as-You-Go Payments</h2>
      <p className="mb-4">
        For pay-as-you-go services, GenWebBuilder does not provide refunds for usage fees incurred. Users are billed based on their usage, and charges are non-refundable. If you choose to stop using the service, you will not be billed for any future usage, but no refunds will be issued for past usage.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Refund Process</h2>
      <p className="mb-4">
        To request a refund for eligible subscription payments within the 7-day money-back guarantee period, please contact our customer support at support@exciteai.com. Provide your account details and the reason for your refund request. Refunds will be processed within 5 business days.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Refund Policy, you can contact us at support@exciteai.com or by visiting our website: genwebbuilder.com.
      </p>
    </div>
    <FooterUpdated />
    </div>
  );
}
