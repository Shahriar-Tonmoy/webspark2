import React from "react";

export default function Footer() {
    return (<footer className="page-footer">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-6">
                <div className="flex flex-row">
                <p className="my-auto">Made with ❤️ by</p> <a href="http://www.genwebbuilder.com" target="_blank" className="ml-2 my-auto text-[#DD478B]"> GenWebBuilder</a>
                </div>

            </div>
            <div className="col-sm-6">
                <div className="socials">
                    <a className="social-item" href="javascript:void(0)"><i className="ti-facebook"></i></a>
                    <a className="social-item" href="javascript:void(0)"><i className="ti-google"></i></a>
                    <a className="social-item" href="javascript:void(0)"><i className="ti-github"></i></a>
                    <a className="social-item" href="javascript:void(0)"><i className="ti-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer> );
}