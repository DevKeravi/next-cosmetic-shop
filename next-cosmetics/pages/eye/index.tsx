import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_SUCCESS,
} from "../../reducers/products";
import ProductCard from "../../src/components/ProductCard";
import wrapper from "../../store/configureStore";

const eye = () => {
  const { productList } = useSelector((state: RootState) => state.products);
  const eyeshadow = productList.filter((v: any) => {
    return v.product_type === "eyeliner";
  });
  const eyebrow = productList.filter((v: any) => {
    return v.product_type === "eyebrow";
  });
  const blush = productList.filter((v: any) => {
    return v.product_type === "blush";
  });

  return (
    <>
      <ProductCard productList={eyebrow.slice(0, 4)} />
      <ProductCard productList={blush.slice(0, 4)} />
      <ProductCard productList={eyeshadow.slice(2, 6)} />
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
export default eye;
