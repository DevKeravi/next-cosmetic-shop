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
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const category = () => {
  // 한페이지에 보여줄 컨텐츠 수
  const pageContentsLimit = 12;
  const [curPageIndex, setCurPageIndex] = useState(0);
  const { productList } = useSelector((state: any) => state.products);
  const [filteredList, setFilteredList] = useState(productList);
  var pageLength: number =
    Math.floor(filteredList.length / pageContentsLimit) + 1;

  //가격 에버리지 계산
  const calcPrice = (productList: any) => {
    var minPrice = productList[0].price;
    var maxPrice = 0;
    var average = 0;
    var lowAverPrice = 0;
    var highAverPrice = 0;
    var priceList = [];

    productList.map((v: any) => {
      if (v.price < minPrice) {
        minPrice = Math.floor(v.price);
      }
      if (v.price > maxPrice) {
        maxPrice = Math.floor(v.price);
      }
    });
    average = Math.floor((minPrice + maxPrice) / 2);
    lowAverPrice = Math.floor((minPrice + average) / 2);
    highAverPrice = Math.floor((maxPrice + average) / 2);
    priceList.push(minPrice, lowAverPrice, highAverPrice, maxPrice);
    return priceList;
  };

  const priceList = calcPrice(productList);

  //

  const colorPalette = (productList: any) => {
    const colors: any[] = [];
    productList.map((product: any) => {
      product.product_colors.map((color: any) => {
        colors.push(color);
      });
    });
    colors.reduce((acc, current) => {
      if (
        acc.findIndex(
          ({ hex_value }: any) => hex_value === current.hex_value
        ) === -1
      ) {
        acc.push(current);
      }
      return acc;
    }, []);
    return colors;
  };
  const colorList = colorPalette(productList);

  var contentList = [];

  for (var i = 0; i < pageLength; i++) {
    const curIndex = i * pageContentsLimit;

    if (curIndex + pageContentsLimit > filteredList.length) {
      contentList.push(filteredList.slice(curIndex, filteredList.length));
    } else {
      contentList.push(filteredList.slice(curIndex, pageContentsLimit));
    }
  }
  const title = productList[0]?.product_type.replace("_", " ").toUpperCase();

  //필터링 함수
  const filterListByPrice = (price: number) => {
    const filterdListByPrice = productList.filter(
      (product: any) => parseInt(product.price) >= price
    );
    setFilteredList(filterdListByPrice);
  };
  //TODO
  /*
  const filterListByColor = (hex_value: string) => {
    setFilteredList(filterListColor);
  };
*/

  const priceItems = () => {
    var items = [];
    for (i = 0; i < priceList.length; i++) {
      if (i < priceList.length) {
        items.push(
          <Dropdown.Item
            key={i}
            id={priceList[i]}
            style={{ color: "grey", fontSize: "0.9rem" }}
            onClick={(e) => {
              const { id } = e.target as HTMLTextAreaElement;
              filterListByPrice(parseInt(id));
            }}
          >
            ${priceList[i]}~{priceList[i + 1]}
          </Dropdown.Item>
        );
      } else {
        items.push(
          <Dropdown.Item
            key={i}
            style={{
              color: "grey",
              fontSize: "0.9rem",
              minWidth: "14vw",
              maxWidth: "14vw",
            }}
          >
            ${priceList[i]} and more
          </Dropdown.Item>
        );
      }
    }
    return items;
  };
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
        <Row
          className="g-0"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col lg={2} style={{ textAlign: "center" }}>
            <Dropdown className="d-inline ">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  border: "none",
                  borderBottom: "1px solid",
                  fontStyle: "italic",
                  textAlign: "left",
                  borderRadius: "0",
                  boxShadow: "none",
                  minWidth: "10vw",
                  maxWidth: "14vw",
                }}
              >
                <span style={{ marginRight: "10vw" }}>Price</span>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ border: "none" }}>
                {priceItems()}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={2} style={{ textAlign: "center" }}>
            <Dropdown className="d-inline ">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  border: "none",
                  borderBottom: "1px solid",
                  fontStyle: "italic",
                  textAlign: "left",
                  borderRadius: "0",
                  boxShadow: "none",
                  minWidth: "10vw",
                  maxWidth: "14vw",
                }}
              >
                <span style={{ marginRight: "10vw" }}>Colour</span>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ border: "none" }}>
                {colorList.map((v: any) => (
                  <Dropdown.Item
                    key={v.hex_value}
                    id={v.hex_value}
                    style={{
                      backgroundColor: v.hex_value,
                      minWidth: "14vw",
                      maxWidth: "14vw",
                    }}
                    onClick={(e: any) => {
                      const { id } = e.target as HTMLTextAreaElement;
                      filterListByColor(id);
                    }}
                  >
                    {v.colour_name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="g-0 ">
          {contentList[curPageIndex]?.map((v: any) => (
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
