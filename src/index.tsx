import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages=  [
    {id: 1, message: 'hi'},
    {id: 2, message: 'How"s your day'},
    {id: 3, message: 'Dollars'},
]
let posts= [
    {id: 1, message: "hello, how are you", likesCount: 12},
    {id: 2, message: "It's my first applee", likesCount: 152},
    {id: 2, message: "It's my first applee", likesCount: 152},
    {id: 2, message: "It's my first applee", likesCount: 152},
]
let dialogs= [
    {id: 1, name: 'Dimich'},
    {id: 2, name: 'Sweta'},
    {id: 3, name: 'Kolya'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs ={dialogs} messages ={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
