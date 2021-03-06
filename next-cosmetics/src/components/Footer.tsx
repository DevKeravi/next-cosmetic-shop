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
        title: "Eye",
        link: "#",
      },
      {
        title: "Lip",
        link: "#",
      },
      {
        title: "Cheek",
        link: "#",
      },
      {
        title: "Foundation",
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
        link: "/contact",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Container style={{ marginTop: "4vmax" }}>
      <Row className="">
        <Row className="d-block d-lg-none g-0" style={{ marginBottom: "3rem" }}>
          <div style={{ border: "1px solid #e5e5e5" }}></div>
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
            <Row className="g-0">
              <Col style={{ marginBottom: "1rem" }}>
                <div
                  className="footerCardTitle"
                  style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}
                >
                  SOCIAL
                </div>
                <div style={{ color: "grey" }}>
                  <div>
                    {process.env.NODE_ENV === "production"
                      ? "Production Mode"
                      : "Development Mode"}
                  </div>
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
                    border: "1px solid grey",
                    marginRight: "1rem",
                  }}
                />
                <FaFacebookF
                  style={{
                    fontSize: "2.2rem",
                    padding: "0.5rem",
                    border: "1px solid grey",
                    marginRight: "1rem",
                  }}
                />
                <ImInstagram
                  style={{
                    fontSize: "2.2rem",
                    padding: "0.5rem",
                    border: "1px solid grey",
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
            <Row className="g-0">
              <Col style={{ marginBottom: "2rem" }}>
                <div
                  className="footerCardTitle"
                  style={{ marginBottom: "1.5rem", fontSize: "1.6rem" }}
                >
                  SOCIAL
                </div>
                <div style={{ color: "grey" }}>
                  <div>
                    {process.env.NODE_ENV === "production"
                      ? "Production Mode"
                      : "Development Mode"}
                  </div>
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
                    border: "1px solid grey",
                    marginRight: "1rem",
                  }}
                />
                <FaFacebookF
                  style={{
                    fontSize: "2rem",
                    padding: "0.5rem",
                    border: "1px solid grey",
                    marginRight: "1rem",
                  }}
                />
                <ImInstagram
                  style={{
                    fontSize: "2rem",
                    padding: "0.5rem",
                    border: "1px solid grey",
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
