import { createSlice } from "@reduxjs/toolkit";

const totalSlice = createSlice({
    name: 'grandtotal',
    initialState: {
        total: 0,
      },
    reducers: {
        grandTotalReducer: (state, action) => {
            state.total = action.payload.total;
          },
    }

})

export const { grandTotalReducer } = totalSlice.actions;
export default totalSlice.reducer;