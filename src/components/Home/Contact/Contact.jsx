import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <footer className="contact-part mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <div className="footer-content">
                            <h2 className="font-weight-bold">Let us handle your <br /> project professionally.</h2>
                            <p className="mt-3">With well written codes, we build amazing apps for all <br /> platforms, mobile and web app general.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Your email address" autocomplete="off" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="name" className="form-control" placeholder="Your name / company's name" autocomplete="off" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="4" autocomplete="off" placeholder="Your message"></textarea>
                            </div>
                            <button className="brand-btn font-weight-bold mt-3">SEND</button>
                        </form>
                    </div>
                </div>
                <div className="copy-content text-center">
                    <p>copyright Orange lab 2020</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;