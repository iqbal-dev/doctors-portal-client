import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="pt-3">
<nav className="navbar navbar-expand-lg navbar-light">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5" to="/dental">Dental Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/review">Reviews</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/blogs">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;