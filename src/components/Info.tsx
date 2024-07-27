// import React from 'react'
import "../style/css/bootstrap.css"
import "../style/css/style.css"
import "../style/css/font-awesome.min.css"
import React from "react"
//  style={{ background: 'linear-gradient(45deg, #2c74cc, #412596)' }}
function Info() {
  return (
    <section className="info_section pt-2 bg-transparent bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950">
      <div className="info_social justify-center gap-20">
        <a href="">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      
      <div className="info_contact flex flex-col mt-4 mb-2">
        <a className="text-lg flex justify-center gap-2">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span>
            <span className="font-bold text-blue-200">Corporate Office: </span> House 450, Road 31, Mohakhali DOHS, Dhaka-1206
          </span>
        </a>
        <a className="text-lg flex justify-center gap-2">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>
            <span className="font-bold text-blue-200">Phone No: </span> +88 01768 884132, +88 01711 500002
          </span>
        </a>
        <a className="text-lg flex justify-center gap-2">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span>
            <span className="font-bold text-blue-200">Email: </span>info@exciteai.org or info@contessabd.com
          </span>
        </a>
      </div>      
    </section>
  )
}

export default Info