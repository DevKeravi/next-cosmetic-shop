import { AnyAction, createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  productList: any;
  getProductListLoading: boolean;
  getProductListDone: boolean;
  getProductListError: any;
  getProductListByCategoryLoading: boolean;
  getProductListByCategoryDone: boolean;
  getProductListByCategoryError: any;
}
const initialState: IProductsState = {
  productList: null,
  getProductListLoading: false,
  getProductListDone: false,
  getProductListError: null,
  getProductListByCategoryLoading: false,
  getProductListByCategoryDone: false,
  getProductListByCategoryError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GET_PRODUCT_LIST_REQUEST(state: IProductsState, action: AnyAction) {
      state.getProductListLoading = true;
      state.getProductListError = null;
    },
    GET_PRODUCT_LIST_SUCCESS(state: IProductsState, action: AnyAction) {
      state.getProductListLoading = false;
      state.getProductListDone = true;
      state.productList = action.payload;
    },
    GET_PRODUCT_LIST_FAILURE(state: IProductsState, action: AnyAction) {
      state.getProductListLoading = true;
      state.getProductListError = action.payload;
    },
    GET_PRODUCT_LIST_BY_CATEGORY_REQUEST(
      state: IProductsState,
      action: AnyAction
    ) {
      state.getProductListByCategoryLoading = true;
      state.getProductListByCategoryError = null;
    },
    GET_PRODUCT_LIST_BY_CATEGORY_SUCCESS(
      state: IProductsState,
      action: AnyAction
    ) {
      state.getProductListByCategoryLoading = false;
      state.getProductListByCategoryDone = true;
      state.productList = action.payload;
    },
    GET_PRODUCT_LIST_BY_CATEGORY_FAILURE(
      state: IProductsState,
      action: AnyAction
    ) {
      state.getProductListByCategoryLoading = true;
      state.getProductListByCategoryError = action.payload;
    },
  },
});

const { reducer, actions } = productsSlice;
export const {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_BY_CATEGORY_REQUEST,
  GET_PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_LIST_BY_CATEGORY_FAILURE,
} = actions;
export default reducer;
