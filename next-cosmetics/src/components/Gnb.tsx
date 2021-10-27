import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import styled from "styled-components";

const LinkItem = styled(Nav.Link)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const Gnb = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          marginTop: "2vw",
          borderBottom: "solid 1px",
          paddingBottom: "3vw",
          marginBottom: "2vw",
        }}
      >
        <Container fluid style={{ padding: "0" }}>
          <Navbar.Brand href="#home" style={{ marginRight: "2rem" }}>
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
              <LinkItem href="#features">Woman</LinkItem>
              <LinkItem href="#pricing">Man</LinkItem>
              <LinkItem href="#pricing">Kids</LinkItem>
              <LinkItem href="#pricing">Comming Soon</LinkItem>
              <LinkItem href="#pricing">About</LinkItem>
            </Nav>
            <Nav>
              <LinkItem eventKey={2} href="#memes">
                <FaUserTie style={{ marginRight: "0.5rem" }} />
                Log In
              </LinkItem>
              <LinkItem href="#deets">
                <BsFillHandbagFill style={{ marginRight: "0.5rem" }} />
                Basket (0)
              </LinkItem>
            </Nav>
            <AiOutlineSearch
              style={{
                border: "solid 1px",
                fontSize: "2.7rem",
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
