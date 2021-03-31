import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid p-0">
                    <a className="navbar-brand" href="javascripft:void(0)">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active" href="javascripft:void(0)"><NavLink exact to="/">Home</NavLink></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="javascripft:void(0)"> <NavLink exact to="/about/sagar">About</NavLink></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="javascripft:void(0)" tabIndex="-1"><NavLink exact to="/contact">Contact</NavLink></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;