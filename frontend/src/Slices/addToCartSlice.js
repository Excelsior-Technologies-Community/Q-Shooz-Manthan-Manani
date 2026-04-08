import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
    name:'addToCart',
    initialState:{
        value: [],
    },
    
    reducers:{
        addToCart : (state, action) =>{
            const itemsIncart = state.value.find((item) => item.id === action.payload.id);
            if(itemsIncart){
                itemsIncart.quantity += 1;
            }else{
                state.value.push({...action.payload,quantity: 1});
            }

        },
        removeFromCart : (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
        incrementItem : (state,action) => {
            const item = state.value.find((item) => item.id === action.payload)
            if(item){
            item.quantity += 1;
        }
        },
        decrementItem: (state,action) => {
        const item = state.value.find((item) => item.id === action.payload);
        if(item && item.quantity > 1){
             item.quantity -= 1;
        }
    }
    }
})
export const {addToCart , removeFromCart , incrementItem , decrementItem    } = addToCartSlice.actions;
export default addToCartSlice.reducer;