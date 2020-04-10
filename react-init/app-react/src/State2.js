import React, { Component } from 'react';

export default class State2 extends Component {
    constructor(props) {
        super(props);
        /*
            props -> Imutavel
            state -> Mutavel
        */
        this.state = {
            name: 'Leonan',
            age: 22
        }
        console.log(this.state);
    }
    
    render() {
        const { name, age } = this.state
        return(
            <div>
                <p>State</p>
                <p>{ name }</p>
                <p>{ age }</p>
            </div>
        );
    }
}