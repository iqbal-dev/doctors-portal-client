import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container my-5 p-5 contact">

            <div className="contact-overlay d-flex align-items-center">
                <form action="" className="text-center">
                    <h5 className="text-primary">Contact  Us</h5>
                    <h2 className="mb-5 text-white">Always Contact With us</h2>
                    <input type="email" name="email" placeholder="Enter your mail address"/><br/>
                    <input type="text" name="subject" placeholder="Enter your subject"/>
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Your Message" />
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;