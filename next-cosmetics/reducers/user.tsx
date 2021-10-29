import { AnyAction, createSlice } from "@reduxjs/toolkit";

// 초기 상태 타입
export interface IUserState {
  loginLoading: boolean;
  loginDone: boolean;
  loginError: any;
  isLoggedIn: boolean;
  userData: any;
}

// 초기 상태
const initialState: IUserState = {
  loginLoading: false,
  loginDone: false,
  loginError: null,
  isLoggedIn: false,
  userData: null,
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
  },
});

// 리듀서 & 액션 리턴
const { reducer, actions } = userSlice;
export const { USER_LOGIN_REQUEST, USER_LOGOUT_REQUEST } = actions;
export default reducer;
