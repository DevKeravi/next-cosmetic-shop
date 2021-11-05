import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_SUCCESS,
} from "../reducers/products";
import { USER_LOGIN_SUCCESS } from "../reducers/user";
import ProductCard from "../src/components/ProductCard";
import wrapper from "../store/configureStore";

const foundation = () => {
  const { productList } = useSelector((state: RootState) => state.products);
  const foundation = productList.filter((v: any) => {
    return v.product_type === "foundation";
  });

  return (
    <>
      <ProductCard productList={foundation.slice(0, 4)} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      store.dispatch({
        type: GET_PRODUCT_LIST_REQUEST.type,
      });
      try {
        const resp = await axios.get("");
        store.dispatch({
          type: GET_PRODUCT_LIST_SUCCESS.type,
          payload: resp.data,
        });
        const cookie = req ? req.headers.cookie : "";
        if (cookie !== undefined) {
          const resp = await axios.get("http://localhost:3000/api/login");
          store.dispatch({
            type: USER_LOGIN_SUCCESS.type,
            payload: resp.data,
          });
        }
      } catch (err) {
        store.dispatch({
          type: GET_PRODUCT_LIST_FAILURE.type,
          payload: err,
        });
      }
      return {
        props: {},
      };
    }
);
export default foundation;
