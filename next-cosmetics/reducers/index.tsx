import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import products, { IProductsState } from "./products";
import user, { IUserState } from "./user";

export type State = {
  user: IUserState;
  products: IProductsState;
  server: any;
  client: any;
};

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combineReducer = combineReducers({
        user,
        products,
      });
      return combineReducer(state, action);
    }
  }
};
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
