import React from 'react';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doctor from '../../../images/5790-removebg.png'
const doctorInfo = [
    {
        name: 'Rashid Kabir',
        img: doctor,
        mobile: '01792119624',
        icon:faPhoneVolume
    },
    {
        name: 'Rashid Kabir',
        img: doctor,
        mobile: '01792119624',
        icon:faPhoneVolume
    },
    {
        name: 'Rashid Kabir',
        img: doctor,
        mobile: '01792119624',
        icon:faPhoneVolume
    },
]

const Doctor = () => {
    return (
        <div className="row container" style={{margin:'0 auto'}}>
            {
                doctorInfo.map(doctor =>
                    <div className="col-md-4">
                        <div className="text-center">
                            <img style={{ height:'300px'}} className="img-fluid" src={doctor.img} alt=""/>
                            <h5>{doctor.name}</h5>
                            <div className="d-flex justify-content-center">
                                <FontAwesomeIcon className="mr-2 text-primary" icon={doctor.icon}></FontAwesomeIcon>
                                <p>{doctor.mobile}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Doctor;