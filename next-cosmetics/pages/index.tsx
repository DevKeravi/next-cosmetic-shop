import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCarousel from "../src/components/MainCarousel";
import { Row, Col, Container, Image } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "react-bootstrap/";
import MainGrid from "../src/components/MainGrid";
const Home: NextPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="mainBanner">
          <div
            className="header"
            style={{ textAlign: "center", marginTop: "10vw", fontSize: "5rem" }}
          >
            <p style={{ lineHeight: "1.2" }}>HAZY SHADE OF SPRING</p>
            <p
              style={{
                fontSize: "0.36em",
                fontStyle: "italic",
                color: "grey",
              }}
            >
              Quisque lorem totor fringila sed, vestibulum id, eleifend justo.
            </p>
            <Button variant="outline-secondary">
              <span>CHECK NEW ARRIVALS</span>
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <MainGrid />
      </Row>
    </Container>
  );
};

export default Home;
