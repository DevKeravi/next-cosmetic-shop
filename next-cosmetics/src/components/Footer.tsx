import { Row, Container, Col } from "react-bootstrap";
import FooterCard, { FooterCardProps } from "./FooterCard";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const cardProps: FooterCardProps[] = [
  {
    title: "COLLECTION",
    categories: [
      {
        title: "Woman",
        link: "#",
      },
      {
        title: "Men",
        link: "#",
      },
      {
        title: "Kids",
        link: "#",
      },
      {
        title: "Comming Soon",
        link: "#",
      },
    ],
  },
  {
    title: "SITE",
    categories: [
      {
        title: "Terms of Service",
        link: "#",
      },
      {
        title: "Privacy Policy",
        link: "#",
      },
      {
        title: "Copyright Policy",
        link: "#",
      },
      {
        title: "Press Kit",
        link: "#",
      },
      {
        title: "Support",
        link: "#",
      },
    ],
  },
  {
    title: "SHOP",
    categories: [
      {
        title: "About us",
        link: "#",
      },
      {
        title: "Shipping Methods",
        link: "#",
      },
      {
        title: "Career",
        link: "#",
      },
      {
        title: "Contact",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Container style={{ marginTop: "4vmax" }}>
      <Row>
        <Row>
          <Col
            className="d-sm-block d-lg-none"
            style={{ marginBottom: "1rem" }}
          >
            <hr />
          </Col>
        </Row>
        <Col
          className="d-none d-lg-block"
          style={{ borderRight: "1px solid", borderRightColor: "#CED4D3" }}
        >
          <FooterCard {...cardProps[0]} />
        </Col>
        <Col
          className="d-none d-lg-block"
          style={{ borderRight: "1px solid", borderRightColor: "#CED4D3" }}
        >
          <FooterCard {...cardProps[1]} />
        </Col>
        <Col
          className="d-none d-lg-block"
          style={{ borderRight: "1px solid", borderRightColor: "#CED4D3" }}
        >
          <FooterCard {...cardProps[2]} />
        </Col>
        <Col className="d-none d-lg-block">
          <Col style={{ padding: "0.5rem" }} lg={12}>
            <Row>
              <Col style={{ marginBottom: "1rem" }}>
                <div
                  className="footerCardTitle"
                  style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}
                >
                  SOCIAL
                </div>
                <div style={{ color: "grey" }}>
                  <div>Shoper is made with love in Warsaw.</div>
                  <div>2021 All rights reserved. Dev Keravi</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <BsTwitter
                  style={{
                    fontSize: "2.2rem",
                    padding: "0.5rem",
                    border: "1px solid",
                    marginRight: "1rem",
                  }}
                />
                <FaFacebookF
                  style={{
                    fontSize: "2.2rem",
                    padding: "0.5rem",
                    border: "1px solid",
                    marginRight: "1rem",
                  }}
                />
                <ImInstagram
                  style={{
                    fontSize: "2.2rem",
                    padding: "0.5rem",
                    border: "1px solid",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Col>
        <Col className="d-lg-none d-sm-block">
          <Col
            style={{
              padding: "0.5rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
            md={12}
          >
            <Row>
              <Col style={{ marginBottom: "2rem" }}>
                <div
                  className="footerCardTitle"
                  style={{ marginBottom: "1.5rem", fontSize: "1.6rem" }}
                >
                  SOCIAL
                </div>
                <div style={{ color: "grey" }}>
                  <div>Shoper is made with love in Warsaw.</div>
                  <div>2021 All rights reserved. Dev Keravi</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <BsTwitter
                  style={{
                    fontSize: "2rem",
                    padding: "0.5rem",
                    border: "1px solid",
                    marginRight: "1rem",
                  }}
                />
                <FaFacebookF
                  style={{
                    fontSize: "2rem",
                    padding: "0.5rem",
                    border: "1px solid",
                    marginRight: "1rem",
                  }}
                />
                <ImInstagram
                  style={{
                    fontSize: "2rem",
                    padding: "0.5rem",
                    border: "1px solid",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
