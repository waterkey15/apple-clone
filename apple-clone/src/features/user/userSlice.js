import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    userEmail: null,
    userID: null
};


export const userSlice = createSlice({
    name: "user_check",
    initialState: {value: initialStateValue},
    reducers: {
        SET_USER: (state, action)=>{
            console.log(action.payload);
            state.value = {
                ...state,
                userEmail : action.payload.email,
                userID: action.payload.userID
            }
        }

    }
});
export const {SET_USER} = userSlice.actions
export default userSlice.reducer

