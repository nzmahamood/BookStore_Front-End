import { createSlice } from "@reduxjs/toolkit";

const snackSlice = createSlice({
    name: 'snack',
    initialState: {
        message: "",
        severity: "success", // can be "error", "warning", "info", or "success"
        open: false,
      },
    reducers: {
        showMessage: (state, action) => {
            state.message = action.payload.message;
            state.severity = action.payload.severity;
            state.open = true;
          },
        hideMessage: (state) => {
        state.message = "";
        state.severity = "success";
        state.open = false;
        },
    }

})

export const { showMessage, hideMessage } = snackSlice.actions;
export default snackSlice.reducer;