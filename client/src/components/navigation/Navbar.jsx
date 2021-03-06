import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../../css/DashboardStyles/Creative.css';
// import './Creative.min.css';

class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="\">Secret Supper Club</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#services">How it works</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Gallery</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/publicevents">Events</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/login">Log In/Sign Up</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;