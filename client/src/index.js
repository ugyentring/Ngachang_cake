import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

//import from react-redux and redux
import { legacy_createStore } from 'redux';
import rootReducer from './reducers';

import { composeWithDevTools } from "redux-devtools-extension";
//Create redux store
const store = legacy_createStore(
  rootReducer, //root reducer function
  composeWithDevTools() //Enhance with redux devtools extension
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();