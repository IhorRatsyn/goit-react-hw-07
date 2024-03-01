import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      return action.payload.toLowerCase();
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filters;
export default filtersSlice.reducer;
