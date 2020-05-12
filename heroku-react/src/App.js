import React, { useState } from 'react';
import './App.css';
import useTitle from "./hook-title";

function App() {
  const [time, setTime] = useState(0);
  
  useTitle(`My title is changed ${time}`);

  const clickButton = () => {
    const timeClicked = time + 1;
    setTime(timeClicked);
  };
  
  return (
    <div className="App">
      <button type="button" onClick={clickButton}>Click to change title</button>
    </div>
  );
}

export default App;
