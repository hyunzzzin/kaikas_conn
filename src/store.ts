import { createStore } from 'redux';
import { setData } from './action';
import rootReducer from './rootReducer'

 const store = createStore(rootReducer);

 

 store.dispatch({type:'SET_INFO'})
 

 export default store;

