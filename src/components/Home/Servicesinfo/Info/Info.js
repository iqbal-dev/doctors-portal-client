import React from 'react';

const Info = ({service}) => {
    return (
        <div className="col-md-4">
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h5 style={{margin:'20px 0'}}>{service.title}</h5>
            <p>{service.description}</p>
        </div>
    );
};

export default Info;