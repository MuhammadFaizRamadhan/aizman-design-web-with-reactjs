// inspirasi https://bbbootstrap.com/snippets/simple-navbar-hover-17011029 
// inspirasi https://bootstrap-menu.com/detail-basic-hover.html

import React from "react";
import '../style/navbar.css';
import Media from "../components/media";
import Fade from 'react-reveal/Fade';
import Logo from "../assets/navbar/logo-aizman.png"
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    
    render () {
        return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="nav-brand" to="/">
                        <img className="navbarbrand" src={Logo}></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        </div>
        )
    }
}