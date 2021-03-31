import React, { Component } from 'react';
import Statistics from './stats'
import Hierarchy from "./hierarchy";
// start, end, center, baseline, or stretch
class Dashboard extends Component {
    state = { 
        selectedClientId: 9,
        selectedNode:''
     };

    onNodeSelectHandler = (node)=>{
        console.log(node);
        this.setState({selectedNode:node});
    }

    render() {
        return (
            <div className="row m-0">
                <div className="left w-100">selected Client : {this.state.selectedClientId}</div>
                <div className="left w-100">selected Node Of Given Client: {this.state.selectedNode}</div>

                <div className="col-md-4 bg-primary"><Hierarchy selectedClient={this.state.selectedClientId} onNodeSelect={this.onNodeSelectHandler}></Hierarchy></div>
                <div className="col-md-8 bg-warning p-2"><Statistics></Statistics></div>
            </div>
        );
    }
}

export default Dashboard;