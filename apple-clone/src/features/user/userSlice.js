import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = null;


export const userSlice = createSlice({
    name: "user_check",
    initialState: {value: initialStateValue},
    reducers: {
        SET_USER: (state, action)=>{
            console.log(action.payload);
            state.value = action.payload
        }

    }
});
export const {SET_USER} = userSlice.actions
export default userSlice.reducer

