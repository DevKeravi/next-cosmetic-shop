import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import { USER_LOGIN_SUCCESS } from "../reducers/user";
import wrapper from "../store/configureStore";

const about = () => {
  return (
    <Container fluid style={{ marginTop: "2rem", marginBottom: "5rem" }}>
      <Row className="g-0">
        <Col>
          <Row className="g-0" style={{ textAlign: "center" }}>
            <Col style={{ fontSize: "2rem" }}>ABOUT</Col>
          </Row>
          <Row
            className="g-0"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <Col
              style={{ fontSize: "1.2rem", fontStyle: "italic", color: "grey" }}
            >
              Lorem ipsum dolor sit amet enim. Etiam ullamcorp uspendisse a
              pellentesque.
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={6} xs={12}>
              <Image
                src="http://placehold.it/1200x600"
                alt="WHO WE ARE"
                fluid
              />
              <Row
                className="g-0"
                style={{ marginTop: "2rem", marginBottom: "1rem" }}
              >
                <Col style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  WHO WE ARE?
                </Col>
              </Row>
              <Row className="g-0">
                <Col lg={10}>
                  <Row className="g-0">
                    <Col style={{ marginBottom: "2rem", color: "grey" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus viverra vestibulum ex nec ultricies. Nulla
                      molestie scelerisque neque et placerat. Proin placerat
                      euismod urna. Vestibulum nec volutpat justo. Praesent
                      tristique ante sit amet vulputate commodo. Aliquam in
                      euismod mauris, nec tincidunt orci. Sed a consectetur
                      nisl. Cras bibendum mattis
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ color: "grey" }}>
                      augue id volutpat. Aliquam rhoncus mi eget mattis iaculis.
                      Curabitur convallis felis a iaculis rutrum. Vivamus
                      gravida, risus vitae laoreet ultrices, massa dolor finibus
                      dui, commodo malesuada ex tellus quis ex. Nulla tempus
                      ipsum posuere lectus maximus, id aliquet felis pretium.
                      Vestibulum felis orci, tincidunt eget sodales sit amet,
                      feugiat quis leo.
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={6} xs={12}>
              <Image
                src="http://placehold.it/1200x600"
                alt="WHO WE ARE"
                fluid
              />
              <Row
                className="g-0"
                style={{ marginTop: "2rem", marginBottom: "1rem" }}
              >
                <Col style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  WHAT WE ARE DOING?
                </Col>
              </Row>
              <Row className="g-0">
                <Col lg={10}>
                  <Row className="g-0">
                    <Col style={{ marginBottom: "2rem", color: "grey" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus viverra vestibulum ex nec ultricies. Nulla
                      molestie scelerisque neque et placerat. Proin placerat
                      euismod urna. Vestibulum nec volutpat justo. Praesent
                      tristique ante sit amet vulputate commodo. Aliquam in
                      euismod mauris, nec tincidunt orci. Sed a consectetur
                      nisl. Cras bibendum mattis
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ color: "grey" }}>
                      augue id volutpat. Aliquam rhoncus mi eget mattis iaculis.
                      Curabitur convallis felis a iaculis rutrum. Vivamus
                      gravida, risus vitae laoreet ultrices, massa dolor finibus
                      dui, commodo malesuada ex tellus quis ex. Nulla tempus
                      ipsum posuere lectus maximus, id aliquet felis pretium.
                      Vestibulum felis orci, tincidunt eget sodales sit amet,
                      feugiat quis leo.
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const cookie = req ? req.headers.cookie : "";
      if (cookie !== undefined) {
        const resp = await axios.get("http://localhost:3000/api/login");
        store.dispatch({
          type: USER_LOGIN_SUCCESS.type,
          payload: resp.data,
        });
      }

      return { props: {} };
    }
);
export default about;
