import React from "react";

function Contact() {
    return (
        <>
            <main>

                <div className="page-notification page-notification2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Contact</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact-section">
                    <div className="container">
                        <div className="d-none d-sm-block mb-5 pb-4">
                            <div id="map" style={{ height: "480px", position: "relative", overflow: "hidden" }}>
                                <div style={{ height: "100%", width: "100%", position: "absolute", top: "0px", 
                                left: "0px", backgroundColor: "rgb(229, 227, 223)" }}>
                                   <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3948.0082329215766!2d77.22040592501051!3d8.301978291733139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04553ed8558b91%3A0x77b81351fa895230!2sOrangeMegaSoftware%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1701508247153!5m2!1sen!2sin"
                width="6000"
                height="500"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onFocus={() => { }} onBlur={() => { }} placeholder="Enter Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="name" id="name" type="text" onFocus={() => { }} onBlur={() => { }} placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="email" id="email" type="email" onFocus={() => { }} onBlur={() => { }} placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="subject" id="subject" type="text" onFocus={() => { }} onBlur={() => { }} placeholder="Enter Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-home"></i></span>
                                    <div className="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                    <div className="media-body">
                                        <h3>+1 253 565 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-email"></i></span>
                                    <div className="media-body">
                                        <h3>support@colorlib.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Contact;
