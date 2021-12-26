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
        REMOVE_ITEM: (state, action) => {
            const index = state.value.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );
            console.log(index);
            let newBasket = [...state.value];

            if(index >=0 ){
                newBasket.splice(index, 1);

            }else{
                console.warn('cant remove no such product')
            }
            console.log(newBasket)
            state.value = newBasket;
        }

    }
});
export const {ADD_ITEM, REMOVE_ITEM} = basketSlice.actions




export default basketSlice.reducer