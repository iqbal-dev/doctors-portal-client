import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGooglePlus,faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3 text-center">
                    <h5 style={{color:'#12D0DC'}}>Emergency</h5>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                </div>
                <div className="col-md-3 text-center">
                    <h5 style={{color:'#12D0DC'}}>Emergency</h5>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                </div>
                <div className="col-md-3 text-center">
                    <h5 style={{color:'#12D0DC'}}>Emergency</h5>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>Emergency</li>
                </div>
                <div className="col-md-3 text-center">
                    <h5 style={{color:'#12D0DC'}}>Emergency</h5>
                    <li>Emergency</li>
                    <li>Emergency</li>
                    <li>
                        <Link><FontAwesomeIcon className="m-3" style={{fontSize:'20px'}} icon={faFacebook}></FontAwesomeIcon></Link>
                        <Link><FontAwesomeIcon className="m-3" style={{fontSize:'20px'}} icon={faGooglePlus}></FontAwesomeIcon></Link>
                        <Link><FontAwesomeIcon className="m-3" style={{fontSize:'20px'}} icon={faTwitter}></FontAwesomeIcon></Link>
                    </li>
                    <li className="my-5">
                        call Now <br/>
                         <button className="btn btn-primary button">+123456</button>
                    </li>
                </div>
            </div>
            <p className="text-center">copyright {new Date().getFullYear()} all right reserved.</p>
        </div>
    );
};

export default Footer;