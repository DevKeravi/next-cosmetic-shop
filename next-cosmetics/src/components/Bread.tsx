import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

const gridLarge = 960;
interface BreadProps {
  link: string;
}

const LinkWrapper = styled.a`
  color: grey;
  text-decoration: none;
`;
const DivWrapper = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
  color: grey;
`;

// 추후 여러 링크를 map으로 순회하면서 만들게 변경
const Bread = ({ link }: BreadProps) => {
  const [isMobile, setIsMobile] = useState(0);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < gridLarge) {
        setIsMobile(1);
      } else {
        setIsMobile(0);
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <Container fluid style={{ marginBottom: "3rem" }}>
      <Row style={isMobile ? { marginTop: "1.5rem", textAlign: "center" } : {}}>
        <Col style={{ color: "grey" }}>
          <Link href="/" passHref>
            <LinkWrapper>HOME</LinkWrapper>
          </Link>
          <DivWrapper>/</DivWrapper>
          <Link href={link} passHref>
            <LinkWrapper>
              {link.slice(1, link.length).toUpperCase()}
            </LinkWrapper>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Bread;
