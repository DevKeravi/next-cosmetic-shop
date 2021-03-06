import { Row, Container, Col, Card } from "react-bootstrap";
import ImgOverlayCard, { OverlayCardProps } from "./ImgOverlayCard";

const ImgProps: OverlayCardProps[] = [
  {
    key: "card1",
    src: "/longlip.png",
    title: ["HEATHER", "GREY BASICS"],
    desc: ["NEW ARRIVAL"],
  },

  {
    key: "card2",
    src: "/300x3001.jpeg",
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
    src: "/300x3002.jpeg",
    title: ["CHUCK TAYLORS"],
    desc: ["$125.00"],
  },
  {
    key: "card4",
    src: "/lip.png",
  },
  {
    key: "card5",
    src: "/300x3003.jpeg",
    title: ["JAXON HAT"],
    desc: ["BEANIE HAT"],
  },
  {
    key: "card6",
    src: "/palett.png",
  },
  {
    key: "card7",
    src: "/300x3004.jpeg",
    title: ["ELEGANT SHOES"],
    desc: ["BRAIDED LEATHER"],
  },
  {
    key: "card8",
    src: "/mirror.png",
    desc: [
      "Girls, Girls, Girls: A Look",
      "Back at 50 Years of the",
      "Prielli Calendar",
    ],
    hashTag: "Vogue",
  },
  {
    key: "card9",
    src: "/300x3005.jpeg",
    title: ["BASIC BLAZER"],
    desc: ["FROM $199.00"],
  },
  {
    key: "card10",
    src: "/300x6001.jpeg",
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
