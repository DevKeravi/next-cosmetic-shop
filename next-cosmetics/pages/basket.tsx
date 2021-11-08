import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
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
        <Col style={{ marginTop: "3vmax" }}>
          <Row className="g-0">
            <Col
              className="basketTitle"
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <div style={{ fontSize: "2rem" }}>YOUR SHOPPING BAG</div>
              <div style={{ color: "grey", fontStyle: "italic" }}>
                Items reserved for limited time only
              </div>
            </Col>
          </Row>
          <Row className="g-0 bagTable">
            <ShoppingBagTable bagList={basketList} />
          </Row>
          <Row className="g-0 oderButtons" style={{ marginTop: "1.5rem" }}>
            <Col
              className="d-none d-lg-block"
              lg={2}
              md={12}
              style={{ textDecoration: "underline" }}
            >
              Continue Shopping
            </Col>
            <Col
              className="d-block d-lg-none"
              lg={2}
              md={12}
              style={{
                textDecoration: "underline",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Continue Shopping
            </Col>
            <Col className="offset-lg-8" lg={2} md={12}>
              <div className="d-grid">
                <Button
                  style={{
                    backgroundColor: "orange",
                    borderRadius: 0,
                    border: "none",
                    paddingTop: "0.8rem",
                    paddingBottom: "0.8rem",
                    paddingLeft: "0",
                    paddingRight: "0",
                  }}
                  size="lg"
                >
                  <span style={{ fontSize: "0.95rem" }}>ORDER NOW</span>
                </Button>
              </div>
            </Col>
          </Row>
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
