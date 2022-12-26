import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <div className="footer">
            <a href="/" className="navbar-button"><p>Home</p></a>
            <a href="/login" className="navbar-button"><p>Students</p></a>
            <a href="/login" className="navbar-button"><p>Teachers</p></a>
            <a href="/register" className="navbar-button"><p>Register</p></a>
        </div>
    );
}

export default Navbar;
