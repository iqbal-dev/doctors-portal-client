import React from 'react';

const TestimonialInfo = ({testimonialInfo}) => {
    return (
            <div className="col-md-4">
                    <div className="content">
                            <p>{testimonialInfo.description}</p>
                        <div className="d-flex mt-5 mb-3">
                            <div className="col-md-5">
                                <img className="img-fluid" src={testimonialInfo.img} alt=""/>
                            </div>
                            <div className="col-md-7 mt-3">
                                <h5 style={{color:'#12D0DC'}}>{testimonialInfo.name}</h5>
                                <small>{testimonialInfo.city}</small>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default TestimonialInfo;