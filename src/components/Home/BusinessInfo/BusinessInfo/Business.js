import React from 'react';
import { faPhoneVolume,faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'lorem ipsum dolor sit amet, consectetur adipis',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit our location',
        description: 'lorem ipsum dolor sit amet, consectetur adipis',
        icon: faMapMarked,
        background:'dark'
    },
    {
        title: 'Contact Now',
        description: '01792119624',
        icon: faPhoneVolume,
        background:'primary'
    },
]

const Business = () => {
    return (
        <section className="row justify-content-center" style={{width:'100%',margin:'0'}}>
            <div className="d-flex w-75 ">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default Business;