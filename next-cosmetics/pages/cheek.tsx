import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_SUCCESS,
} from "../reducers/products";
import ProductCard from "../src/components/ProductCard";
import wrapper from "../store/configureStore";

const cheek = () => {
  const { productList } = useSelector((state: RootState) => state.products);
  const blush = productList.filter((v: any) => {
    return v.product_type === "blush";
  });
  const bronzer = productList.filter((v: any) => {
    return v.product_type === "bronzer";
  });

  return (
    <>
      <ProductCard productList={blush.slice(0, 4)} />
      <ProductCard productList={bronzer.slice(0, 4)} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      store.dispatch({
        type: GET_PRODUCT_LIST_REQUEST,
      });
      try {
        const resp = await axios.get("");
        store.dispatch({
          type: GET_PRODUCT_LIST_SUCCESS,
          payload: resp.data,
        });
      } catch (err) {
        store.dispatch({
          type: GET_PRODUCT_LIST_FAILURE(),
          payload: err,
        });
      }
      return {
        props: {},
      };
    }
);
export default cheek;
