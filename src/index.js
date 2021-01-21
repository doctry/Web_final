import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const express = require('express');
const { wakeDyno} = require('heroku-keep-awake');


const PORT = 9117;
const DYNO_URL = 'https://web-final-server.herokuapp.com';

const app = express();

app.listen(PORT, () => {
    wakeDyno(DYNO_URL); // Use this function when only needing to wake a single Heroku app.
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
