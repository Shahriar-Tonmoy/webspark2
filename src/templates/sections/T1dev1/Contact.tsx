import React, { useEffect, useState } from "react";

export default function Contact(props: {address: string; phone: string; email: string}) {
    const [coordinates, setCoordinates] = useState(null);
    

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(props.address)}&format=json&limit=1`);
                const data = await response.json();
                if (data && data.length > 0) {
                    const { lat, lon } = data[0];
                    setCoordinates({ latitude: lat, longitude: lon });
                } else {
                    throw new Error('Location not found');
                }
            } catch (error) {
                console.error('Error fetching coordinates:', error);
            }
        };

        fetchCoordinates();
        console.log(coordinates);
    }, []);
    let latitude = 23.7644025 - 0.1;
    let longitude = 90.389015 - 0.1;

    if(coordinates) {
        latitude = parseFloat(coordinates.latitude) - 0.1;
        longitude = parseFloat(coordinates.longitude) - 0.1;
    }

    // Construct the URL with the new latitude and longitude values
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}%2C${longitude + 0.01}%2C${latitude + 0.01}&amp;layer=mapnik`;
    return (    <section id="contact" className="position-relative section">
    <div className="container text-center">
        <h6 className="subtitle">Contact</h6>
        <h6 className="section-title mb-4">Get In Touch With Me</h6>
        <p className="mb-5 pb-4">Drop you message here</p>

        <div className="contact text-left">
            <div className="form">
                <h6 className="subtitle">Available 24/7</h6>
                <h6 className="section-title mb-4">Get In Touch</h6>
                <form id="myForm">
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputSubject" name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="contact-message" cols={30} rows={5} className="form-control" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block rounded w-lg">Send Message</button>
                </form>
            </div>
            <div className="contact-infos">
                <div className="item">
                    <i className="ti-location-pin"></i>
                    <div className="">
                        <h5>Location</h5>
                        <p>{props.address}</p>
                    </div>                          
                </div>
                <div className="item">
                    <i className="ti-mobile"></i>
                    <div>
                        <h5>Phone Number</h5>
                        <p>{props.phone}</p>
                    </div>                          
                </div>
                <div className="item">
                    <i className="ti-email"></i>
                    <div className="mb-0">
                        <h5>Email Address</h5>
                        <p>{props.email}</p>
                    </div>
                </div>
            </div>                  
        </div>
    </div>  
    {coordinates &&
    <div id="map">
        <iframe src={mapUrl}></iframe>
    </div>}      
</section>)
}