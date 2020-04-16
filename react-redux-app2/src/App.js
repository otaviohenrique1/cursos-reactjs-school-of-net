import React, { Component } from 'react';
import './App.css';
import Counter from "./components/Counter";
import { bindActionCreators } from "redux";
import { clickHelloAction } from "./actions/index";
import { connect } from "react-redux";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}
