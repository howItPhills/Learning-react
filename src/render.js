import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, addNewMessageText, addPost, addText } from './redux/State'



export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} addText={addText} addNewMessageText={addNewMessageText} addMessage={addMessage} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
