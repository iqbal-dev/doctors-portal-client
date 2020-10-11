import React from 'react';
import feature from '../../../images/Mask Group 3.png'

const FeaturedServices = () => {
    return (
        <div className="row container" style={{margin:'150px auto'}}>
            <div className="col-md-5">
                <div>
                    <img className="img-fluid" src={feature} alt=""/>
                </div>
            </div>
            <div className="col-md-7">
                <div style={{width:'400px',margin:'0 auto'}}>
                    <h1 className="py-5">Exceptional Dental <br /> care, on your terms</h1>
                    <p style={{lineHeight:'25px'}} className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis recusandae earum ad porro hic odit odio optio perspiciatis ut sit magni repellendus ipsa, neque facere quasi impedit maiores consectetur illo! Enim nostrum eveniet aut quam, cumque, consequatur, est quos deleniti adipisci dolor eligendi dolores. Itaque excepturi blanditiis natus sapiente aliquam.</p>
                    <button className="btn btn-primary  button mt-5">Learn More</button>
                </div>
            </div>
            </div>
    );
};

export default FeaturedServices;