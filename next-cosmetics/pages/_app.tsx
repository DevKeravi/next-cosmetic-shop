import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Col, Container, Row } from "react-bootstrap";
import Top from "../src/components/Top";

import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container fluid style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
      <Row>
        <Col>
          <Top />
        </Col>
      </Row>
      <Row>
        <Col>
          <Component {...pageProps} />
        </Col>
      </Row>
    </Container>
  );
}
export default MyApp;
