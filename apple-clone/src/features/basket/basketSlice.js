import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = []

export const basketSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        ADD_ITEM: (state, action)=>{
            state.value = [
                ...state.value,
                action.payload
            ]            
        },

    }
});
export const {ADD_ITEM} = basketSlice.actions




export default basketSlice.reducer