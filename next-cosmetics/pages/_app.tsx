import "../styles/globals.css";
import { AppProps } from "next/app";
import { Col, Container, Row } from "react-bootstrap";
import Top from "../src/components/Top";

import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import wrapper from "../store/configureStore";
import axios from "axios";
import { defaultUrl } from "../config/config";
import { SSRProvider } from "@react-aria/ssr";
import Head from "next/head";

axios.defaults.baseURL = defaultUrl;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Container
        fluid
        style={{
          paddingLeft: "2vmax",
          paddingRight: "2vmax",
          marginTop: "1vmax",
          marginBottom: "1vmax",
        }}
      >
        <Head>
          <meta charSet="utf-8" />
          <title>Hazy shade of spring</title>
        </Head>
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
        <Row className="g-0">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </SSRProvider>
  );
}

export default wrapper.withRedux(MyApp);
