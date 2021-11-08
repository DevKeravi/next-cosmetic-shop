import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_SUCCESS,
} from "../reducers/products";
import { USER_LOGIN_SUCCESS } from "../reducers/user";
import LookCarousel from "../src/components/LookCarousel";
import ProductCard from "../src/components/ProductCard";
import wrapper from "../store/configureStore";

const lip = () => {
  const { productList } = useSelector((state: RootState) => state.products);
  const lipstick = productList.filter((v: any) => {
    return v.product_type === "lipstick";
  });
  const nailpolish = productList.filter((v: any) => {
    return v.product_type === "nail_polish";
  });

  return (
    <>
      <ProductCard productList={nailpolish.slice(0, 4)} />
      <ProductCard productList={lipstick.slice(0, 4)} />
      <LookCarousel />
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
        const cookie = req ? req.headers.cookie : "";
        if (cookie !== undefined) {
          const resp = await axios.get("http://localhost:3000/api/login");
          store.dispatch({
            type: USER_LOGIN_SUCCESS.type,
            payload: resp.data,
          });
        }
        const resp = await axios.get("");
        store.dispatch({
          type: GET_PRODUCT_LIST_SUCCESS.type,
          payload: resp.data,
        });
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
export default lip;
