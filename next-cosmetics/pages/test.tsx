import wrapper from "../store/configureStore";

const test = () => {
  return <div>testing</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      console.log(store.getState().products.productList);
      return { props: {} };
    }
);
export default test;
