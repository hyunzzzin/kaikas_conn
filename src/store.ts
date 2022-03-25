import { applyMiddleware, createStore } from 'redux';
import { setData } from './action';
import reducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


 const store = createStore(reducer,composeWithDevTools(applyMiddleware()));

 

 export default store;

