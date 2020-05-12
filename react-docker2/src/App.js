import React from 'react';
import './App.css';
// import Title from "./Title";
import { Title1, Title2 } from "./Title";
// import Button from "./Button";
import { Button1, Button2 } from "./Button";
import iconSettings from "./iconSettings.svg";

function App() {
  const onClickButton = () => {
    console.log('My event from container App');
  };

  return (
    <div className="App">
      {/* <Title msg="Hello from School of net"/> */}
      <Title1 msg="Hello from School of net"/>
      <Title2>
        Hello from School of net children
      </Title2>
      <Button1
        type={'button'}
        className={'btn btn-primary'}
        onClickButton={onClickButton}
        buttonLabel={'My Button'}
      />
      <Button2
        type={'button'}
        className={'btn btn-primary'}
        onClickButton={onClickButton}
      >
        <i>icone</i>
        <span>My text</span>
      </Button2>
      <Button2
        type={'button'}
        className={'btn btn-primary'}
        onClickButton={onClickButton}
      >
        <i><img src={iconSettings} alt="iconSettings"/></i>
        <span>My text</span>
      </Button2>
    </div>
  );
}

export default App;
