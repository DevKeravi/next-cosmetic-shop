import { Col, Container, Row } from "react-bootstrap";

import ImgOverlayCard, { OverlayCardProps } from "./ImgOverlayCard";

const ResGridProps: OverlayCardProps[] = [
  {
    key: "card1",
    src: "http://placehold.it/450x300",
  },
  {
    key: "card2",
    src: "http://placehold.it/450x200",
    title: ["ELEGANT SHOES"],
    desc: ["BRAIDED LEATHER"],
  },
  {
    key: "card3",
    src: "http://placehold.it/450x300",
    title: ["CHUCK TAYORS"],
    desc: ["$125.00"],
  },
  {
    key: "card4",
    src: "http://placehold.it/450x300",
    title: ["BASIC BLAZER"],
    desc: ["FROM $199.00"],
  },
  {
    key: "card5",
    src: "http://placehold.it/450x200",
    title: ["PREMIUM PRODUCETS"],
    desc: ["- 50% SALE"],
  },
  {
    key: "card6",
    src: "http://placehold.it/450x300",
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
        <Col md={12}>
          <ImgOverlayCard {...ResGridProps[2]} />
        </Col>
        <Col md={12}>
          <ImgOverlayCard {...ResGridProps[3]} />
        </Col>
        <Col md={12}>
          <ImgOverlayCard {...ResGridProps[4]} />
        </Col>
        <Col md={12}>
          <ImgOverlayCard {...ResGridProps[5]} />
        </Col>
      </Row>
    </Container>
  );
};
export default MainGridRes;
