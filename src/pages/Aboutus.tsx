import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
export default function Aboutus() {
    return (
        <body className="bg-gray-100">
            <NavigationBar />
            <section id="features" className="py-16 bg-white">
                <div className="container mx-auto flex flex-col items-center">
        
                    <div className="">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6 mt-24">About GenWebBuilder</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Welcome to GenWebBuilder, an innovative platform at the forefront of transforming website creation through the power of Generative AI. Our revolutionary technology allows users to seamlessly generate unique website designs from various sources such as reference websites, architectural drawings, or scrapped website designs. Experience a user-friendly interface with prompt-driven interactions and responsive design excellence, ensuring an unparalleled website development journey.
                            </p>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                In collaboration with esteemed partners, <a href='https://contessabd.com' className="text-blue-500 font-bold">Contessa Solutions and Consultants Ltd</a> and <a href='https://www.exciteai.org/' className="text-blue-500 font-bold">Excite AI Ltd</a>, we bring a wealth of expertise to this project. Contessa's BIN: 000240552-0101, contributes to the foundation of our commitment to quality and professionalism.
                            </p>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Discover the future of website design with GenWebBuilder, where innovation meets user-centric excellence.
                            </p>
                        </div>
                    </div>
                    <div className="h-full w-full mt-10">
                        <div className="h-full w-full rounded-xl overflow-hidden">
                            <iframe className="w-full h-[500px]" src="https://www.youtube.com/embed/RbLAU9QpHo4?si=58u7jiNoqkjprZWD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
    
            </section>
            <Footer />
        </body>
    )
}