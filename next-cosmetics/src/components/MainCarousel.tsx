import { Carousel, Container } from "react-bootstrap";
const MainCarousel = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          style={{ minHeight: "180px" }}
          className="d-block w-100"
          src="/1920x10801.jpeg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ minHeight: "180px" }}
          className="d-block w-100"
          src="/1920x10802.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ minHeight: "180px" }}
          className="d-block w-100"
          src="/1920x10803.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
