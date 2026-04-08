import { createSlice } from "@reduxjs/toolkit";

const addToWishSlice = createSlice({
    name:'addToWish',
    initialState:{
        value: [],
    },
    reducers:{
        addToWish: (state,action)=> {
            const itemInWish = state.value.find((item) => item.id === action.payload.id);
            if(itemInWish){
                    return state
            }else{
                state.value.push(action.payload)
            }
        },
        removeFromWish: (state,action)=> {
            state.value = state.value.filter((item)=> item.id !== action.payload.id)
        }
    }
})

export const {addToWish,removeFromWish} = addToWishSlice.actions
export default addToWishSlice.reducer