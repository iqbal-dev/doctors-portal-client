import React from 'react';
import Business from '../BusinessInfo/BusinessInfo/Business';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar.js/Navbar';
import './Header.css';

const Header = () => {

    return (
        <div className="header-contain">
            <div className="contain ">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
                <Business></Business>
            </div>
        </div>
    );
};

export default Header;