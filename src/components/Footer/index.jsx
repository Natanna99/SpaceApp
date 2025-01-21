import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 6.25rem;
  background: #041833;
  color: #fff;
  margin-top: 3.75rem;
  font-size: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1.25rem;
  }
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 1.563rem;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    order: -1;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <p> Curso Alura.</p>
      <ContainerIcon>
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </ContainerIcon>
    </ContainerFooter>
  );
};

export default Footer;
