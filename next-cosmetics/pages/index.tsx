import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCarousel from "../src/components/MainCarousel";
import { Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap/";
import MainGrid from "../src/components/MainGrid";
import MainGridRes from "../src/components/MainGridRes";
const Home: NextPage = () => {
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
              fontSize: "7vmax",
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
            style={{ fontSize: "1.5vmax", fontStyle: "italic", color: "grey" }}
          >
            Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque
            pentatibus.
          </p>
        </Col>
        <Col
          lg={{ offset: 4 }}
          className="col-lg-4"
          style={{ marginBottom: "8vw" }}
        >
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your e-mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span>
              <Button style={{ backgroundColor: "orange", border: "0px" }}>
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

export default Home;
