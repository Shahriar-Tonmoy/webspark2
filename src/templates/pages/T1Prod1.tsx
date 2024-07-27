import React, { useEffect, useState } from "react";
import Header from "../sections/T1dev1/Header";
import '../assets/css/steller.css'
import '../assets/vendors/themify-icons/css/themify-icons.css';
import About from "../sections/T1dev1/About";
import Service from "../sections/T1dev1/Service";
import Skills from "../sections/T1dev1/Skils";
import PortFolio from "../sections/T1dev1/PortFolio";
import Testimonial from "../sections/T1dev1/Testimonial";
import Hireme from "../sections/T1dev1/Hireme";
import Contact from "../sections/T1dev1/Contact";
import Footer from "../sections/T1dev1/Footer";
import { Portfoliotype } from "@/functions/types/Portfolio1type";
import '../../index.css';
import NavProd from "../sections/T1dev1/Navprod";
import { getsite } from "@/functions/APIRequests/Portfoliorequest";
import Loadingmodal from "@/components/Loadingmodal";
import { useParams } from "react-router";

export default function T1Prod1() {
  const params = useParams();
  const { user, siteid } = params;
 
    const [response, setResponse] = useState<Portfoliotype>();
    //const [image, setimage] = useState<string>(null);
    //const [navimage, setNavimage] = useState<string>(null);

    const [generating, setgenerating] = useState(true);
    //type socialtype = [{url: string; icon: string}];
    const socialdata = [{url: 'google.com', icon: 'ti-google'}, {url: 'google.com', icon: 'ti-facebook'}, {url: 'google.com', icon: 'ti-github'}, {url: 'google.com', icon: 'ti-twitter'}];





    useEffect(() => {
        getsite(parseInt(siteid), user, (data) => {
            setResponse(data)
            setgenerating(false)
        })
    }, [])


    return (<div className="bg-white overflow-hidden">
      {generating && <Loadingmodal />}
        <div className="relative group">
        {!generating && <NavProd logostr={response? response.navimg: ''} setlogo={(data: string) => {
          setResponse((prevState) => {
            return {
              ...prevState,
              navimg: data
            }
          })
        }} />}
        </div>
        <div className="relative group">
        <Header name={response? response['bio']['name'] :"Nobab Khan"} profession={response? response['bio']['profession'] :"Software Engineer"} gender={response? response['bio']['gender'] :true} links={socialdata} downloadcv={() =>{}}/>
        </div>
        <div className="relative group">

        <About name={response? response['bio']['name'] :"Nobab Khan"}profession={response? response['bio']['profession'] :"Nobab Khan"} bio={response? response['bio']['description'] :"Nobab Khan"} img={response?response.bio.img:null} downloadcv={() => {}} />

        </div>
        <div className="relative group">
        <Service wid={response? response['whatido']['description'] :"Nobab Khan"} services={response? response['whatido']['services'] :[
   {
    "icon": "bi bi-heart-fill",
    "name": "Cardiology"
   }
  ]} />
  </div>
        <div className="relative group">
          <Skills wcm={response? response['wcm']['description'] :"Nobab Khan"} service={response? response['whatido']['services'] :[{name: 'webdevelopment'}]} />
        </div>
        <div className="relative group">
          <PortFolio project={response?response['projects']:[[{name: 'mobile development', img: 'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_150.jpg', live: '', link: ''}]]} />
        </div>
        <div className="relative group">
          <Testimonial testi={response?response['testimonials']:[{comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}, {comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}, {comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}]} />
        </div>
        <Hireme />
        <div className="relative group">

        <Contact address={response?response.address:'Dhaka'} phone={response?response.phone: '01700000'} email={response?response.email:'kjgdkjkj@jkdk'}/>
        </div>
        <Footer />

    </div>);
}