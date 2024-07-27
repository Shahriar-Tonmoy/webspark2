import React from "react";

export default function PortFolio(props: {project: {name: string; img: string, live: string, link: string}[][]}) {
    return (<section id="portfolio" className="section">
    <div className="container text-center">
        <h6 className="subtitle">Portfolio</h6>
        <h6 className="section-title mb-4">Check My Wonderful Works</h6>

        <div className="row">
            {props.project.map((data) => <div className="col-sm-4">
                {data.map((dts) => <div className="img-wrapper">
                    <img src={dts.img} alt="" className="w-1/4 h-72"/>
                    <div className="overlay">
                        <div className="overlay-infos">
                            <h5>{dts.name}</h5>
                            <a href={dts.live}><i className="ti-zoom-in"></i></a>
                            <a href={dts.link}><i className="ti-link"></i></a>
                        </div>  
                    </div>
                </div>)}                
            </div>)}
            {/* <div class="col-sm-4">
                <div class="img-wrapper">
                    <img src="$img3" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>$Project3</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>  
                    </div>
                </div>
                <div class="img-wrapper">
                    <img src="$img4" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>$Project4</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>                              
                    </div>
                </div>                  
            </div>
            <div class="col-sm-4">
                <div class="img-wrapper">
                    <img src="$img5" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>$Project5</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>  
                    </div>
                </div>
                <div class="img-wrapper">
                    <img src="$img6" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>$Project6</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>                              
                    </div>
                </div>                  
            </div> */}
        </div>

    </div>
</section>);
}