import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import AnotherFunction from './AnotherFunction';

function App(props) {
  return <div> Hello from my first react app. This is its
    componet {props.cno} of 2;
    <br></br>
    <MyComponent name= {props.name} cno = {props.cno}></MyComponent>
    <br/>
    <AnotherFunction name={props.name}></AnotherFunction>
  </div> ;
}

export default App;
