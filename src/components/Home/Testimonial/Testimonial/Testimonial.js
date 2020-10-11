import React from 'react';
import './Testimonial.css';
import image1 from '../../../../images/Ellipse 1.png';
import image2 from '../../../../images/Ellipse 2.png';
import image3 from '../../../../images/Ellipse 3.png';
import TestimonialInfo from '../TestimonailInfo/TestimonialInfo';
const testimonialInfo = [
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi asperiores accusantium inventore mollitia deleniti? Esse, vero! Ab fugit sed labore error quis. Sunt rem sint nostrum inventore, cum qui deleniti!',
        img:image1,
        name: 'Willsom Harry',
        city:'california'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi asperiores accusantium inventore mollitia deleniti? Esse, vero! Ab fugit sed labore error quis. Sunt rem sint nostrum inventore, cum qui deleniti!',
        img:image2,
        name:'Willsom Harry',
        city:'california'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi asperiores accusantium inventore mollitia deleniti? Esse, vero! Ab fugit sed labore error quis. Sunt rem sint nostrum inventore, cum qui deleniti!',
        img:image1,
        name:'Willsom Harry',
        city:'california'
    },
]

const Testimonial = () => {
    return (
        <div className="container my-5 py-5">
            <h5 style={{color:'#12D0DC'}}>TESTIMONIAL</h5>
            <h1>What's your Patients <br /> Says</h1>
            <div className="row my-5 py-5">
                {
                    testimonialInfo.map(testimonialInfo => <TestimonialInfo testimonialInfo={testimonialInfo}></TestimonialInfo>)
                }
            </div>
        </div>
    );
};

export default Testimonial;