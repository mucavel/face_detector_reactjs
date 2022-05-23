import React from "react";
import './css/NavBar.css';
import brainLogo from './images/electro-brain.png'

const Navbar = () => {
    return(
        <div className="navbarContainer shadow-1 f4">
            <nav className="navbar">
                <div className="navlogo">
                    <span style={{display: 'flex'}}>
                        <img src={brainLogo} alt="Brain" />
                        <h1>Face Detector Brain</h1>
                    </span>
                </div>
                <div className="signout">
                    <p>Sign Out</p>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;