import { Row, Container, Col, Card } from "react-bootstrap";
import ImgOverlayCard, { OverlayCardProps } from "./ImgOverlayCard";

const ImgProps: OverlayCardProps[] = [
  {
    key: "card1",
    src: "http://placehold.it/300x600",
    title: ["HEATHER", "GREY BASICS"],
    desc: ["NEW ARRIVAL"],
  },
  {
    key: "card2",
    src: "http://placehold.it/300x300",
    desc: [
      "Opening Ceremony",
      "@IndonesiaFW tomorrow",
      "PMers! Are you ready for the",
      "biggest fashion movement in",
    ],
    hashTag: "PuspitaMarthalD",
  },
  {
    key: "card3",
    src: "http://placehold.it/300x300",
    title: ["CHUCK TAYLORS"],
    desc: ["$125.00"],
  },
  {
    key: "card4",
    src: "http://placehold.it/300x300",
  },
  {
    key: "card5",
    src: "http://placehold.it/300x300",
    title: ["JAXON HAT"],
    desc: ["BEANIE HAT"],
  },
  {
    key: "card6",
    src: "http://placehold.it/300x300",
  },
  {
    key: "card7",
    src: "http://placehold.it/300x300",
    title: ["ELEGANT SHOES"],
    desc: ["BRAIDED LEATHER"],
  },
  {
    key: "card8",
    src: "http://placehold.it/300x300",
    desc: [
      "Girls, Girls, Girls: A Look",
      "Back at 50 Years of the",
      "Prielli Calendar",
    ],
    hashTag: "Vogue",
  },
  {
    key: "card9",
    src: "http://placehold.it/300x300",
    title: ["BASIC BLAZER"],
    desc: ["FROM $199.00"],
  },
  {
    key: "card10",
    src: "http://placehold.it/300x600",
    title: ["JEANS FOR", "ADVENTURE"],
    desc: ["NEW ARRIVAL"],
  },
];

const MainGrid = () => {
  return (
    <Container>
      <Row className="g-0">
        <Col lg={6} className="mainGridLeft">
          <Row className="g-0">
            <Col lg={6}>
              <ImgOverlayCard {...ImgProps[0]} />
            </Col>
            <Col lg={6}>
              <Row className="g-0">
                <Col lg={12}>
                  <ImgOverlayCard {...ImgProps[1]} />
                </Col>
                <Col lg={12}>
                  <ImgOverlayCard {...ImgProps[2]} />
                </Col>
              </Row>
            </Col>
            <Row className="g-0">
              <Col lg={6}>
                <ImgOverlayCard {...ImgProps[3]} />
              </Col>
              <Col lg={6}>
                <ImgOverlayCard {...ImgProps[4]} />
              </Col>
            </Row>
          </Row>
        </Col>
        <Col lg={6} className="mainGridRight1">
          <Row className="g-0">
            <Col lg={6}>
              <ImgOverlayCard {...ImgProps[5]} />
            </Col>
            <Col lg={6}>
              <ImgOverlayCard {...ImgProps[6]} />
            </Col>
          </Row>
          <Row className="g-0">
            <Col lg={6}>
              <ImgOverlayCard {...ImgProps[7]} />
              <ImgOverlayCard {...ImgProps[8]} />
            </Col>
            <Col lg={6}>
              <ImgOverlayCard {...ImgProps[9]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainGrid;
