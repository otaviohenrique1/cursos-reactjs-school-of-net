import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from "./components/HeaderComponent";

export default class param1 extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
      </div>
    );
  }
}
