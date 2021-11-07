import { useState } from "react";
import { Button, Image, Table } from "react-bootstrap";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
interface bagProps {
  bagList: any;
}

const ShoppingBagTable = ({ bagList }: bagProps) => {
  const [qty, setQTY] = useState(1);
  return (
    <Table responsive borderless>
      <thead
        style={{
          color: "#999999",
          fontWeight: "normal",
          fontSize: "0.8rem",
          borderBottom: "1px solid",
          borderBlockColor: "#999999",
        }}
      >
        <tr>
          <th>PRODUCT</th>
          <th>DISCRIPTION</th>
          <th>COLOR</th>
          <th style={{ textAlign: "center" }}>QTY</th>
          <th style={{ textAlign: "center" }}>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {bagList.map((v: any) => (
          <tr
            style={{
              borderBottom: "1px solid",
              borderBottomColor: "#999999",
            }}
          >
            <td className="productImage">
              <Image
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  border: "1px solid",
                  borderColor: "#999999",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
                src={v.image_link}
                alt={v.name}
              />
            </td>
            <td
              className="productDiscription"
              style={{ display: "table-cell", verticalAlign: "middle" }}
            >
              <div>{v.name.toUpperCase()}</div>
              <div>Ref. {v.id}</div>
            </td>
            <td
              className="productColor"
              style={{ display: "table-cell", verticalAlign: "middle" }}
            >
              {v.product_colors.map((color: any) => (
                <div
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    marginRight: "1px",
                    backgroundColor: `${color.hex_value}`,
                  }}
                ></div>
              ))}
            </td>
            <td
              className="productQTY"
              style={{
                display: "table-cell",
                verticalAlign: "middle",
                fontSize: "0.9rem",
                textAlign: "center",
                padding: 0,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  marginRight: "0.5rem",
                  position: "relative",
                  bottom: "0.5rem",
                }}
              >
                {qty}
              </div>
              <div style={{ display: "inline-block" }}>
                <div style={{ display: "inline-block" }}>
                  <div>
                    <BsFillArrowUpSquareFill />
                  </div>
                  <div>
                    <BsFillArrowDownSquareFill />
                  </div>
                </div>
              </div>
            </td>
            <td
              className="productAmount"
              style={{
                display: "table-cell",
                verticalAlign: "middle",
                fontSize: "0.9rem",
                textAlign: "center",
                padding: 0,
              }}
            >
              ${v.price}
              <Button
                style={{
                  fontSize: "0.9rem",
                  border: "none",
                  color: "black",
                  boxShadow: "none",
                  backgroundColor: "white",
                  margin: "0",
                  marginLeft: "1rem",
                  padding: 0,
                }}
                onClick={(e) => {
                  console.log("test");
                }}
              >
                X
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default ShoppingBagTable;
