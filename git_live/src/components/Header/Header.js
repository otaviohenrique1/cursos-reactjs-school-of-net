import React, { Component } from 'react';
import logo from "./../../logo.svg";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar foxed-tp navbar-dark bg-dark">
                <img className="App-logo" src={logo} alt="logo"/>
                <h2>Todo - SON</h2>
            </nav>
        );
    }
}