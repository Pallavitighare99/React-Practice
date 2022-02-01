import logo from './logo.svg';
import './App.css';
import User from './User';
import React from 'react';
import Profile from './Profile';
// import Profile from './Profile';
import First from './First'
import Toggle from './Toggle'
import Second from './Second';
import Lifecycle from './Lifecycle';
import Hook from './Hook'
import UseEffect from './UseEffect';

function App() {
  return (
    <div className="App">
      <User />
      <Profile text={{ name: "Peter" }} data="Data" />
      <First />
      <Second />
      <Lifecycle />
      <Hook />
      <UseEffect />
   
      
    </div>
  );

  
}

export default App;
