import { Carousel, Container } from "react-bootstrap";
const MainCarousel = () => {
  var randomImage = [];
  for (var i = 0; i < 3; i++) {
    randomImage.push(
      `https://source.unsplash.com/random/1920x1080?sig=${Math.floor(
        Math.random() * 10000
      )}`
    );
  }
  return (
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
  );
};

export default MainCarousel;
