import { createSlice } from "@reduxjs/toolkit";
export function storeToken(response){
    return {
        type: "STORE_TOKEN",
        payload: response
    }
}

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        access_token: '',
        refresh_token: ''
    },
    reducers: {
        storeTokenReducer: (state, action) => {
            state.access_token = action.payload.access;
            state.refresh_token = action.payload.refresh;
        },
        signoutReducer: (state, action) =>{
            state.access_token = null
            state.refresh_token = null
            
        }
    }
})

export const { storeTokenReducer, signoutReducer } = tokenSlice.actions
export default tokenSlice.reducer
