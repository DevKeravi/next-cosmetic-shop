import wrapper from "../../store/configureStore";
import {
  GET_PRODUCT_LIST_BY_CATEGORY_REQUEST,
  GET_PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_LIST_BY_CATEGORY_FAILURE,
} from "../../reducers/products";
import { defaultUrl } from "../../config/config";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Image,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";

const category = () => {
  // 한페이지에 보여줄 컨텐츠 수
  const pageContentsLimit = 12;
  const [curPageIndex, setCurPageIndex] = useState(0);

  const { productList } = useSelector((state: any) => state.products);
  var pageLength: number =
    Math.floor(productList.length / pageContentsLimit) + 1;
  var contentList = [];
  for (var i = 0; i < pageLength; i++) {
    const curIndex = i * pageContentsLimit;
    if (curIndex + pageContentsLimit > productList.length) {
      contentList.push(productList.slice(curIndex, productList.length));
    } else {
      contentList.push(productList.slice(curIndex, pageContentsLimit));
    }
  }
  const title = productList[0]?.product_type.replace("_", " ").toUpperCase();

  const pageButton = () => {
    const buttons = [];
    for (i = 0; i < pageLength; i++) {
      buttons.push(
        <Button
          style={
            curPageIndex === i
              ? {
                  marginRight: "1rem",
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid",
                }
              : {
                  marginRight: "1rem",
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid",
                }
          }
          id={i.toString()}
          variant="light"
          key={i}
          onClick={(e) => {
            const { id } = e.target as HTMLTextAreaElement;
            setCurPageIndex(parseInt(id));
          }}
        >
          {i + 1}
        </Button>
      );
    }
    return (
      <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
        style={{ marginTop: "5rem" }}
      >
        <ButtonGroup aria-label="First group">{buttons}</ButtonGroup>
      </ButtonToolbar>
    );
  };

  return (
    <Container fluid style={{ marginTop: "2rem" }}>
      <Row className="g-0 d-none d-lg-block">
        <Row className="g-0">
          <Col lg={12} style={{ textAlign: "center", fontSize: "3rem" }}>
            {title}
          </Col>
        </Row>
        <Row className="g-0">
          <Col
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontStyle: "italic",
              color: "grey",
            }}
          >
            All products
          </Col>
        </Row>
        <Row className="g-0">sorting</Row>
        <Row className="g-0 ">
          {contentList[curPageIndex].map((v: any) => (
            <Col lg={3} xs={6} key={v.id} style={{ textAlign: "center" }}>
              <Row className="g-0">
                <Col>
                  <Image
                    src={v.image_link}
                    alt={v.name}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "200px",
                      minWidth: "150px",
                      minHeight: "200px",
                    }}
                  />
                </Col>
              </Row>
              <Row className="g-0">
                <Col>{v.name}</Col>
              </Row>
              <Row className="g-0">
                <Col>$ {v.price}</Col>
              </Row>
            </Col>
          ))}
        </Row>
        <Row className="g-0 pageNumber">
          <Col lg={"auto"} style={{ margin: "auto" }}>
            {pageButton()}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      store.dispatch({
        type: GET_PRODUCT_LIST_BY_CATEGORY_REQUEST,
      });
      try {
        const resp = await axios.get(
          defaultUrl + `&product_type=${params?.category}`
        );
        store.dispatch({
          type: GET_PRODUCT_LIST_BY_CATEGORY_SUCCESS,
          payload: resp.data,
        });
      } catch (error) {
        store.dispatch({
          type: GET_PRODUCT_LIST_BY_CATEGORY_FAILURE,
          payload: error,
        });
      }

      return {
        props: {},
      };
    }
);

export default category;
