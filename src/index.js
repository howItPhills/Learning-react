import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './redux/State'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


let render = () => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App store={store} />
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );
}

render();

store.subcribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
