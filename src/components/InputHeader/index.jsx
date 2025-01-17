import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ContainerInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .iconInput {
    color: #c98cf1;
    font-size: 20px;
    position: absolute;
    right: 48px;
    top: 32%;
  }
`;

const Input = styled.input`
  width: 90%;
  height: 55px;
  border: 2px solid transparent;
  border-color: #c98cf1;
  border-radius: 10px;
  padding: 0 10px;
  background-color: transparent;
  box-sizing: border-box;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  &:focus {
    border-color: #7b78e5;
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const InputHearder = ({ props }) => {
  return (
    <ContainerInput>
      <Input type="text" placeholder="O que você procura?" {...props} />
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        className="iconInput"
      />
    </ContainerInput>
  );
};

export default InputHearder;
