import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import styled from "styled-components";
import Bread from "../src/components/Bread";
import LookCarousel from "../src/components/LookCarousel";

const FormLabel = styled(Form.Label)`
  color: grey;
`;
const FormGroup = styled(Form.Group)`
  margin-top: 2rem;
`;
const FormControl = styled(Form.Control)`
  border-radius: 0;
  font-size: 1.2rem;
  color: grey;
  font-style: italic;
`;
const gridLarge = 960;

const contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [topic, setTopic] = useState("");
  useEffect(() => {
    if (window.innerWidth < gridLarge) {
      setIsMobile(true);
      setName("Name");
      setEmail("Email");
      setMsg("Message");
      setTopic("Topic");
    }
    const onResize = () => {
      if (window.innerWidth < gridLarge) {
        setIsMobile(true);
        setName("Name");
        setEmail("Email");
        setMsg("Message");
        setTopic("Topic");
      } else {
        setIsMobile(false);
        setName("");
        setEmail("");
        setMsg("");
        setTopic("Lorem ipsum");
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Container style={{ marginBottom: "4vw" }}>
      <Bread link={[`/contact`]} />
      <Row
        className="g-0"
        style={{ textAlign: "center", fontSize: "2rem", marginTop: "5rem" }}
      >
        <Col>CONTACT</Col>
      </Row>
      <Row
        className="g-0"
        style={{
          textAlign: "center",
          fontStyle: "italic",
          color: "grey",
          marginBottom: "1.5vw",
          fontSize: "1.5vmax",
        }}
      >
        <Col>
          Lorem ipsum dolor sit amet enim. Etiam ullamcorp uspendisse a
          pellentesque.
        </Col>
      </Row>
      <Form>
        <Col
          className="col-lg-6 offset-lg-3"
          style={isMobile ? { marginBottom: "2rem" } : {}}
        >
          <Row>
            <FormGroup>
              <FormLabel className="d-lg-block d-none">TOPIC</FormLabel>
              <Form.Select
                size="lg"
                style={{
                  color: "grey",
                  fontSize: "1.2rem",
                  borderRadius: 0,
                  fontStyle: "italic",
                }}
              >
                <option>{topic}</option>
              </Form.Select>
            </FormGroup>
          </Row>
          <Row>
            <Col lg={6} xs={12}>
              <FormGroup>
                <FormLabel className="d-lg-block d-none">Name</FormLabel>
                <FormControl placeholder={name}></FormControl>
              </FormGroup>
            </Col>
            <Col lg={6} xs={12}>
              <FormGroup>
                <FormLabel className="d-lg-block d-none">E-MAIL</FormLabel>
                <FormControl placeholder={email}></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel className="d-lg-block d-none">MESSAGE</FormLabel>
                <FloatingLabel
                  style={{
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: "grey",
                  }}
                  controlId="floatingTextarea2"
                  label={msg}
                >
                  <Form.Control
                    as="textarea"
                    placeholder={msg}
                    style={{
                      height: "200px",
                      borderRadius: 0,
                    }}
                  />
                </FloatingLabel>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col
            className="offset-lg-5"
            lg={2}
            md={12}
            style={{ marginTop: "2rem" }}
          >
            <div className="d-grid">
              <Button
                style={{
                  backgroundColor: "#f68236",
                  borderRadius: 0,
                  border: "none",
                  paddingTop: "0.8rem",
                  paddingBottom: "0.8rem",
                  paddingLeft: "0",
                  paddingRight: "0",
                }}
                size="lg"
              >
                <span style={{ fontSize: "1.1rem" }}>SEND</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <Row className="g-0">
        <LookCarousel title="You may also like" />
      </Row>
    </Container>
  );
};

export default contact;
