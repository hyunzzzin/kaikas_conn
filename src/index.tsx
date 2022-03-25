
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider  } from 'react-redux';
import store from "./store"

// const USER_INFO = {
//   value : 0
// };
// const reducer =(state = USER_INFO, action) =>{
//   switch(action.type) {
//       case '':
//           return {
//               ...state,
//           }
//       case '':
//           return {
//               ...state,
//           }
//       default:
//           return state
//   }
// }
// let store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
