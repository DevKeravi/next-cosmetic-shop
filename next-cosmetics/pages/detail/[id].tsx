import wrapper from "../../store/configureStore";
import axios from "axios";
import {
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
} from "../../reducers/products";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import LookCarousel from "../../src/components/LookCarousel";
import { useRouter } from "next/dist/client/router";
import Bread from "../../src/components/Bread";
import { categoryGenerator } from "../../utils";
import Head from "next/head";

const detail = () => {
  const { productDetail } = useSelector((state: any) => state.products);
  const router = useRouter();
  const category = categoryGenerator(productDetail.product_type);
  const list = [
    `/${category}`,
    `/${productDetail.product_type}`,
    `/${router.query.id}`,
  ];
  return (
    <>
      <Head>
        <title>Hazy shade of spring | {productDetail.name}</title>
        <meta name="description" content={productDetail.description} />
        <meta property="og:title" content={productDetail.name} />
        <meta property="og:description" content={productDetail.description} />
        <meta
          property="og:image"
          content={
            productDetail.image_link
              ? productDetail.image_link
              : "http://hazyshade.com/favicion.ico"
          }
        />
        <meta
          property="og:url"
          content={`https://hazyshade.com/category/${productDetail.id}`}
        />
      </Head>

      <Container fluid>
        <Row className="g-0">
          <Bread link={list} />
        </Row>
        <Row className="g-0">
          <Col xs={12} className="col-lg-6 offset-lg-3  text-center">
            <Image
              src={productDetail.image_link}
              alt={productDetail.name}
              fluid
            />
          </Col>
          <Col xs={12} className="col-lg-8 offset-lg-2 text-center">
            <Row className="g-0">
              <Col style={{ fontSize: "3vmax", lineHeight: 1 }}>
                {productDetail.name.toUpperCase()}
              </Col>
            </Row>
            <Row
              style={{
                color: "grey",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
              className="g-0"
            >
              <Col>Article number: {productDetail.id}</Col>
            </Row>
            <Row
              className="g-0 d-lg-block d-none priceSamll"
              style={{
                marginTop: "1vmax",
                marginBottom: "1.5vmax",
                fontSize: "1.2rem",
              }}
            >
              <Col style={{ color: "#606060" }}>$ {productDetail.price}</Col>
            </Row>
            <Row
              className="g-0 d-lg-none d-block  priceBig"
              style={{
                marginTop: "2vmax",
                marginBottom: "2vmax",
                fontSize: "2rem",
              }}
            >
              <Col style={{ color: "#606060" }}>$ {productDetail.price}</Col>
            </Row>
            <Row className="g-0" style={{ marginBottom: "2vmax" }}>
              <Col style={{ color: "#949494" }}>
                {productDetail.description}
              </Col>
            </Row>
            <Row className="g-0" style={{ marginBottom: "1vmax" }}>
              <Col>COLOR</Col>
            </Row>
            <Row className="g-0" style={{ marginBottom: "3vmax" }}>
              <Col>
                {productDetail.product_colors.map(
                  (colorObj: any, i: number) => (
                    <div
                      style={{
                        display: "inline-block",
                        width: "32px",
                        height: "32px",
                        backgroundColor: colorObj.hex_value,
                        marginRight: "2px",
                      }}
                      key={i}
                    ></div>
                  )
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="g-0">
          <Col lg={2} md={12} className="offset-lg-5">
            <div className="d-grid">
              <Button
                style={{
                  padding: "0.75rem",
                  backgroundColor: "#f68236",
                  borderRadius: "0",
                  boxShadow: "none",
                  borderColor: "#f68236",
                }}
              >
                ADD TO CART
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <LookCarousel title="You may also like" />
        </Row>
      </Container>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, params }) => {
      store.dispatch({ type: GET_PRODUCT_BY_ID_REQUEST.type });
      try {
        const resp = await axios.get(
          `http://makeup-api.herokuapp.com/api/v1/products/${params?.id}.json`
        );
        store.dispatch({
          type: GET_PRODUCT_BY_ID_SUCCESS.type,
          payload: resp.data,
        });
      } catch (error) {
        store.dispatch({
          type: GET_PRODUCT_BY_ID_FAILURE.type,
          payload: error,
        });
      }
      return {
        props: {},
      };
    }
);

export default detail;
