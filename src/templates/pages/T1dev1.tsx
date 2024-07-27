import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Nav from "../sections/T1dev1/Nav";
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
import { TfiPencilAlt } from "react-icons/tfi";
import { Portfoliotype } from "@/functions/types/Portfolio1type";
import { SECTIONS } from "@/functions/enums/service";
import { getclassnames, saveImage, saveSite } from "@/functions/APIRequests/Portfoliorequest";
import { FiPlusCircle } from "react-icons/fi";
import SiteGeneratingModal from "@/components/SiteGeneratingModal";
import { USERCONFIGTYPE } from "@/functions/types/userCongigtype";
import { APPCOOKIE, USERCONFIG, getAppCookie } from "@/pages/Fuctions/appcookie/appcookie";
import '../../index.css';

export default function T1dev1() {
    
    const [socket, setSocket] = useState<WebSocket>(null);
    const [response, setResponse] = useState<Portfoliotype>();
    //const [image, setimage] = useState<string>(null);
    //const [navimage, setNavimage] = useState<string>(null);
    const [working, setWorking] = useState<boolean>(false);
    const fileInputRef = useRef(null);
    const navfileInputRef = useRef(null);
    const pdfinputref = useRef(null);
    const [generating, setgenerating] = useState(true);
    const [userobj, setuserobj] = useState<USERCONFIGTYPE>(null);
    //type socialtype = [{url: string; icon: string}];
    const socialdata = [{url: 'google.com', icon: 'ti-google'}, {url: 'google.com', icon: 'ti-facebook'}, {url: 'google.com', icon: 'ti-github'}, {url: 'google.com', icon: 'ti-twitter'}];
    const [social, setsocial] = useState(socialdata);
    const [pagestate, setPageState] = useState<SECTIONS>(SECTIONS.NONE);
    const [cv, setCV] = useState<string>(null);
    const [cookie, setcookie] = useState<string>(null)
    useEffect(() => {
      setcookie(getAppCookie(APPCOOKIE))
    })
    const handleUploadButtonClick = () => {
      // Trigger the file input click event when the "Upload" button is clicked
      fileInputRef.current.click();
    };
    const handlenavUploadButtonClick = () => {
      // Trigger the file input click event when the "Upload" button is clicked
      navfileInputRef.current.click();
    };
    const handlepdfUploadButtonClick = () => {
      // Trigger the file input click event when the "Upload" button is clicked
      console.log('clicked')
      pdfinputref.current.click();
    };
    const setimgurl = (data: string) => {
      console.log(data)
      setResponse((prevstate) => {
        return {
          ...prevstate,
          bio: {
            ...prevstate.bio,
            img: data
          }

        }
      })
    }
    const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target?.result as string;
          console.log(imageUrl)
          saveImage(imageUrl, cookie,setimgurl);
        };
        reader.readAsDataURL(file);
      }
    };
    const handlenavImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target?.result as string;
          saveImage(imageUrl, cookie, (data: string) => {
            setResponse((prevstate) => {
              return {
                ...prevstate,
                navimg: data
              }
            })
          })
        };
        reader.readAsDataURL(file);
      }
    };
    useEffect(() => {
      setuserobj(JSON.parse(getAppCookie(USERCONFIG)))
    }, [])
    useEffect(() => {
        // Connect to WebSocket server
        if(userobj) {
          setgenerating(true);
          console.log(userobj)
        setsocial(socialdata.map((data) => ({url: data.url, icon: data.icon})))
        const ws = new WebSocket('wss://genwebbuilder.com:7001/ws/portfolio');
    
        ws.onopen = () => {
          console.log('WebSocket connected');
          setSocket(ws);
        };
    
        ws.onmessage = (event) => {
          const data = JSON.parse(JSON.parse(event.data))
          console.log('data received')
          ws.send('done');
          const newdata = {
            ...data,
            phone: userobj.phone,
            email: userobj.email,
            address: userobj.address,
            bio: {
              ...data.bio,
              img: '',
            },
            navimg: '',
          }
          console.log(newdata)
          saveSite(newdata, cookie);

          setResponse(newdata)
          setgenerating(false)
        };
    
        ws.onclose = () => {
          console.log('WebSocket disconnected');
          setSocket(null);
          setgenerating(false);
          //saveSite(response, cookie);
        };
    
        return () => {
          // Clean up WebSocket connection
          if (ws) {
            ws.close();
          }
        };
      }
      }, [userobj]);
      if(socket && userobj) {
      socket!.send(JSON.stringify({
        "name": userobj.name,
        "proffession": userobj.profession
    }))
}
// let services =  [{name: 'webdevelopment'}, {name: 'webdevelopment'}, {name: 'webdevelopment'}, {name: 'webdevelopment'}];     
//     if(response) {
//       services = response['whatido']['services'].map((data) => {name: data['name']})
//     }
const onnamechange = (e: ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  setResponse(prevUser => ({
    ...prevUser,
    bio : {name: value, profession: prevUser.bio.profession, gender: prevUser.bio.gender, description: prevUser.bio.description, img: prevUser.bio.img}
  }));
}
const onprofessionchange = (e: ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  setResponse(prevUser => ({
    ...prevUser,
    bio : {name: prevUser.bio.name, profession: value, gender: prevUser.bio.gender, description: prevUser.bio.description, img: prevUser.bio.img}
  }));
}
const onaboutchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  const { value } = e.target;
  setResponse(prevUser => ({
    ...prevUser,
    bio : {name: prevUser.bio.name, profession: prevUser.bio.profession, gender: prevUser.bio.gender, description: value, img: prevUser.bio.img}
  }));
}
const onwidchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  const { value } = e.target;
  setResponse(prevUser => ({
    ...prevUser,
    whatido: {description: value, services: prevUser.whatido.services}
  }));
}
const onlinkchange = (e: ChangeEvent<HTMLInputElement>, n: number) => {
  const { value } = e.target;
  setsocial(prevstate => {
    return prevstate.map((data, index) => {
      if (n === index) {
        return { ...data, url: value }; // Update the URL for the matched index
      }
      return data;
    });
  });
};



const setnavpagestate = (data: SECTIONS) => {
  setPageState(data);
}

const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
  console.log('trying to upload')
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const pdfString = await readFileAsString(file);
    setCV(pdfString);
    // You can now use pdfString as needed, for example, save it to state or send it to the server
  } catch (error) {
    console.error('Error reading PDF file:', error);
  }
};

const readFileAsString = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read file as string'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const downloadPdf = () => {
  // Convert PDF string back to Blob
  if(cv) {
  const byteCharacters = atob(cv.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'cv.pdf'; // Set desired file name

  // Simulate a click on the link
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
};

const onservicenamechange = (e: ChangeEvent<HTMLInputElement>, n: number) => {
  const { value } = e.target;
  setResponse(prevUser => ({
    ...prevUser,
    whatido: {description: prevUser.whatido.description, services: prevUser.whatido.services.map((data, index) => {
      return { ...data, name: n === index ? value : data.name}
    })}
  }));
};
const updateicon = () => {
  setWorking(true);
  getclassnames(response.whatido.services, onserviceupdate, (data)=>{setWorking(data)});
}
const onserviceupdate = (service: {icon: string; name: string}[]) => {
  setResponse(prevUser => ({
    ...prevUser,
    whatido: {description: prevUser.whatido.description, services: service}
  }));
};

const handleproejctimage = async (event: ChangeEvent<HTMLInputElement>, indx: number, indy: number) => {
  console.log('trying to upload')
  const file = event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      saveImage(imageUrl, cookie, (data1: string) => {
        setResponse(prevUser => ({
          ...prevUser,
          projects: prevUser.projects.map((data2, index) => {
            return data2.map((data3, ind1) => {
              const valueat = indx === index && indy === ind1
              if (valueat) {
                console.log(indx.toString()+' x, '+indy.toString()+' y')
                console.log(index.toString()+' x1, '+ind1.toString()+' y1')
              }
              return {
                ...data3,
                img: valueat ? data1 : data3.img
              }
            })
          })
        }));
      })
    };
    reader.readAsDataURL(file);
  }

};

    return (<div className="bg-white overflow-hidden">
      {generating && <SiteGeneratingModal />}
        <div className="relative group">
        {!generating && <Nav logostr={response? response.navimg: ''} setlogo={(data: string) => {
          setResponse((prevState) => {
            return {
              ...prevState,
              navimg: data
            }
          })
        }} pagestate={pagestate} setpagestate={setnavpagestate}  />}
        {pagestate === SECTIONS.NAV && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70">
          <div className="h-fit w-72 my-auto mx-auto bg-slate-200 rounded-lg">
            <div className="flex w-full"><p className="ml-auto m-2 cursor-pointer" onClick={() => {setPageState(SECTIONS.NONE)}}>X</p></div>
          <div className="p-4 flex flex-col my-auto text-black gap-2">

            <input
        type="file"
        ref={navfileInputRef}
        className="hidden"
        accept=".jpg, .png, .jpeg"
        onChange={handlenavImageInputChange}
        />
        <button className="p-2 bg-slate-500 rounded-lg bg-opacity-100 opacity-100 text-white" onClick={handlenavUploadButtonClick}>Upload Photo</button>
          </div>
          </div>
        </div>}
        </div>
        <div className="relative group">
          {pagestate !== SECTIONS.HEADER && <div className="hidden bg-slate-200 absolute z-10 top-1/2 px-8 py-2 left-1/2 group-hover:flex text-4xl rounded-xl text-[#4C35DE] justify-center cursor-pointer shadow-xl" onClick={() => {setPageState(SECTIONS.HEADER)}}><p className="my-auto text-lg mx-2"><TfiPencilAlt /></p> <p className="my-auto">Edit</p></div>}
        <Header name={response? response['bio']['name'] :"Nobab Khan"} profession={response? response['bio']['profession'] :"Software Engineer"} gender={response? response['bio']['gender'] :true} links={social} downloadcv={downloadPdf}/>
        {pagestate === SECTIONS.HEADER && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70">
          <div className="h-fit w-72 my-auto mx-auto bg-slate-200 rounded-lg overflow-y-auto">
            <div className="flex w-full"><p className="ml-auto m-2 cursor-pointer" onClick={() => {setPageState(SECTIONS.NONE)}}>X</p></div>
          <div className="p-4 flex flex-col my-auto text-black gap-2">
            <p>Name</p>
          <input className="opacity-70 p-2 rounded-md w-full" onChange={onnamechange} type="text" value={response? response['bio']['name'] :"Nobab Khan"} />
          <p>Profession</p>
          <input className="opacity-70 p-2 rounded-md w-full" onChange={onprofessionchange} type="text" value={response? response['bio']['profession'] :"Nobab Khan"} />
          {social.map((data, inumber) =><div><p>{data.icon.split('-')[1]+' link'}</p><input className="opacity-70 p-2 rounded-md w-full" value={data.url} onChange={(e) => {onlinkchange(e, inumber)}} /></div>)}
          <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" ref={pdfinputref} />
          <button className="p-2 bg-slate-500 rounded-md w-full" onClick={() => {handlepdfUploadButtonClick()}}>Choose PDF</button>
          <button className="p-2 bg-slate-500 rounded-md w-full" onClick={() => {setPageState(SECTIONS.NONE)}}>Save</button>
          </div>
          </div>
        </div>}
        </div>
        <div className="relative group">
        {pagestate !==SECTIONS.ABOUT && <div className="hidden bg-slate-200 absolute z-10 top-1/2 px-8 py-2 left-1/2 group-hover:flex text-4xl rounded-xl text-[#4C35DE] justify-center cursor-pointer shadow-xl" onClick={() => {setPageState(SECTIONS.ABOUT)}}><p className="my-auto text-lg mx-2"><TfiPencilAlt /></p> <p className="my-auto">Edit</p></div>}
        <About name={response? response['bio']['name'] :"Nobab Khan"}profession={response? response['bio']['profession'] :"Nobab Khan"} bio={response? response['bio']['description'] :"Nobab Khan"} img={response?response.bio.img:null} downloadcv={downloadPdf} />
        {pagestate === SECTIONS.ABOUT && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70">
          <div className="h-fit w-72 my-auto mx-auto bg-slate-200 rounded-lg">
            <div className="flex w-full"><p className="ml-auto m-2 cursor-pointer" onClick={() => {setPageState(SECTIONS.NONE)}}>X</p></div>
          <div className="p-4 flex flex-col my-auto text-black gap-2">
            <p>About</p>
            <textarea className="bg-white bg-opacity-100 opacity-100 h-fit overflow-hidden" rows={10} value={response? response.bio.description :"Nobab Khan"} onChange={onaboutchange} ></textarea>
            <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".jpg, .png, .jpeg"
        onChange={handleImageInputChange}
        />
        <button className="p-2 bg-slate-500 rounded-lg bg-opacity-100 opacity-100 text-white" onClick={handleUploadButtonClick}>Upload Photo</button>
          </div>
          </div>
        </div>}
        </div>
        <div className="relative group">
        {pagestate !==SECTIONS.SERVICES && <div className="hidden bg-slate-200 absolute z-10 top-1/2 px-8 py-2 left-1/2 group-hover:flex text-4xl rounded-xl text-[#4C35DE] justify-center cursor-pointer shadow-xl" onClick={() => {setPageState(SECTIONS.SERVICES)}}><p className="my-auto text-lg mx-2"><TfiPencilAlt /></p> <p className="my-auto">Edit</p></div>}
        <Service wid={response? response['whatido']['description'] :"Nobab Khan"} services={response? response['whatido']['services'] :[
   {
    "icon": "bi bi-heart-fill",
    "name": "Cardiology"
   }
  ]} />
  {pagestate === SECTIONS.SERVICES && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70">
          <div className="h-fit w-2/3 my-auto mx-auto bg-slate-200 rounded-lg">
            <div className="flex w-full"><p className="ml-auto m-2 cursor-pointer" onClick={() => {setPageState(SECTIONS.NONE)}}>X</p></div>
          <div className="p-4 flex flex-col my-auto text-black gap-2">
            <p>What I do?</p>
          <textarea className="bg-white bg-opacity-100 opacity-100 h-fit overflow-hidden" rows={10} value={response? response.whatido.description :"Nobab Khan"} onChange={onwidchange} ></textarea>
            <p>Services</p>
            {response.whatido.services.map((data, index) => <input className="p-2 rounded-lg my-1" value={data.name} onChange={(e) => {onservicenamechange(e, index)}} />)}
        <button className="p-2 bg-slate-500 rounded-lg bg-opacity-100 opacity-100 text-white flex flex-row justify-center" onClick={()=> {setResponse(prevUser => {
          const serv = prevUser.whatido.services;
          serv.push({icon: '', name: ''})
          return {
    ...prevUser,
    whatido: {description: prevUser.whatido.description, services: serv}
  }});}}><p className="my-auto mx-2 text-xl"><FiPlusCircle /></p><p className="my-auto"> Add Service</p></button>
    <button className="p-2 bg-slate-500 rounded-lg bg-opacity-100 opacity-100 text-white" onClick={updateicon}>{working?"working...":"Update"}</button>
          </div>
          </div>
        </div>}
  </div>
        <div className="relative group">
        {pagestate !==SECTIONS.SKILLS && <div className="hidden bg-slate-200 absolute z-10 top-1/2 px-8 py-2 left-1/2 group-hover:flex text-4xl rounded-xl text-[#4C35DE] justify-center cursor-pointer shadow-xl" onClick={() => {setPageState(SECTIONS.ABOUT)}}><p className="my-auto text-lg mx-2"><TfiPencilAlt /></p> <p className="my-auto">Edit</p></div>}
          <Skills wcm={response? response['wcm']['description'] :"Nobab Khan"} service={response? response['whatido']['services'] :[{name: 'webdevelopment'}]} />
        </div>
        <div className="relative group">
        {pagestate !==SECTIONS.PORTFOLIO && <div className="hidden bg-slate-200 absolute z-10 top-1/2 px-8 py-2 left-1/2 group-hover:flex text-4xl rounded-xl text-[#4C35DE] justify-center cursor-pointer shadow-xl" onClick={() => {setPageState(SECTIONS.PORTFOLIO)}}><p className="my-auto text-lg mx-2"><TfiPencilAlt /></p> <p className="my-auto">Edit</p></div>}
          <PortFolio project={response?response['projects']:[[{name: 'mobile development', img: 'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_150.jpg', live: '', link: ''}]]} />
          {pagestate === SECTIONS.PORTFOLIO && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70">
          <div className="h-3/4 w-1/3 my-auto mx-auto bg-slate-200 rounded-lg overflow-hidden">
            <div className="flex w-full"><p className="ml-auto m-2 cursor-pointer" onClick={() => {setPageState(SECTIONS.NONE)}}>X</p></div>
          <div className="p-4 flex flex-col my-auto text-black gap-2 h-full overflow-y-auto">
            {response!.projects.map((data, index) => {
              return data.map((dataj, index2) => {
                return (<div className="flex flex-col w-full">
                <p>Project name</p>
                <input value={dataj.name} />
                <p>Image link</p>
                <input
        type="file"
        
        accept=".jpg, .png, .jpeg"
        onChange={(e) => {handleproejctimage(e, index, index2)}}
        />
                <p>Live project Link</p>
                <input value={dataj.live} />
                <p>Live codebase Link</p>
                <input value={dataj.link} />
              </div>)})
            })}
        <button className="p-2 bg-slate-500 rounded-lg bg-opacity-100 opacity-100 text-white" onClick={() => {setPageState(SECTIONS.NONE)}}>Update</button>
          </div>
          </div>
        </div>}
        </div>
        <div className="relative group">
        {pagestate !==SECTIONS.TESTIMONIAL && <div className="hidden bg-slate-200 absolute z-10 top-1/2 px-8 py-2 left-1/2 group-hover:flex text-4xl rounded-xl text-[#4C35DE] justify-center cursor-pointer shadow-xl" onClick={() => {setPageState(SECTIONS.TESTIMONIAL)}}><p className="my-auto text-lg mx-2"><TfiPencilAlt /></p> <p className="my-auto">Edit</p></div>}
          <Testimonial testi={response?response['testimonials']:[{comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}, {comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}, {comment: 'He is good at his work', name: 'Jhon Doe', profession: 'Client'}]} />
          {pagestate === SECTIONS.TESTIMONIAL && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70">
          <div className="h-3/4 w-1/3 my-auto mx-auto bg-slate-200 rounded-lg overflow-hidden">
            <div className="flex w-full"><p className="ml-auto m-2 cursor-pointer" onClick={() => {setPageState(SECTIONS.NONE)}}>X</p></div>
          <div className="p-4 flex flex-col my-auto text-black gap-2 h-full overflow-y-auto">
            {response!.testimolials.map((dataj) => (<div className="flex flex-col w-full">
                <p>Name</p>
                <input value={dataj.name} />
                <p>Profession</p>
                <input value={dataj.profession} />
                <p>Comment</p>
                <textarea value={dataj.comment} ></textarea>
              </div>))
            }
        <button className="p-2 bg-slate-500 rounded-lg bg-opacity-100 opacity-100 text-white" onClick={() => {setPageState(SECTIONS.NONE)}}>Update</button>
          </div>
          </div>
        </div>}
        </div>
        <Hireme />
        <div className="relative group">
        <div className="hidden bg-slate-200 absolute z-10 top-1/2 px-8 py-2 left-1/2 group-hover:flex text-4xl rounded-xl text-[#4C35DE] justify-center cursor-pointer shadow-xl"><p className="my-auto text-lg mx-2"><TfiPencilAlt /></p> <p className="my-auto">Edit</p></div>
        <Contact address={response?response.address:'Dhaka'} phone={response?response.phone: '01700000'} email={response?response.email:'kjgdkjkj@jkdk'}/>
        </div>
        <Footer />

    </div>);
}