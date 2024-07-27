import React from "react";

export default function Testimonial(props: {testi: [{comment: string; name: string; profession: string}, {comment: string; name: string; profession: string}, {comment: string; name: string; profession: string}]}) {
    return (<section id="testmonial" className="section">
    <div className="container text-center">
        <h6 className="subtitle">Testmonial</h6>
        <h6 className="section-title mb-4">What People Say About Me</h6>
       


        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card testmonial-card border">
                        <div className="card-body">
                            <p>{props.testi[0].comment}</p>
                            <h1 className="title">{props.testi[0].name}</h1>
                            <h1 className="subtitle">{props.testi[0].profession}</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card testmonial-card border">
                        <div className="card-body">
                            <p>{props.testi[1].comment}</p>
                            <h1 className="title">{props.testi[1].name}</h1>
                            <h1 className="subtitle">{props.testi[1].profession}</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card testmonial-card border">
                        <div className="card-body">
                            <p>{props.testi[2].comment}</p>
                            <h1 className="title">{props.testi[2].name}</h1>
                            <h1 className="subtitle">{props.testi[2].profession}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>);
}