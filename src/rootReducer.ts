import { createAction, handleActions } from 'redux-actions'
import { applyPenders } from 'redux-pender';
import { isDoStatement } from 'typescript';

// export interface SET_INFO{
//     type:'kaikas'


// }

const initialState = {
    info : {
        USER : ''
    }
}

const SET_INFO = 'USER/INFO';

export const userinfo = createAction(SET_INFO ,(data:any) => {
    console.log('2');
    return data
});

// const test1 = handleActions(
//     {
//         [SET_INFO]: (state, action) => 1,
//       },
//       initialState
    // );
const reducer = handleActions(
  {
    [SET_INFO] : (state,action ) =>{
      console.log(action.payload)
      return {
        info:{
          ...state,
          USER:action.payload.address
        }
      }
    }
  },initialState
)
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_INFO: {
//       return {
//         ...state,
//       };
//     }
//     default: {
//       return {
//         ...state,
//       };
//     }
//   }
// };


// const rootReducer = ( state = initialState , action ) => {
//     if(action.type === 'SET_INFO'){
//         console.log(action.payload);
//         console.log(state);
        
//         return {...state , info : {
//             USER : action.payload
//         }}
//     } return state
// };

export default applyPenders(reducer, []);


export type RootState = ReturnType<typeof reducer>;
// export default reducer;



