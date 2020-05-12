import React from 'react';
import InputMask from "react-input-mask";

function App() {
  return (
    <div>
      <h1>Input Mask</h1>
      <InputMask mask="999.999.999-99" className="form-control" onChange={() => console.log("onChange")}/>
      <InputMask mask="99/99/9999" maskPlaceholder="dd/mm/yyyy" value="08" className="form-control" onChange={() => console.log("onChange")}/>
      <InputMask mask="99/99/9999" maskPlaceholder="dd/mm/yyyy" value="08" className="custom-class" onChange={() => console.log("onChange")}/>
    </div>
  );
}

/*
  0-9
  a-z / A-Z
  * (0-9, a-z/A-Z)
*/

export default App;
