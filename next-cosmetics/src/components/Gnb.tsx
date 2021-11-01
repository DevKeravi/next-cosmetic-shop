import Link from "next/link";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

const LinkItem = styled(Nav.Link)`
  margin-left: 2vw;
  margin-right: 2vw;
`;

const Gnb = () => {
  const [toogleModal, setToogleModal] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          borderBottom: "solid 1px",
          borderBottomColor: "#CED4D3",
          paddingBottom: "2vw",
          marginBottom: "2vw",
        }}
      >
        <Container fluid style={{ padding: "0" }}>
          <Link href="/" passHref>
            <Navbar.Brand style={{ marginRight: "2vw" }}>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "black",
                  fontSize: "1.2rem",
                  color: "white",
                  padding: "0.8rem",
                }}
              >
                SH
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/eye" passHref>
                <LinkItem>Eye</LinkItem>
              </Link>
              <Link href="/lip" passHref>
                <LinkItem>Lip</LinkItem>
              </Link>
              <Link href="/cheek" passHref>
                <LinkItem>Cheek</LinkItem>
              </Link>
              <Link href="/foundation" passHref>
                <LinkItem>Foundation</LinkItem>
              </Link>
              <Link href="/about" passHref>
                <LinkItem>About</LinkItem>
              </Link>
            </Nav>
            <Nav>
              <LinkItem
                eventKey={2}
                onClick={() => {
                  setToogleModal(true);
                }}
              >
                <FaUserTie style={{ marginRight: "0.5vw" }} />
                Log In
              </LinkItem>
              <LinkItem href="#deets">
                <BsFillHandbagFill style={{ marginRight: "0.5vw" }} />
                Basket (0)
              </LinkItem>
            </Nav>
            <AiOutlineSearch
              style={{
                border: "solid 1px",
                fontSize: "2.5rem",
                padding: "0.6rem",
              }}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal fullscreen show={toogleModal} onHide={() => setToogleModal(false)}>
        <Modal.Body
          style={{ backgroundColor: "#e5e5e5" }}
          className="show-grid"
        >
          <Container>
            <Row className="g-0" style={{ textAlign: "center" }}>
              <Col>
                <div
                  style={{
                    border: "solid 2px white",
                    color: "white",
                    backgroundColor: "#e8e8e8",
                    fontSize: "1.5rem",
                    display: "inline-block",
                    padding: "1rem",
                    paddingLeft: "1.2rem",
                    paddingRight: "1.2rem",
                    marginTop: "7vh",
                    marginBottom: "5vh",
                  }}
                  onClick={() => {
                    setToogleModal(false);
                  }}
                >
                  SH
                </div>
              </Col>
            </Row>
            <Row
              className="g-0"
              style={{
                backgroundColor: "white",
                maxWidth: "500px",
                maxHeight: "500px",
                boxShadow: "0px 0px 30px 20px #bbbbbb",
                margin: "auto",
              }}
            >
              <Col style={{ padding: "3rem" }}>
                <Row className="g-0" style={{ textAlign: "center" }}>
                  <Col style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
                    SIGN IN
                  </Col>
                </Row>
                <Row className="g-0">
                  <Col>
                    <Form>
                      <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Label
                          style={{ color: "grey", fontSize: "0.8rem" }}
                        >
                          E-MAIL
                        </Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label
                          style={{ color: "grey", fontSize: "0.8rem" }}
                        >
                          PASSWORD
                        </Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Col style={{ textAlign: "center", marginTop: "3rem" }}>
                        <Button
                          style={{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "orange",
                            borderRadius: "0",
                            boxShadow: "none",
                            border: "1px solid orange",
                            marginBottom: "0.6rem",
                          }}
                        >
                          LOG IN
                        </Button>
                      </Col>
                      <Col
                        style={{
                          textAlign: "center",
                          color: "orange",
                          fontSize: "0.8rem",
                        }}
                      >
                        I don't have an account
                      </Col>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gnb;
