import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import dashboard from "./slices/dashboardSlice";

const makeStore = () => {
  return configureStore({
    reducer: {
      dashboard,
    },
    devTools: true,
  });
};

export const wrapper = createWrapper(makeStore);
