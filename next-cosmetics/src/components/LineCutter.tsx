import styled from "styled-components";

const LeftDiagnoal = styled.div`
  width: 3px;
  height: 30px;
  background-color: #f68236;
  transform: rotate(-45deg);
  display: inline-block;
  margin-right: 1rem;
`;
const RightDiagnoal = styled.div`
  width: 3px;
  height: 30px;
  background-color: #f68236;
  transform: rotate(45deg);
  display: inline-block;
  margin-right: 1rem;
`;

const LineCutter = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "3rem", marginBottom: "5rem" }}
    >
      <LeftDiagnoal />
      <RightDiagnoal />
      <LeftDiagnoal />
      <RightDiagnoal />
      <LeftDiagnoal />
      <RightDiagnoal />
    </div>
  );
};

export default LineCutter;
