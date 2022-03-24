const initialState = {
    info:{}
}

const rootReducer = ( state = initialState , action ) => {
    if(action.type === 'SET_INFO'){
        console.log(action.payload);
        
        return {...state , 'USER':action.payload}
    } return state
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

