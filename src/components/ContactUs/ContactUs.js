import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        
    }
    return (
        <div className="contact-bg contact-div">
            <div className="container contact-content">
            <div className="row mb-5">
                <div className="col-md-4 offset-md-1">
                    <h3>Let us discuss about your Company to store items in our inventory.</h3>
                    <p>With well written codes, we manage all of your inventories carefully and take care & sell them to customers and marge all the profits between us</p>
                </div>
                <div className="col-md-6 offset-md-1">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" required name="" className="form-control" placeholder="Your Email Address" id=""/>
                        <input type="text" required name="" className="form-control my-4" placeholder="Your Name/Company's Name" id=""/>
                        <textarea id="message" required className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                        <button className="btn align-center btn-primary main-btn">Send</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;