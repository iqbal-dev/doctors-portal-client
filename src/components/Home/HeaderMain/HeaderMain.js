import React from 'react';
import image from '../../../images/Mask Group 1.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height: '700px',width:'100%'}}  className="row align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum, excepturi qui tenetur et delectus!</p>
                <button className="btn btn-primary  button" >Get Appointment</button>
            </div>
            <div className="col-md-6 ">
                <img src={image} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;