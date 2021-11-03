import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducer from "../reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
const makeStore = (context: any) =>
  configureStore({
    reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });

const wrapper = createWrapper(makeStore, {
  debug: true,
});
export default wrapper;
