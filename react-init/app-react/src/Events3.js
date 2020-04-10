import React, { Component } from 'react';

export default class Events3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = (event) => {
        // Pega dado de 1 input
        this.setState({
            name: event.target.value
        });
        console.log('STATE', this.state);
    }

    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Enter your name..."/>
                <button type="button">Ok!</button>
            </div>
        );
    }
}