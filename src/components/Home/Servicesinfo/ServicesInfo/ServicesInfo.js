import React from 'react';
import flouride from '../../../../images/001-dental.png';
import cavity from '../../../../images/tooth (1).png';
import teeth from '../../../../images/tooth.png';
import Info from '../Info/Info';

const servicesinfo = [
    {
        title: 'Flouride Treatment',
        img: flouride,
        description: 'lorem ipsum dolor sit amet, consectetur adipis,ipsum atodin koi chila',
    },
    {
        title: 'Cavity Filling',
        img: cavity,
        description: 'lorem ipsum dolor sit amet, consectetur adipis,ipsum atodin koi chila',
    },
    {
        title: 'Teeth Whitening',
        img: teeth,
        description: 'lorem ipsum dolor sit amet, consectetur adipis,ipsum atodin koi chila',
    },
]
const ServicesInfo = () => {
    return (
        <section className="text-center text-secondary" style={{marginTop:'150px'}}>
            <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            <section className="row justify-content-center " style={{width:'100%',margin:'0'}}>
            <div className="d-flex w-75 mt-5 pt-5">
            {
                servicesinfo.map(service => <Info service={service}></Info>)
            }
            </div>
        </section>
        </section>
    );
};

export default ServicesInfo;