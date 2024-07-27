import React from "react";

export default function Service(props: {wid: string; services: {name: string; icon: string}[]}) {
    return (<section id="service" className="section">
    <div className="container text-center">
        <h6 className="subtitle">Service</h6>
        <h6 className="section-title mb-4">What I Do</h6>
        <p className="mb-5 pb-4">{props.wid}</p>

        <div className="row">
            {props.services.map((data) =>
            <div className="col-sm-6 col-md-3 mb-4">
                <div className="custom-card card border">
                    <div className="card-body">
                        <i className={data.icon}></i>
                        <h5>{data.name}</h5>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
</section>)
}