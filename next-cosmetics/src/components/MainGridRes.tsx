import { Col, Container, Row } from "react-bootstrap";

import ImgOverlayCard, { OverlayCardProps } from "./ImgOverlayCard";

const ResGridProps: OverlayCardProps[] = [
  {
    key: "card1",
    src: "/450x3001.jpeg",
  },
  {
    key: "card2",
    src: "/450x2001.jpeg",
    title: ["ELEGANT SHOES"],
    desc: ["BRAIDED LEATHER"],
  },
  {
    key: "card3",
    src: "/450x3002.jpeg",
    title: ["CHUCK TAYORS"],
    desc: ["$125.00"],
  },
  {
    key: "card4",
    src: "/450x3003.jpeg",
    title: ["BASIC BLAZER"],
    desc: ["FROM $199.00"],
  },
  {
    key: "card5",
    src: "/450x2002.jpeg",
    title: ["PREMIUM PRODUCETS"],
    desc: ["- 50% SALE"],
  },
  {
    key: "card6",
    src: "/450x3004.jpeg",
    title: ["BASIC BLAZER"],
    desc: ["FROM $199.00"],
  },
];
const MainGridRes = () => {
  return (
    <Container>
      <Row className="g-0">
        <Col xs={12}>
          <ImgOverlayCard {...ResGridProps[0]} />
        </Col>
        <Col xs={12}>
          <ImgOverlayCard {...ResGridProps[1]} />
        </Col>
        <Col xs={12}>
          <ImgOverlayCard {...ResGridProps[2]} />
        </Col>
        <Col xs={12}>
          <ImgOverlayCard {...ResGridProps[3]} />
        </Col>
        <Col xs={12}>
          <ImgOverlayCard {...ResGridProps[4]} />
        </Col>
        <Col xs={12}>
          <ImgOverlayCard {...ResGridProps[5]} />
        </Col>
      </Row>
    </Container>
  );
};
export default MainGridRes;
