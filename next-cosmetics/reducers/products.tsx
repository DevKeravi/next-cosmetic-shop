import { AnyAction, createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  productList: any;
  productDetail: any;
  getProductListLoading: boolean;
  getProductListDone: boolean;
  getProductListError: any;
  getProductListByCategoryLoading: boolean;
  getProductListByCategoryDone: boolean;
  getProductListByCategoryError: any;
  getProductByIdLoading: boolean;
  getProductByIdDone: boolean;
  getProductByIdError: any;
}
const initialState: IProductsState = {
  productList: null,
  productDetail: null,
  getProductListLoading: false,
  getProductListDone: false,
  getProductListError: null,
  getProductListByCategoryLoading: false,
  getProductListByCategoryDone: false,
  getProductListByCategoryError: null,
  getProductByIdLoading: false,
  getProductByIdDone: false,
  getProductByIdError: null,
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
    GET_PRODUCT_BY_ID_REQUEST(state: IProductsState, action: AnyAction) {
      state.getProductByIdLoading = true;
      state.getProductByIdError = null;
    },
    GET_PRODUCT_BY_ID_SUCCESS(state: IProductsState, action: AnyAction) {
      state.getProductByIdLoading = false;
      state.getProductByIdDone = true;
      state.productDetail = action.payload;
    },
    GET_PRODUCT_BY_ID_FAILURE(state: IProductsState, action: AnyAction) {
      state.getProductByIdLoading = true;
      state.getProductByIdError = action.payload;
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
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
  GET_PRODUCT_LIST_BY_CATEGORY_REQUEST,
  GET_PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_LIST_BY_CATEGORY_FAILURE,
} = actions;
export default reducer;
