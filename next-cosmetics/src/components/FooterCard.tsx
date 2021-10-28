import { Col } from "react-bootstrap";

export interface FooterCardProps {
  title: string;
  categories: FooterCategory[];
}
export interface FooterCategory {
  title: string;
  link: string;
}
const FooterCard = ({ title, categories }: FooterCardProps) => {
  return (
    <Col style={{ padding: "0.5rem" }}>
      <div
        className="footerCardTitle"
        style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}
      >
        {title}
      </div>
      {categories.map((v, i) => (
        <div key={i}>
          <a href={v.link} style={{ color: "grey", textDecoration: "none" }}>
            {v.title}
          </a>
        </div>
      ))}
    </Col>
  );
};
export default FooterCard;
