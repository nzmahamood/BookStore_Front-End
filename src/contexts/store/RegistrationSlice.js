import { createSlice } from "@reduxjs/toolkit";

const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';

export function registrationSuccess(message) {
    return {
        type: REGISTRATION_SUCCESS,
        message
    }
}
// const initialState = {
//     success: true,
// };

export const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        success: false,
        successMessage: ""
    },
    reducers: {
        messageReducer: (state, action) =>{
            state.success = action.payload.success
            state.successMessage = action.payload.successMessage
            
        }
    }
})

export const { messageReducer } = registrationSlice.actions
export default registrationSlice.reducer