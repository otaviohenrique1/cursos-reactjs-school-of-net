import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name: value
    };
    console.log('Controlled -> ', form);
  };

  return (
      <div className="App">
        <form>
          <input type="text" value={value} onChange={onChangeHandle}/>
          <button type="submit" onClick={handleSubmit}>Click</button>
        </form>
      </div>
  );
}

function AppUncontrolled() {
  const name = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name: name.current.value
    };
    console.log('Uncontrolled -> ', form);
  };

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" ref={name} name="name"/>
          <button type="submit">Click</button>
        </form>
      </div>
  );
}

function AppUncontrolled2() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name: e.target.name.value
    };
    console.log('Uncontrolled -> ', form);
  };

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name"/>
          <button type="submit">Click</button>
        </form>
      </div>
  );
}

export default AppUncontrolled;
