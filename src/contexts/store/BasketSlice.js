import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_NET } from "../../utils/domains";

export const fetchBasketItems = createAsyncThunk(
  'basket/fetchBasketItems',
  async ({access_token}, thunkAPI) => {
    try{
      const response = await axios.get(`${BASE_URL_NET}/basket/api/basket`, {
        headers:{
          "Content-Type": "application/json",
           "Authorization": `Bearer ${access_token}`
        }
      })
      return response.data
    }catch(errors){
      console.log('fetchingError', errors)
    }
  }
)
export const addToBasketAsync = createAsyncThunk(
  'basket/addItemToBasketAsync',
  async ({item, access_token}, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL_NET}/basket/api/add_to_basket/`, {
        id: item.id,
        quantity: 1,
      }, {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to add item to basket');
    }
  }
)

export const removeFromBasketAsync = createAsyncThunk(
  'basket/removeItemFromBasketAsync',
  async ({item, access_token}, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL_NET}/basket/api/remove_from_basket/`, {
        id: item,
        quantity: 1,
      }, {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to remove item from basket');
    }
  }
)

export const deleteFromBasketAsync = createAsyncThunk(
  'basket/deleteItemFromBasketAsync',
  async ({itemID, access_token}, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL_NET}/basket/api/delete_from_basket/`, {
        id: itemID
      }, {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to remove item from basket');
    }
  }
)

export const clearBasketAsync = createAsyncThunk(
  'basket/clearBasketAsync',
  async ({item, access_token}, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL_NET}/basket/api/clear_basket/`, {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to remove item from basket');
    }
  }
)

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
      loading: false,
      basket_id: 0,
      books: [],
      error: ''
    },
    reducers: {
        addItemToBasket: (state, action) => {
          console.log(action.payload)
            const item = action.payload.item;
            const existingItemIndex = state.findIndex((basketItem) => basketItem.id === item.id);
      
            if (existingItemIndex !== -1) {
              state[existingItemIndex].quantity += 1;
            } else {
              state.push({ ...item, quantity: 1 });
            }
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
        setBasketItems: (state, action) => {
          console.log('payload', action.payload)
          // state = [...action.payload]
          state = action.payload
          console.log('basketState', state)
          // state.push({...action.payload.item})
          // return action.payload
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(addToBasketAsync.fulfilled, (state, action) => {
          const item = action.payload

          const index = state.books?.findIndex((stateItem) => stateItem.book.id === item.book.id)
          console.log('index', index)
          if (index !== -1) {
            state.books[index].quantity += 1;
          }
          return state;
        })
        .addCase(addToBasketAsync.rejected, (state, action) => {
          // Handle rejected action of addToBasketAsync here
          // You can access the error value returned by the async thunk from action.error
          // For example, you can update the state or show an error message
          console.log('addToBasketAsync rejected:', action.error);
        })
        .addCase(removeFromBasketAsync.fulfilled, (state, action) => {
          // Handle fulfilled action of removeFromBasketAsync here
          // You can access the data returned by the async thunk from action.payload
          // For example, you can update the state based on the response data
          console.log('removeFromBasketAsync fulfilled:', action.payload);
          const item = action.payload

          const index = state.books.findIndex((stateItem) => stateItem.book.id === item.book.id)
          console.log('index', index)
          if (index !== -1) {
            if (state.books[index].quantity === 1) {
            state.books.splice(index, 1);
            } else {
            state.books[index].quantity -= 1;
            }
        }
          return state;
        })
        .addCase(removeFromBasketAsync.rejected, (state, action) => {
          // Handle rejected action of removeFromBasketAsync here
          // You can access the error value returned by the async thunk from action.error
          // For example, you can update the state or show an error message
          console.log('removeFromBasketAsync rejected:', action.error);
        })
        .addCase(deleteFromBasketAsync.fulfilled, (state, action) => {
          // Handle fulfilled action of removeFromBasketAsync here
          // You can access the data returned by the async thunk from action.payload
          // For example, you can update the state based on the response data
          console.log('deleteFromBasket fulfilled:', action.payload)

          const item = action.payload

          const index = state.books.findIndex((stateItem) => stateItem.book.id === item.book.id)

          if (index !== -1) {
            state.books.splice(index, 1);
          }
        })
        .addCase(deleteFromBasketAsync.rejected, (state, action) => {
          // Handle rejected action of removeFromBasketAsync here
          // You can access the error value returned by the async thunk from action.error
          // For example, you can update the state or show an error message
          console.log('deleteFromBasket rejected:', action.error);
        })
        .addCase(clearBasketAsync.fulfilled, (state, action) => {
          // Handle fulfilled action of removeFromBasketAsync here
          // You can access the data returned by the async thunk from action.payload
          // For example, you can update the state based on the response data
          console.log('clearBasket fulfilled:', action.payload);
        })
        .addCase(clearBasketAsync.rejected, (state, action) => {
          // Handle rejected action of removeFromBasketAsync here
          // You can access the error value returned by the async thunk from action.error
          // For example, you can update the state or show an error message
          console.log('clearBasket rejected:', action.error);
        })
        .addCase(fetchBasketItems.pending, (state) => {
          state.loading = true
        })
        .addCase(fetchBasketItems.fulfilled, (state, action) => {
          // Handle fulfilled action of removeFromBasketAsync here
          // You can access the data returned by the async thunk from action.payload
          // For example, you can update the state based on the response data
          console.log('action-data', action.payload)
          state.loading = false
          state.books = action.payload.basket_items
          state.basket_id = action.payload.id
          state.error = ''
          console.log('basketFetchstate:', state);
        })
        .addCase(fetchBasketItems.rejected, (state, action) => {
          // Handle rejected action of removeFromBasketAsync here
          // You can access the error value returned by the async thunk from action.error
          // For example, you can update the state or show an error message
          state.loading = false
          state.books = []
          state.basket_id = 0
          state.error = action.error
          console.log('clearBasket rejected:', action.error);
        })
    }
})

export const { addItemToBasket, removeItemFromBasket, deleteItemFromBasket, clearBasket, setBasketItems } = basketSlice.actions;

export default basketSlice.reducer;