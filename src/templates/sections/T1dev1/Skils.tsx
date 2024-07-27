import React from "react";

export default function Skills(props: {wcm: string; service: {name: string}[]}) {
    return (<section className="section">
    <div className="container text-center">
        <h6 className="subtitle">Skills</h6>
        <h6 className="section-title mb-4">Why Choose me</h6>
        <p className="mb-5 pb-4">{props.wcm}</p>
        {props.service.length > 2 &&
        <div className="row text-left">
            {props.service.map((data) =>
            <div className="col-sm-6">
                <h6 className="mb-3">{data.name}</h6>
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}}><span>89%</span></div>
                </div>
            </div>)}
            {/* <div className="col-sm-6">
                <h6 className="mb-3">{props.service[1].name}</h6>
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "83%"}}><span>83%</span></div>
                </div>
            </div>
            <div className="col-sm-6">
                <h6 className="mb-3">{props.service[2].name}</h6>
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "95%"}}><span>95%</span></div>
                </div>
            </div>
            <div className="col-sm-6">
                <h6 className="mb-3">{props.service[3].name}</h6>
                <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "90%"}}><span>90%</span></div>
                </div>
            </div> */}
        </div>}
    </div>
</section>);
}