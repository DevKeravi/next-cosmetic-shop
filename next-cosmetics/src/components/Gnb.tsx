import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import styled from "styled-components";

const LinkItem = styled(Nav.Link)`
  margin-left: 2vw;
  margin-right: 2vw;
`;

const Gnb = () => {
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
          <Navbar.Brand href="#home" style={{ marginRight: "2vw" }}>
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkItem href="/eye">Eye</LinkItem>
              <LinkItem href="/lip">Lip</LinkItem>
              <LinkItem href="/cheek">Cheek</LinkItem>
              <LinkItem href="/foundation">Foundation</LinkItem>
              <LinkItem href="/about">About</LinkItem>
            </Nav>
            <Nav>
              <LinkItem eventKey={2} href="#memes">
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
    </>
  );
};

export default Gnb;
