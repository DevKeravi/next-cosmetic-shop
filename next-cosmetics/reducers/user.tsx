import { AnyAction, createSlice } from "@reduxjs/toolkit";

// 초기 상태 타입
export interface IUserState {
  loginLoading: boolean;
  loginDone: boolean;
  loginError: any;
  isLoggedIn: boolean;
  userData: any;
  changeQTYLoading: boolean;
  changeQTYDone: boolean;
  changeQTYError: any;
  deleteBasketItemLoading: boolean;
  deleteBasketItemDone: boolean;
  deleteBasketItemError: any;
}

// 초기 상태
const initialState: IUserState = {
  loginLoading: false,
  loginDone: false,
  loginError: null,
  isLoggedIn: false,
  userData: null,
  changeQTYLoading: false,
  changeQTYDone: false,
  changeQTYError: null,
  deleteBasketItemLoading: false,
  deleteBasketItemDone: false,
  deleteBasketItemError: null,
};

// 리듀서 슬라이스
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_LOGIN_REQUEST(state: IUserState, action: AnyAction) {
      state.loginLoading = true;
    },
    USER_LOGIN_SUCCESS(state: IUserState, action: AnyAction) {
      state.loginLoading = false;
      state.loginDone = true;
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    USER_LOGIN_FAILURE(state: IUserState, action: AnyAction) {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    USER_LOGOUT_REQUEST(state: IUserState) {
      state.isLoggedIn = false;
      state.loginDone = false;
      state.userData = null;
    },
    CHANGE_QTY_REQUEST(state: IUserState, action: AnyAction) {
      state.changeQTYLoading = true;
      state.changeQTYError = null;
    },
    CHANGE_QTY_SUCCESS(state: IUserState, action: AnyAction) {
      state.changeQTYLoading = false;
      state.changeQTYDone = true;
      const index = state.userData.basket.findIndex(
        (product: any) => product.id === action.payload.id
      );
      state.userData.basket[index].qty = action.payload.value;
    },
    CHANGE_QTY_FAILURE(state: IUserState, action: AnyAction) {
      state.changeQTYLoading = true;
      state.changeQTYError = action.payload;
    },
    DELETE_BASKET_ITEM_REQUEST(state: IUserState, action: AnyAction) {
      state.deleteBasketItemLoading = true;
      state.deleteBasketItemError = null;
    },
    DELETE_BASKET_ITEM_SUCCESS(state: IUserState, action: AnyAction) {
      state.deleteBasketItemLoading = false;
      state.deleteBasketItemDone = true;
      state.userData.basket = state.userData.basket.filter((product: any) => {
        return parseInt(product.id) !== action.payload;
      });
    },
    DELETE_BASKET_ITEM_FAILURE(state: IUserState, action: AnyAction) {
      state.deleteBasketItemLoading = true;
      state.deleteBasketItemError = action.payload;
    },
  },
});

// 리듀서 & 액션 리턴
const { reducer, actions } = userSlice;
export const {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  CHANGE_QTY_REQUEST,
  CHANGE_QTY_SUCCESS,
  CHANGE_QTY_FAILURE,

  DELETE_BASKET_ITEM_REQUEST,
  DELETE_BASKET_ITEM_SUCCESS,
  DELETE_BASKET_ITEM_FAILURE,
} = actions;
export default reducer;
