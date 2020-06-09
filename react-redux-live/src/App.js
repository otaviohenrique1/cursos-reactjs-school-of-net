import React, { Component } from 'react';
import { connect } from "react-redux";
import { hello } from "./actions/actions";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 'asd' };
    console.log('Constructor App (Component)');
  }

  componentDidMount() {
    // this.props.myComponentAction(this.state);
    // console.log('Action executed');
    console.log('Action Created');
  }

  onClickButton = () => {
    this.props.myComponentAction(this.state);
    console.log('Action executed');
  };
  
  render() {
    console.log('State ->', this.state);
    console.log('Props ->', this.props);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React com Redux</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" onClick={() => this.onClickButton()}>Click to call Action</button>
        </header>
      </div>
    );
  }
}

// data
const mapStateToProps = (state) => {
  console.log('MapStateToProps', state);
  return {
    myMsg: state.msg,
    data: state.data
  };
};

// actions
const mapDispachToProps = (dispach) => {
  return {
    myComponentAction: (data) => dispach(hello(data))
    // myComponentAction: () => dispach(hello('Dados para action'))
  }
};

export default connect(mapStateToProps, mapDispachToProps)(App);
