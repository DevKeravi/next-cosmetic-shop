import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../reducers/user";
import ShoppingBagTable from "../src/components/ShoppingBagTable";
import wrapper from "../store/configureStore";

const basket = () => {
  const { userData } = useSelector((state: any) => state.user);
  const basketList = userData.basket;

  if (userData === null) {
    return (
      <Container>
        <Row>
          <Col>로그인이 필요한 서비스 입니다.</Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row className="g-0">
        <Col>
          <Row className="g-0">
            <Col className="basketTitle" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem" }}>YOUR SHOPPING BAG</div>
              <div style={{ color: "grey", fontStyle: "italic" }}>
                Items reserved for limited time only
              </div>
            </Col>
          </Row>
          <Row className="g-0 bagTable">
            <ShoppingBagTable bagList={basketList} />
          </Row>
          <Row className="g-0 oderButtons"></Row>
        </Col>
      </Row>
    </Container>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const cookie = req ? req.headers.cookie : "";
      if (cookie !== undefined) {
        const resp = await axios.get("http://localhost:3000/api/login");
        store.dispatch({
          type: USER_LOGIN_SUCCESS.type,
          payload: resp.data,
        });
      }

      return { props: {} };
    }
);
export default basket;
