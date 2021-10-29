import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

import reducer from "../reducers";
const confiureStore = () => {
  const enhancer = composeWithDevTools();
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(confiureStore, {
  debug: true,
});
export default wrapper;
