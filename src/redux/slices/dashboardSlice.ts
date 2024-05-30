import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [],
};

const reducers = {};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers,
});

export default dashboardSlice.reducer;
