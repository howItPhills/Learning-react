import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
  { id: '1', name: 'Igor' },
  { id: '2', name: 'Lena' },
  { id: '3', name: 'Vasya' },
  { id: '4', name: 'Katya' },
];

let messages = [
  { id: '1', message: "whats upp" },
  { id: '2', message: "hi" },
  { id: '3', message: "how old are u my friend" },
];

let posts = [
  { id: '1', message: 'Hello', likesCount: '21' },
  { id: '2', message: 'The weather is so hot', likesCount: '3' },
  { id: '3', message: 'How are u doin guys', likesCount: '1' },
  { id: '4', message: 'Privet', likesCount: '15' },
  { id: '4', message: 'Privet', likesCount: '15' },
  { id: '4', message: 'Privet', likesCount: '15' },
  { id: '4', message: 'Privet', likesCount: '15' },
  { id: '4', message: 'Privet', likesCount: '15' },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
