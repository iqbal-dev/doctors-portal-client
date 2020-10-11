import React from 'react';
import Blog from '../Blog/Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeaturedServices from '../FetaturedServices/FeaturedServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import ServicesInfo from '../Servicesinfo/ServicesInfo/ServicesInfo';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServicesInfo></ServicesInfo>
            <FeaturedServices></FeaturedServices>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctor></Doctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;