import { Col, Container, Row } from "react-bootstrap";

import ImgOverlayCard, { OverlayCardProps } from "./ImgOverlayCard";
var randomImage = [];
for (var i = 0; i < 4; i++) {
  randomImage.push(
    `https://source.unsplash.com/random/450x300?sig=${Math.floor(
      Math.random() * 10000
    )}`
  );
}
for (var i = 0; i < 2; i++) {
  randomImage.push(
    `https://source.unsplash.com/random/450x200?sig=${Math.floor(
      Math.random() * 10000
    )}`
  );
}

const ResGridProps: OverlayCardProps[] = [
  {
    key: "card1",
    src: randomImage[0],
  },
  {
    key: "card2",
    src: randomImage[4],
    title: ["ELEGANT SHOES"],
    desc: ["BRAIDED LEATHER"],
  },
  {
    key: "card3",
    src: randomImage[1],
    title: ["CHUCK TAYORS"],
    desc: ["$125.00"],
  },
  {
    key: "card4",
    src: randomImage[2],
    title: ["BASIC BLAZER"],
    desc: ["FROM $199.00"],
  },
  {
    key: "card5",
    src: randomImage[5],
    title: ["PREMIUM PRODUCETS"],
    desc: ["- 50% SALE"],
  },
  {
    key: "card6",
    src: randomImage[3],
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
