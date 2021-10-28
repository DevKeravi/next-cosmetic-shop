import { Carousel, Container } from "react-bootstrap";
const MainCarousel = () => {
  return (
    <Carousel interval={100000000}>
      <Carousel.Item>
        <img
          style={{ maxHeight: "180px" }}
          className="d-block w-100"
          src="https://via.placeholder.com/1920x1080"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "180px" }}
          className="d-block w-100"
          src="https://via.placeholder.com/1920x1080"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "180px" }}
          className="d-block w-100"
          src="https://via.placeholder.com/1920x1080"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
