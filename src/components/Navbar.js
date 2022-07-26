import React from "react";
import './Navbar.css'

function Navbar() {
    
    return (
        <div className="navbar">
            <p className="name"><i> NEWS </i></p>
            <a href="#"><p className="home">Home</p></a>
            <a href="#"><p className="contactUs">Contact Us</p></a>
            <a href="#"><p className="about">About</p></a>
        </div>
    );
}

export default Navbar;