import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portal1 extends Component {
    render() {
        return ReactDOM.createPortal(
            <h1>Hello from Portal - School of net</h1>,
            document.getElementById('div-portal')
        );
    }
}