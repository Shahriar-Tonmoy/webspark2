import { Portfoliotype } from "../types/Portfolio1type";

function getclassnames(services: {icon:string; name: string}[], setSErvices: (data: {icon:string; name: string}[]) => void, working: (data: boolean) => void) {
const data = JSON.stringify({
    "names": services.map((data) => {return {name: data.name}})
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
      const data = JSON.parse(this.response);
      setSErvices(services.map((datas, index) => {return {name: datas.name, icon: data[index].icon}}));
      working(false);
    }
  });
  
  xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/iconclass");
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);
}

function saveImage(img: string, cookie: string, seturl: (data: string) => void) {
  const imgs = [];
  imgs.push(img);
  const data = JSON.stringify({
      "img": imgs
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
        const data = JSON.parse(this.response);
        seturl(data.url);
      }
    });
    
    xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/savephoto");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer "+cookie);
    
    xhr.send(data);
    console.log('sent');
  }

  function saveSite(datas: Portfoliotype, cookie: string) {
    console.log('function called')
    console.log(datas)

    const data = JSON.stringify(datas);
    console.log(data)
      
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/savesite");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer "+cookie);
      
      xhr.send(data);
      console.log('sent');
    }

    function getsite(id: number,email: string,setsite: (data: Portfoliotype) => void) {
      
      const data = JSON.stringify({
        "id": id,
        "user": email
      });
      console.log(data)
        
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
            const res = JSON.parse(JSON.parse(this.response))
            setsite(res)
          }
        });
        
        xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/getsite");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.send(data);
        console.log('sent');
      }

  
  function sendquery(query: string) {
    const data = JSON.stringify({
      "query": query
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "https://localhost:7001/api/v1/aiquery");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send(data);
  }

  export {getclassnames, saveImage, saveSite, getsite, sendquery}