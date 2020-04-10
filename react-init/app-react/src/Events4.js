import React, { Component } from 'react';

export default class Events4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }
    }

    handleChange = (event) => {
        // Pega dado de varios inputs
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log('STATE', this.state);
    }

    render() {
        return(
            <div>
                {/* <p>{this.state.name}</p> */}
                <input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Enter your name..."/>
                <input type="text" onChange={this.handleChange} name="age" id="age" placeholder="Enter your age..."/>
                <button type="button">Ok!</button>
            </div>
        );
    }
}