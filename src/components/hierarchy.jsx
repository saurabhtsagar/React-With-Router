import React, { Component } from 'react';

class Hierarchy extends Component {
    state = {};

    //selected node from hierarchy
    sendSelectedNode = () => {
        this.props.onNodeSelect('saurabh')
    }

    render() {
        return (
            <div>
                <h2>Hieararchy for Ciient : {this.props.selectedClient}</h2>
                <button onClick={this.sendSelectedNode}>Send Selected Node</button>
            </div>
        );
    }
}

export default Hierarchy;