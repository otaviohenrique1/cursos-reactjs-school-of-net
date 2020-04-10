import React, { Component } from 'react';
import { Context } from "./Context";

export default class Component1 extends Component {
    render() {
        return (
            <Context.Consumer>
                { obj => ( <div>{JSON.stringify(obj)}</div> ) }
            </Context.Consumer>
        );
    }
}