import { Card } from "react-bootstrap";
export interface OverlayCardProps {
  key?: string;
  src: string;
  title?: string[];
  desc?: string[];
  hashTag?: string;
  resVisable?: boolean;
}
const ImgOverlayCard = ({ src, title, desc, hashTag }: OverlayCardProps) => {
  return (
    <Card className="bg-dark text-white " style={{ border: "0px solid" }}>
      <Card.Img src={src} alt="Card image" />
      <Card.ImgOverlay className="d-flex">
        <div
          className="align-self-center mx-auto"
          style={{ textAlign: "center" }}
        >
          {title?.map((v, i) => (
            <Card.Title key={i}>{v}</Card.Title>
          ))}
          {desc?.map((v, i) => (
            <Card.Text
              key={i}
              style={{
                fontStyle: "italic",
              }}
            >
              {v}
            </Card.Text>
          ))}
          {hashTag ? (
            <Card.Text
              style={{
                fontWeight: "bold",
              }}
            >
              @{hashTag}
            </Card.Text>
          ) : null}
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ImgOverlayCard;
