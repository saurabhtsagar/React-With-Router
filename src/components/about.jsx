// this component for about page
import React, { Component } from 'react';
class About extends Component {
    state = {
        username: ''
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({ username: params.username });
    }

    render() {
        return (
            <div>
                <h1>Hello <i>{this.state.username}</i>, About Page</h1>
            </div>
        );
    }
}
export default About;