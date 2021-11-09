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
import { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
} from "../../reducers/user";
import axios from "axios";
import wrapper from "../../store/configureStore";

const LinkItem = styled(Nav.Link)`
  margin-left: 2vw;
  margin-right: 2vw;
`;
const NavbarWrapper = styled(Navbar)`
  button {
    background-color: #8d8d8d;
    border: none;
    padding: 0.8rem;
    color: white;
    border-radius: 0;
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }
`;

const Gnb = () => {
  const [toogleModal, setToogleModal] = useState(false);
  const { userData, isLoggedIn } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleLogin = useCallback(async () => {
    dispatch({ type: USER_LOGIN_REQUEST.type });
    try {
      const resp = await axios.get("http://localhost:3000/api/login");
      dispatch({ type: USER_LOGIN_SUCCESS.type, payload: resp.data });
      setToogleModal(false);
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILURE.type, payload: error });
    }
  }, []);
  const handleLogout = useCallback(async () => {
    await axios.get("http://localhost:3000/api/logout");
    dispatch({ type: USER_LOGOUT_REQUEST.type });
  }, []);
  return (
    <>
      <NavbarWrapper
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
          <BsFillHandbagFill
            className="d-block d-md-none"
            style={{ position: "absolute", fontSize: "1.8rem", left: "70%" }}
          />
          <BsFillHandbagFill
            className="d-md-block d-lg-none d-none"
            style={{ position: "absolute", fontSize: "1.8rem", left: "80%" }}
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/lip" passHref>
                <LinkItem>Lip</LinkItem>
              </Link>
              <Link href="/eye" passHref>
                <LinkItem>Eye</LinkItem>
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
              <LinkItem eventKey={2}>
                <FaUserTie style={{ marginRight: "0.5vw" }} />
                {isLoggedIn ? (
                  <span>
                    Hi, {userData?.nickName} (
                    <span style={{ color: "#f68236" }} onClick={handleLogout}>
                      logout
                    </span>
                    )
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setToogleModal(true);
                    }}
                  >
                    Log In
                  </span>
                )}
              </LinkItem>
              <Link href="/basket" passHref>
                <LinkItem>
                  <BsFillHandbagFill style={{ marginRight: "0.5vw" }} />
                  Basket ({userData === null ? "0" : userData.basket.length})
                </LinkItem>
              </Link>
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
      </NavbarWrapper>
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
                            backgroundColor: "#f68236",
                            borderRadius: "0",
                            boxShadow: "none",
                            border: "1px solid #f68236",
                            marginBottom: "0.6rem",
                          }}
                          onClick={handleLogin}
                        >
                          LOG IN
                        </Button>
                      </Col>
                      <Col
                        style={{
                          textAlign: "center",
                          color: "#f68236",
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
