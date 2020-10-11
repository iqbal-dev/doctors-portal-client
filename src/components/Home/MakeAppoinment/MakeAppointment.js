import React from 'react';
import './MakeAppointment.css';
import doctorbg from '../../../images/5790-removebg.png'
const MakeAppointment = () => {
    return (
        <div className="container contain-appointment">
            <div className="overlay"></div>
            <div className="row">
                <div className="col-md-5 doctorBg">
                    <img className="img-fluid" src={doctorbg} alt=""/>
                </div>
                <div className="col-md-7 text-white py-5">
                    <h6 style={{color:'#1CC7C1'}}>APPOINTMENT</h6>
                    <h1>Make an Appointment <br /> Today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deleniti sed aliquam provident eveniet sapiente sit eum laboriosam odit modi.</p>
                    <button className="btn btn-primary button mt-5">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;