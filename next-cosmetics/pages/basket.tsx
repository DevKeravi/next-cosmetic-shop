import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../reducers/user";
import wrapper from "../store/configureStore";

const basket = () => {
  const { userData } = useSelector((state: any) => state.user);

  if (userData === null) {
    return (
      <Container>
        <Row>
          <Col>로그인이 필요한 서비스 입니다.</Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col></Col>
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
export default basket;
