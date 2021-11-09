import { Carousel, Container, Row, Col } from "react-bootstrap";
interface lookProps {
  title: string;
}
const LookCarousel = ({ title }: lookProps) => {
  var randomImage = [];
  for (var i = 0; i < 3; i++) {
    randomImage.push(
      `https://source.unsplash.com/random/1920x1080?sig=${Math.floor(
        Math.random() * 10000
      )}`
    );
  }

  return (
    <Container
      fluid
      style={{ marginTop: "5rem" }}
      className="d-none d-lg-block"
    >
      <Row style={{ marginBottom: "4rem" }}>
        <div style={{ border: "1px solid #e5e5e5" }}></div>
      </Row>
      <Row
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "1.5rem",
          fontStyle: "italic",
          color: "grey",
        }}
      >
        <Col>{title}</Col>
      </Row>
      <Row>
        <Col>
          <Carousel interval={3000}>
            <Carousel.Item>
              <img
                style={{ maxHeight: "180px" }}
                className="d-block w-100"
                src={randomImage[0]}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ maxHeight: "180px" }}
                className="d-block w-100"
                src={randomImage[1]}
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ maxHeight: "180px" }}
                className="d-block w-100"
                src={randomImage[2]}
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default LookCarousel;
