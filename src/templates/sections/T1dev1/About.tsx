import React from "react";
import avatar from '../../assets/imgs/avatar.jpg';

export default function About(props: {name: string; profession: string; bio: string, img: string, downloadcv: () => void}) {
    return (<section id="about" className="section mt-3">
    <div className="container mt-5">
        <div className="row text-center text-md-left">
            <div className="col-md-3">
                <img src={props.img? props.img: avatar} alt="" className="img-thumbnail mb-4"/>
            </div>
            <div className="flex flex-col pl-md-4 col-md-9">
                <h6 className="title">{props.name}</h6>
                <p className="subtitle">{props.profession}</p>
                <p>{props.bio}</p>
                
                <button className="btn btn-primary rounded mt-3 mx-auto" onClick={props.downloadcv}>DOWNLOAD CV</button>                   
            </div>
        </div>
    </div>
</section>);
}