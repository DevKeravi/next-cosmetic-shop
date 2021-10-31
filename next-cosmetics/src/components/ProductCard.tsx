import { Image, Container, Row, Col } from "react-bootstrap";

interface ProductCardProps {
  productList: any;
}
const ProductCard = ({ productList }: ProductCardProps) => {
  const title = productList[0]?.product_type.replace("_", " ").toUpperCase();
  return (
    <Container style={{ marginTop: "2rem", marginBottom: "1rem" }}>
      <Row
        className="g-0"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        <Col
          style={{
            fontSize: "2rem",
          }}
        >
          {title}
        </Col>
        <Row className="g-0">
          <Col>
            <a
              href={`/category/${productList[0].product_type}`}
              style={{ fontStyle: "italic", color: "grey" }}
            >
              show more
            </a>
          </Col>
        </Row>
      </Row>
      <Row>
        {productList.map((v: any) => (
          <Col lg={3} xs={6} key={v.id} style={{ textAlign: "center" }}>
            <Row className="g-0" style={{ marginTop: "1rem" }}>
              <Col>
                <Image
                  src={v.image_link}
                  alt={v.name}
                  style={{ maxWidth: "150px", maxHeight: "200px" }}
                />
              </Col>
              <Row className="g-0">
                <Col>{v.name}</Col>
              </Row>
              <Row className="g-0">
                <Col>$ {v.price}</Col>
              </Row>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProductCard;
