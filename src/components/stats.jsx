import React, { Component } from 'react';
import './scss/stats.css';
import logo from '../assets/images/man.svg';
class Statistics extends Component {
    state = {}
    render() {
        return (
            <div className="stats">
                <div className="d-flex flex-sm-column flex-md-row flex-lg-row align-items-start bg-primary mb-3 bg-primary justify-content-lg-start justify-content-md-between justify-content-sm-end ">
                    <div className="flexFill justify-content-strtch">
                        <div className="card">
                            <img src={logo} className="card-img-top m-auto" alt="..." />
                            <div className="card-body">
                                <div className="d-flex flex-sm-column flex-md-row flex-lg-row mb-3 bg-secondary align-items-stretch">
                                    <div className="body_items p-2 bg-success">Name</div>
                                    <div className="body_items p-2 bg-info">Age</div>
                                    <div className="body_items p-2 bg-warning">Designation</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center m-2">
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img src={logo} className="card-img-top m-auto" alt="..." />
                        <div className="card-body">
                            <div className="d-flex flex-sm-column flex-md-row flex-lg-row mb-3 bg-secondary align-items-stretch">
                                <div className="body_items p-2 bg-success">Name</div>
                                <div className="body_items p-2 bg-info">Age</div>
                                <div className="body_items p-2 bg-warning">Designation</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-2">
                            <button className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>

                    <div className="card" >
                        <img src={logo} className="card-img-top m-auto" alt="..." />
                        <div className="card-body">
                            <div className="d-flex flex-sm-column flex-md-row flex-lg-row mb-3 bg-secondary align-items-stretch">
                                <div className="body_items p-2 bg-success">Name</div>
                                <div className="body_items p-2 bg-info">Age</div>
                                <div className="body_items p-2 bg-warning">Designation</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-2">
                            <button className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>

                    <div className="card" >
                        <img src={logo} className="card-img-top m-auto" alt="..." />
                        <div className="card-body">
                            <div className="d-flex flex-sm-column flex-md-row flex-lg-row mb-3 bg-secondary align-items-stretch">
                                <div className="body_items p-2 bg-success">Name</div>
                                <div className="body_items p-2 bg-info">Age</div>
                                <div className="body_items p-2 bg-warning">Designation</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-2">
                            <button className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Statistics;