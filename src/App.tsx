import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// const axios = import("axios");
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// const options: AxiosRequestConfig = {
//   method: 'GET',
//   url:'/response'
// }

type Response = {
  responseMessage: string
}

function App() {
  const [message, setMessage] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  }
  
  const sendMessage = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    await axios.post<Response>(
      'http://localhost:5000/response',
      { responseMessage: message }
    )
    .then((res: AxiosResponse) => {
      console.log("res front", res);
    })
    .catch((e: any) => {
      console.log(e.message);
    })
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
