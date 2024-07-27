// import React, { useEffect, useState } from "react";
// import Nav from "../sections/T1dev1/Nav";
// import Header from "../sections/T1dev1/Header";
// import '../assets/css/steller.css'
// import '../assets/vendors/themify-icons/css/themify-icons.css';
// import About from "../sections/T1dev1/About";
// import Service from "../sections/T1dev1/Service";
// import Skills from "../sections/T1dev1/Skils";
// import PortFolio from "../sections/T1dev1/PortFolio";
// import Testimonial from "../sections/T1dev1/Testimonial";
// import Hireme from "../sections/T1dev1/Hireme";
// import Contact from "../sections/T1dev1/Contact";
// import Footer from "../sections/T1dev1/Footer";
// //mport { TfiPencilAlt } from "react-icons/tfi";
// import { Portfoliotype } from "@/functions/types/Portfolio1type";


// export default function T1Test() {
    
//     const [socket, setSocket] = useState<WebSocket>(null);
//     const [response, setResponse] = useState<Portfoliotype>();
//     const [image, setimage] = useState<string>(null);
 
//     const [navimage, setNavimage] = useState<string>(null);
//    // const fileInputRef = useRef(null);
//     // enum SECTIONS{
//     //   NONE,
//     //   HEADER,
//     //   ABOUT,
//     //   SERVICES,
//     //   SKILLS,
//     //   PORTFOLIO,
//     //   TESTIMONIAL,
//     //   CONTACT
//     // }
//     //const [pagestate, setPageState] = useState<SECTIONS>(SECTIONS.NONE);
//     // const handleUploadButtonClick = () => {
//     //   // Trigger the file input click event when the "Upload" button is clicked
//     //   fileInputRef.current.click();
//     // };
//     // const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     //   const file = event.target.files?.[0];
//     //   if (file) {
//     //     const reader = new FileReader();
//     //     reader.onload = (e) => {
//     //       const imageUrl = e.target?.result as string;
//     //       setimage(imageUrl)
//     //     };
//     //     reader.readAsDataURL(file);
//     //   }
//     // };
//     useEffect(() => {
//         // Connect to WebSocket server
//         setNavimage(null);
//         setimage(null)
//         const ws = new WebSocket('wss://localhost:7001/ws/portfolio');
    
//         ws.onopen = () => {
//           console.log('WebSocket connected');
//           setSocket(ws);
//         };
    
//         ws.onmessage = (event) => {
//           const data = JSON.parse(JSON.parse(event.data))
//           console.log(data)

//           setResponse(data)
//         };
    
//         ws.onclose = () => {
//           console.log('WebSocket disconnected');
//           setSocket(null);
//         };
    
//         return () => {
//           // Clean up WebSocket connection
//           if (ws) {
//             ws.close();
//           }
//         };
//       }, []);
//       if(socket) {
//       socket!.send(JSON.stringify({
//         "name": "Nobab Khan",
//         "proffession": "Software Engineer"
//     }))
// }
// // let services =  [{name: 'webdevelopment'}, {name: 'webdevelopment'}, {name: 'webdevelopment'}, {name: 'webdevelopment'}];     
// //     if(response) {
// //       services = response['whatido']['services'].map((data) => {name: data['name']})
// //     }
// // }


//     return (<div className="bg-white">

//         <Nav logostr={navimage} />

//         <Header name={response? response['bio']['name'] :"Nobab Khan"} profession={response? response['bio']['profession'] :"Software Engineer"} gender={response? response['bio']['gender'] :true}/>
//         <About name={response? response['bio']['name'] :"Nobab Khan"}profession={response? response['bio']['profession'] :"Nobab Khan"} bio={response? response['bio']['description'] :"Nobab Khan"} img={image} />
//         <Service wid={response? response['whatido']['description'] :"Nobab Khan"} services={response? response['whatido']['services'] :[
//    {
//     "icon": "bi bi-heart-fill",
//     "name": "Cardiology"
//    }
//   ]} />
//           <Skills wcm={response? response['wcm']['description'] :"Nobab Khan"} service={response? response['whatido']['services'] :[{name: 'webdevelopment'}]} />
//           <PortFolio project={response?response['projects']:[[{name: 'mobile development', img: 'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_150.jpg'}]]} />
//           <Testimonial testi={response?response['testimonials']:[{comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}, {comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}, {comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}]} />
//         <Hireme />
//         <Contact address="Mirpur-1,Dhaka-1216, Bangladesh" phone="+8801766632383" email="knirob880@gmail.com"/>
//         <Footer />

//     </div>);
// }