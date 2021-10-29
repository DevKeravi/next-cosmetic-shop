import { GetServerSideProps } from "next";
import wrapper from "../../store/configureStore";

const eyeProduct = () => {
  return (
    <div>
      <div>test</div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, params }) => {
      return {
        props: {},
      };
    }
);

export default eyeProduct;
