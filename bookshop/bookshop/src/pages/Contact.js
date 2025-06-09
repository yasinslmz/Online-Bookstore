import React from 'react'

export default function Contact() {

     // Cookie'den Token'ı alma
     const cookieString = document.cookie;
     const expiresMatch = cookieString.match(/(?:^|.*;\s*)expires\s*=\s*([^;]*).*$/);
     const authTokenMatch = cookieString.match(/(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$/);
     
     const expires = expiresMatch ? expiresMatch[1] : null;
     const authToken = authTokenMatch ? authTokenMatch[1] : null;
    
     console.log(expires);
     console.log(authToken);

    return (
        <div className="contact">

        
            <div className="contact-area mb-70 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="contact-info">
                                <h3>Contact info</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" />
                                        <span>Address: </span>
                                        Your address goes here.
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" />
                                        <span>Phone: </span>
                                        (800) 0123 4567 890
                                    </li>
                                    <li>
                                        <i className="fa fa-mobile" />
                                        <span>Email: </span>
                                        <a href="#">demo@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="contact-form">
                                <h3>
                                    <i className="fa fa-envelope-o" />
                                    Leave a Message
                                </h3>
                                <form
                                    id="contact-form"
                                    action="#"
                                >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-form-3">
                                                <input name="name" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-form-3">
                                                <input name="email" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-form-3">
                                                <input name="subject" type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-form-3">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message"
                                                    defaultValue={""}
                                                />
                                                <button className="submit" type="submit" onClick={(e)=>{
                                                    e.preventDefault();
                                                    alert("Mesajınız alınmıştır en yakın zamanda tarafınızla iletişime geçilecektir.");
                                                    window.location.reload();
                                                }}>
                                                    SEND MESSAGE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-messege" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
