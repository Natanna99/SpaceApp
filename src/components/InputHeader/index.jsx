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
    font-size: 1.25rem;
    position: absolute;
    right: 1.25rem;
    top: 32%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 3.438rem;
  border: 0.125rem solid transparent;
  border-color: #c98cf1;
  border-radius: 0.625rem;
  padding: 0 0.625rem;
  background-color: transparent;
  box-sizing: border-box;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;

  &:focus {
    border-color: #7b78e5;
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 1.25rem;
  }
`;

const InputHearder = ({ setSearch, value }) => {
  return (
    <ContainerInput>
      <Input
        type="text"
        placeholder="O que você procura?"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        className="iconInput"
      />
    </ContainerInput>
  );
};

export default InputHearder;
