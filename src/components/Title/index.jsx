import styled from "styled-components";

const StyleTitle = styled.h2`
  color: #7b78e5;

  @media screen and (min-width: 768px) {
    text-align: ${(props) => (props.position ? props.position : "left")};
  }
`;

const Title = ({ children, position }) => {
  return (
    <>
      <StyleTitle position={position}>{children}</StyleTitle>
    </>
  );
};

export default Title;
