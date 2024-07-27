import React from "react";
import Man from '../../assets/imgs/man.svg';
import female from '../../../assets/images/912-removebg-preview.png';

export default function Header(props: {name: string; profession: string, gender: boolean, links: {url: string, icon: string}[], downloadcv: () => void}) {

    return (<>
    <header className="header" id="home">
        <div className="container">
            <div className="infos">
                <h6 className="subtitle">hello,I'm</h6>
                <h6 className="title">{props.name}</h6>
                <p>{props.profession}</p>

                <div className="buttons pt-3">
                    <button className="btn btn-primary rounded">HIRE ME</button>
                    <button className="btn btn-dark rounded" onClick={props.downloadcv} >DOWNLOAD CV</button>
                </div>      

                <div className="socials mt-4">
                    {props.links.map((data) =>
                    <a className="social-item" href={data.url}><i className={data.icon}></i></a>)}
                    {/* <a className="social-item" href={props.links[1].url}><i className="ti-google"></i></a>
                    <a className="social-item" href={props.links[3].url}><i className="ti-github"></i></a>
                    <a className="social-item" href={props.links[4].url}><i className="ti-twitter"></i></a> */}
                </div>
            </div>              
            <div className="img-holder">

                {props.gender && <img src={Man} alt=""/>}
                {!props.gender && <img src={female} alt=""/>}
            </div>      
        </div>  

        <div className="widget">
            <div className="widget-item">
                <h2>124</h2>
                <p>Happy Clients</p>
            </div>
            <div className="widget-item">
                <h2>456</h2>
                <p>Project Completed</p>
            </div>
            <div className="widget-item">
                <h2>789</h2>
                <p>Awards Won</p>
            </div>
        </div>
    </header>
    </>)
}