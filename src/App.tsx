import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = import("axios");

function App() {
  const [message, setMessage] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  }

  const sendMessage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    console.log("send message clicked");
  }

  return (
    <div>
      <label htmlFor='message'>Input message</label>
      <input type='text' id='message' name='message' onChange={(e) => handleOnChange(e)}></input>
      <button id='send-button' onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
