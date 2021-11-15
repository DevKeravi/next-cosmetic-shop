import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";

import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";

const gridLarge = 960;

const ContainerWrapper = styled(Container)`
  border: ${(props) => (props.ismobile === 1 ? "none" : "1px solid #e5e5e5")};
  padding-bottom: 7rem;
`;
const FormLabel = styled(Form.Label)`
  color: grey;
`;
const FormGroup = styled(Form.Group)`
  margin-top: 2rem;
`;

const RowWrapper = styled(Row)`
  font-size: 1.2rem;
  color: grey;
`;
const ColAlignWrapper = styled(Col)`
  text-align: ${(props) => props.align};
`;

const PaymentOpt = () => {
  const { basket } = useSelector((state: any) => state.user.userData);

  const [subtotal, setSubtotal] = useState(0);
  const [isMobile, setIsMobile] = useState(0);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < gridLarge) {
        setIsMobile(1);
      } else {
        setIsMobile(0);
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useEffect(() => {
    var temp = 0;
    basket.map((v: any) => {
      temp += parseInt(v.price) * v.qty;
    });
    setSubtotal(temp);
  }, [basket]);
  return (
    <ContainerWrapper ismobile={isMobile} fluid>
      <Row
        className="g-0"
        style={{ textAlign: "center", fontSize: "2rem", marginTop: "5rem" }}
      >
        <Col>PAYMENT OPTIONS</Col>
      </Row>
      <Row
        className="g-0"
        style={{
          textAlign: "center",
          fontStyle: "italic",
          color: "grey",
          marginBottom: "5rem",
        }}
      >
        <Col>All fileds are required</Col>
      </Row>
      <Container style={{ marginBottom: "5rem" }}>
        <RowWrapper className="g-4">
          <ColAlignWrapper align="right">Subtotal:</ColAlignWrapper>
          <ColAlignWrapper align="left">${subtotal}</ColAlignWrapper>
        </RowWrapper>
        <RowWrapper className="g-4">
          <ColAlignWrapper align="right">Shipping:</ColAlignWrapper>
          <ColAlignWrapper align="left">$15.00</ColAlignWrapper>
        </RowWrapper>

        <Row className="g-4" style={{ fontSize: "1.2rem", color: "#f68236" }}>
          <Col style={{ textAlign: "right" }}>Total:</Col>
          <Col style={{ textAlign: "left" }}>${subtotal + 15}</Col>
        </Row>
      </Container>
      <Row className="g-0">
        <Form>
          <Col className="col-lg-6 offset-lg-3">
            <Row>
              <FormGroup>
                <FormLabel>SELECT PAYMENT METHOD</FormLabel>
                <InputGroup>
                  <Form.Control
                    style={{
                      color: "grey",
                      fontSize: "0.9rem",
                      borderRadius: 0,
                      borderRight: "none",
                    }}
                    placeholder="신용 카드"
                  ></Form.Control>
                  <InputGroup.Text
                    style={{
                      backgroundColor: "white",
                      borderRadius: 0,
                      fontSize: "2rem",
                      borderLeft: "none",
                    }}
                  >
                    <RiVisaLine style={{ marginRight: "1rem" }} />
                    <FaCcMastercard style={{ marginRight: "1.5rem" }} />
                    <AiFillCaretDown style={{ fontSize: "0.9rem" }} />
                  </InputGroup.Text>
                </InputGroup>
                <Row style={{ textAlign: "center", marginTop: "3rem" }}>
                  <Col>
                    <Button
                      style={{
                        backgroundColor: "#f68236",
                        border: "none",
                        borderRadius: 0,
                        fontSize: "0.9rem",
                        padding: "1rem",
                        paddingLeft: "4rem",
                        paddingRight: "4rem",
                      }}
                    >
                      ORDER NOW
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Row>
          </Col>
        </Form>
      </Row>
    </ContainerWrapper>
  );
};
export default PaymentOpt;
