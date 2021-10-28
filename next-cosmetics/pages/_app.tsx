import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Col, Container, Row } from "react-bootstrap";
import Top from "../src/components/Top";

import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container
      fluid
      style={{
        paddingLeft: "2vmax",
        paddingRight: "2vmax",
        marginTop: "1vmax",
        marginBottom: "1vmax",
      }}
    >
      <Row className="g-0">
        <Col>
          <Top />
        </Col>
      </Row>
      <Row className="g-0">
        <Col>
          <Component {...pageProps} />
        </Col>
      </Row>
    </Container>
  );
}
export default MyApp;
