import { Row, Container, Col, Card, Image } from "react-bootstrap";

const MainGrid = () => {
  return (
    <Container>
      <div className="row g-0">
        <div className="col-lg-6">
          <Card.Img src="http://placehold.it/300x600" />
        </div>
        <div className="col-lg-6">
          <div className="row g-0">
            <div className="col-lg-12">
              <Card.Img src="http://placehold.it/300x300" />
            </div>
            <div className="col-lg-12">
              <Card.Img src="http://placehold.it/300x300" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainGrid;
