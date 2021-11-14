import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCarousel from "../src/components/MainCarousel";
import { Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap/";
import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../reducers/user";
import wrapper from "../store/configureStore";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const MainGrid = dynamic(() => import("../src/components/MainGrid"));
  const MainGridRes = dynamic(() => import("../src/components/MainGridRes"));

  return (
    <Container fluid style={{ padding: 0 }}>
      <Row>
        <Col className="mainBanner">
          <div
            className="header"
            style={{
              textAlign: "center",
              marginTop: "8vw",
              marginBottom: "10vw",
              fontSize: "6.5vmax",
            }}
          >
            <p style={{ lineHeight: "1.2" }}>HAZY SHADE OF SPRING</p>
            <p
              style={{
                fontSize: "2vmax",
                fontStyle: "italic",
                color: "grey",
              }}
            >
              Quisque lorem totor fringila sed, vestibulum id, eleifend justo.
            </p>
            <div
              style={{ textAlign: "center", marginTop: "2rem" }}
              className="d-none d-lg-block"
            >
              <Button style={{ padding: "1rem" }} variant="outline-secondary">
                CHECK NEW ARRIVALS
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="g-0 d-none d-lg-block">
        <MainGrid />
      </Row>
      <Row className="g-0 d-block d-lg-none">
        <MainGridRes />
      </Row>
      <Row>
        <Col
          lg={12}
          style={{
            textAlign: "center",
            marginTop: "7vmax",
            marginBottom: "3vh",
            lineHeight: 1.1,
          }}
        >
          <p style={{ fontSize: "2rem" }}>SIGN UP TO RECEIVE OUR UPDATES</p>
          <p
            className="d-none d-lg-block"
            style={{ fontSize: "1.5vmax", fontStyle: "italic", color: "grey" }}
          >
            Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque
            pentatibus et ultrices volutpat.
          </p>
          <p
            className="d-block d-lg-none"
            style={{ fontSize: "1.5vmax", fontStyle: "italic", color: "grey" }}
          >
            Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque
            pentatibus.
          </p>
        </Col>
        <Col
          lg={{ offset: 3 }}
          className="col-lg-6"
          style={{ marginBottom: "8vw" }}
        >
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your e-mail"
              style={{ borderRadius: 0 }}
            />
            <span>
              <Button
                style={{
                  backgroundColor: "#f68236",
                  border: "0px",
                  borderRadius: 0,
                  padding: "1rem",
                  paddingRight: "2rem",
                  paddingLeft: "2rem",
                }}
              >
                add
              </Button>
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <MainCarousel />
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
export default Home;
