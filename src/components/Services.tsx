import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AiFillRobot,
  AiFillCodeSandboxCircle,
  AiFillEdit,
  AiFillFile,
  AiFillCheckCircle,
  AiFillBulb,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
const serviceData = [
  {
    title: "AI Website Generation",
    description:
      "Let our AI-powered service take the hard work out of website creation. Get started today with GenWebBuilder.",
    icon: <AiFillRobot />,
    cta: "Get Started",
  },
  {
    title: "Transform Ideas into Websites",
    description:
      "Discover how AI can transform your ideas into engaging websites with GenWebBuilder's qualitifull service.",
    icon: <AiFillCodeSandboxCircle />,
    cta: "Learn More",
  },
  {
    title: "AI-Powered Redesigns",
    description:
      "Redesign your websites effortlessly with GenWebBuilder's AI-powered service.",
    icon: <AiFillEdit />,
    cta: "Explore",
  },
  {
    title: "Simplified Website Creation",
    description:
      "Experience the ease of website creation with GenWebBuilder's AI service. Write less, achieve more.",
    icon: <AiFillFile />,
    cta: "Try Now",
  },
  {
    title: "Quality AI Websites",
    description:
      "Get professionally designed websites in no time with GenWebBuilder's AI service. Quality meets speed.",
    icon: <AiFillCheckCircle />,
    cta: "Get Started",
  },
  {
    title: "AI Website Assistant",
    description:
      "Collaborate with AI to generate websites that resonate with your audience. Try it now with GenWebBuilder.",
    icon: <AiFillBulb />,
    cta: "Get Started",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ServiceSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 30% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <motion.ul
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 w-full gap-16 p-10 lg:p-10 xl:p-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {inView ? (
        serviceData.map((data, index) => (
          <motion.li
            key={index}
            className="flex flex-col bg-[#0F1021] text-white p-4 rounded-lg border-2 border-[#0F1021] transition duration-500 hover:border-2 hover:border-[#7064E9] hover:shadow-xl hover:shadow-[#7064E9]"
            variants={item}
          >
            <p className="text-6xl mx-auto text-center text-[#7064E9]">
              {data.icon}
            </p>
            <p className="text-xl mx-auto text-center">{data.title}</p>
            <p className="text-md mx-auto text-center">{data.description}</p>
          </motion.li>
        ))
      ) : (
        <div></div>
      )}
    </motion.ul>
  );
};

export default ServiceSection;
