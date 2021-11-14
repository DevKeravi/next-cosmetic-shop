import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

const gridLarge = 960;

interface BreadProps {
  link: string[];
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
          {link.map((v: any) => {
            return (
              <>
                <DivWrapper>/</DivWrapper>
                <Link href={v} passHref>
                  <LinkWrapper>
                    {v.slice(1, v.length).toUpperCase()}
                  </LinkWrapper>
                </Link>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Bread;
