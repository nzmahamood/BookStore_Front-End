import { createSlice } from "@reduxjs/toolkit";
import { add_to_cart } from "./basketapi";



const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addItemToBasket: (state, action) => {
            const item = action.payload;
            const existingItemIndex = state.findIndex((basketItem) => basketItem.id === item.id);
      
            if (existingItemIndex !== -1) {
              state[existingItemIndex].quantity += 1;
            } else {
              state.push({ ...item, quantity: 1 });
            }
            const response = add_to_cart(state)
            console.log(response)
          },
        removeItemFromBasket: (state, action) => {
        const itemId = action.payload;
        const existingItemIndex = state.findIndex((basketItem) => basketItem.id === itemId);
    
        if (existingItemIndex !== -1) {
            if (state[existingItemIndex].quantity === 1) {
            state.splice(existingItemIndex, 1);
            } else {
            state[existingItemIndex].quantity -= 1;
            }
        }
        },
        deleteItemFromBasket: (state, action) => {
            const itemId = action.payload;
            const existingItemIndex = state.findIndex((basketItem) => basketItem.id === itemId);
      
            if (existingItemIndex !== -1) {
              state.splice(existingItemIndex, 1);
            }
          },
        clearBasket: (state) => {
            state.splice(0, state.length);
          },
    }
})

export const { addItemToBasket, removeItemFromBasket, deleteItemFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;