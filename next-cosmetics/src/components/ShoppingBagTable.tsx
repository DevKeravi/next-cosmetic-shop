import axios from "axios";
import { useCallback } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { defaultApiUrl } from "../../config/config";
import {
  CHANGE_QTY_FAILURE,
  CHANGE_QTY_REQUEST,
  CHANGE_QTY_SUCCESS,
  DELETE_BASKET_ITEM_FAILURE,
  DELETE_BASKET_ITEM_REQUEST,
  DELETE_BASKET_ITEM_SUCCESS,
} from "../../reducers/user";
interface bagProps {
  bagList: any;
}

const ShoppingBagTable = ({ bagList }: bagProps) => {
  const dispatch = useDispatch();

  const qtyHandler = useCallback(async (id: string, value: number) => {
    // 예외 처리
    if (value < 1) {
      alert("상품 갯수는 1개 미만이 될 수 없습니다.");
      return;
    }
    // dispatch
    try {
      dispatch({ type: CHANGE_QTY_REQUEST.type });

      // resp를 받아서 실제 db값으로 연동 작업 추가하기
      await axios.put(defaultApiUrl + "/basket", { id, value });
      dispatch({ type: CHANGE_QTY_SUCCESS.type, payload: { id, value } });
    } catch (error) {
      dispatch({ type: CHANGE_QTY_FAILURE.type, payload: error });
    }
  }, []);

  const deleteHandler = useCallback(async (id: string) => {
    // dispatch
    try {
      dispatch({ type: DELETE_BASKET_ITEM_REQUEST.type });

      // resp를 받아서 실제 db값으로 연동 작업 추가하기
      await axios.delete(defaultApiUrl + `/basket?id=${id}`);
      dispatch({ type: DELETE_BASKET_ITEM_SUCCESS.type, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_BASKET_ITEM_FAILURE.type, payload: error });
    }
  }, []);
  if (bagList.length === 0) {
    return (
      <div
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
          textAlign: "center",
          border: "1px solid",
          borderColor: "#e5e5e5",
          padding: "5rem",
        }}
      >
        장바구니에 아무것도 없습니다!
      </div>
    );
  }
  return (
    <Container>
      <Row className="g-0 fullsize d-none d-lg-block">
        <Table responsive borderless>
          <thead
            style={{
              color: "#999999",
              fontWeight: "normal",
              fontSize: "0.8rem",
              borderBottom: "1px solid",
              borderBlockColor: "#e5e5e5",
            }}
          >
            <tr>
              <th>PRODUCT</th>
              <th>DISCRIPTION</th>
              <th>CATEGORY</th>
              <th>COLOR</th>
              <th style={{ textAlign: "center" }}>QTY</th>
              <th style={{ textAlign: "center" }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {bagList.map((v: any) => (
              <tr
                key={v.id}
                style={{
                  borderBottom: "1px solid",
                  borderBottomColor: "#e5e5e5",
                }}
              >
                <td className="productImage">
                  <Image
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      border: "1px solid",
                      borderColor: "#999999",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                    src={v.image_link}
                    alt={v.name}
                  />
                </td>
                <td
                  className="productDiscription"
                  style={{ display: "table-cell", verticalAlign: "middle" }}
                >
                  <div>{v.name.toUpperCase()}</div>
                  <div>Ref. {v.id}</div>
                </td>
                <td
                  className="productCategory"
                  style={{ display: "table-cell", verticalAlign: "middle" }}
                >
                  <div style={{ fontSize: "0.8rem" }}>
                    {v.product_type.toUpperCase()}
                  </div>
                </td>
                <td
                  className="productColor"
                  style={{ display: "table-cell", verticalAlign: "middle" }}
                >
                  {v.product_colors.map((color: any, i: number) => (
                    <div
                      key={i}
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        marginRight: "1px",
                        backgroundColor: `${color.hex_value}`,
                      }}
                    ></div>
                  ))}
                </td>
                <td
                  className="productQTY"
                  style={{
                    display: "table-cell",
                    verticalAlign: "middle",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    padding: 0,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "0.5rem",
                      position: "relative",
                      bottom: "0.5rem",
                    }}
                  >
                    {v.qty}
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <div style={{ display: "inline-block" }}>
                      <div style={{ padding: 0, margin: 0 }}>
                        <BsFillArrowUpSquareFill
                          onClick={(e: any) => {
                            qtyHandler(v.id, v.qty + 1);
                          }}
                        />
                      </div>
                      <div style={{ padding: 0, margin: 0 }}>
                        <BsFillArrowDownSquareFill
                          id={v.id}
                          onClick={(e: any) => {
                            const { id } = e.target as HTMLTextAreaElement;
                            qtyHandler(v.id, v.qty - 1);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  className="productAmount"
                  style={{
                    display: "table-cell",
                    verticalAlign: "middle",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    color: "grey",
                    padding: 0,
                  }}
                >
                  ${v.price}
                  <Button
                    style={{
                      fontSize: "0.9rem",
                      border: "none",
                      color: "black",
                      boxShadow: "none",
                      backgroundColor: "white",
                      margin: "0",
                      marginLeft: "1rem",
                      padding: 0,
                    }}
                    id={v.id}
                    onClick={(e: any) => {
                      const { id } = e.target as HTMLTextAreaElement;
                      deleteHandler(v.id);
                    }}
                  >
                    <span style={{ color: "grey" }}>X</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row
        className="g-0 resSize d-lg-none d-block"
        style={{ borderTop: "1px solid", borderTopColor: "#e5e5e5" }}
      >
        {bagList.map((v: any, i: any) => (
          <Row key={v.id} className="g-0">
            <Col style={{ marginTop: "4vw" }}>
              <Row className="g-0">
                <Col className="col-4">
                  <div
                    style={{
                      width: "100px",
                      height: "150px",
                      border: "1px solid #e5e5e5",
                      display: "inline-block",
                      verticalAlign: "middle",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={v.image_link}
                      alt={v.name}
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        margin: "auto",

                        maxWidth: "95px",
                        maxHeight: "140px",
                      }}
                    />
                  </div>
                </Col>
                <Col>
                  <Row className="g-0" style={{ marginTop: "1rem" }}>
                    {v.name}
                  </Row>
                  <Row
                    className="g-0"
                    style={{
                      fontSize: "0.8rem",
                      fontStyle: "italic",
                      color: "grey",
                      marginBottom: "0.8rem",
                    }}
                  >
                    Ref. {v.id}
                  </Row>
                  <Row className="g-0" style={{ marginBottom: "1rem" }}>
                    {v.product_colors.map((v: any, i: any) => (
                      <div
                        key={i}
                        style={{
                          display: "inline-block",
                          backgroundColor: `${v.hex_value}`,
                          height: "15px",
                          width: "15px",
                          marginRight: "2px",
                        }}
                      ></div>
                    ))}
                  </Row>
                  <Row className="g-0">
                    <Col className="col-9" style={{ color: "grey" }}>
                      {v.product_type.toUpperCase()}
                    </Col>
                    <Col>${v.price}</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};
export default ShoppingBagTable;
