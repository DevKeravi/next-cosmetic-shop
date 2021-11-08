import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const gridLarge = 960;

const ContainerWrapper = styled(Container)`
  border: ${(props) => (props.ismobile === 1 ? "none" : "1px solid #e5e5e5")};
`;
const FormLabel = styled(Form.Label)`
  color: grey;
`;
const FormGroup = styled(Form.Group)`
  margin-top: 2rem;
`;
const FormControl = styled(Form.Control)`
  border-radius: 0;
`;

const ShippingAddr = () => {
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
  return (
    <ContainerWrapper ismobile={isMobile} fluid>
      <Row
        className="g-0"
        style={{ textAlign: "center", fontSize: "2rem", marginTop: "5rem" }}
      >
        <Col>SHIPPING ADDRESS</Col>
      </Row>
      <Row
        className="g-0"
        style={{ textAlign: "center", fontStyle: "italic", color: "grey" }}
      >
        <Col>All fileds are required</Col>
      </Row>
      <Row className="g-0">
        <Form>
          <Col className="col-lg-6 offset-lg-3">
            <Row>
              <FormGroup>
                <FormLabel>SELECT DELIVERY METHOD</FormLabel>
                <Form.Select
                  size="lg"
                  style={{ color: "grey", fontSize: "0.9rem", borderRadius: 0 }}
                >
                  <option>우체국 택배 인터네셔널 - $15.00</option>
                </Form.Select>
              </FormGroup>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>FIRST NAME</FormLabel>
                  <FormControl></FormControl>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>LAST NAME</FormLabel>
                  <FormControl></FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <FormLabel>
                  ADDRESS <span style={{ fontStyle: "italic" }}>(line 1)</span>
                </FormLabel>
                <FormControl></FormControl>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <FormLabel>
                  ADDRESS <span style={{ fontStyle: "italic" }}>(line 2)</span>
                </FormLabel>
                <FormControl></FormControl>
              </FormGroup>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>CITY</FormLabel>
                  <FormControl></FormControl>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>POSTAL CODE</FormLabel>
                  <FormControl></FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>PHONE NUMBER</FormLabel>
                  <FormControl></FormControl>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>E-MAIL</FormLabel>
                  <FormControl></FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ marginBottom: "3rem" }}>
              <Col className="offset-lg-4">
                <FormGroup>
                  <Form.Check
                    style={{ color: "grey" }}
                    label="Use this address for Billing"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Form>
      </Row>
    </ContainerWrapper>
  );
};
export default ShippingAddr;
