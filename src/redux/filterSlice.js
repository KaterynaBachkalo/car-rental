import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  make: "",
  mileage: "",
  rentalPrice: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,

  reducers: {
    setFilter(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilter(state, action) {
      return (state = INITIAL_STATE);
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
