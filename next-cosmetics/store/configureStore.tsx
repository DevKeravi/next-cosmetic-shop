import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducer from "../reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
const makeStore = (context: any) =>
  configureStore({
    reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
