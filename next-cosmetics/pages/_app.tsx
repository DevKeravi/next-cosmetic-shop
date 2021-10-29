import "../styles/globals.css";
import { AppProps } from "next/app";
import { Col, Container, Row } from "react-bootstrap";
import Top from "../src/components/Top";

import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import wrapper from "../store/configureStore";
import axios from "axios";

axios.defaults.baseURL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";

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
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default wrapper.withRedux(MyApp);
