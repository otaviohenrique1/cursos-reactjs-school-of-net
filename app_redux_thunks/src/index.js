import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import cfgStore from "./store";
import simpleAction from "./actions/simple";
import * as serviceWorker from './serviceWorker';

const store = cfgStore();
console.log(store.getState());
console.log(store.dispatch(simpleAction()));
store.dispatch(simpleAction())

render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
