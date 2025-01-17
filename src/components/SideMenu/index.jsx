import styled from "styled-components";
import NavigationItem from "./NavigationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
`;

const ContainerNav = styled.nav`
  display: flex;
  width: 200px;
  height: 270px;
  padding: 20px;
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  @media screen and (min-width: 768px) {
    background: transparent;
  }
`;

const ButtonClose = styled.div`
  color: #fff;
  position: relative;
  right: 0;
  left: 15px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SideMenu = ({ click, open }) => {
  return (
    <>
      <ContainerNav>
        <ContainerList>
          <NavigationItem
            icon="fa-solid fa-house"
            nameItem="Início"
            link="#"
            active
          />
          <NavigationItem
            icon="fa-solid fa-eye"
            nameItem="Mais vistas"
            link="#"
          />
          <NavigationItem
            icon="fa-solid fa-thumbs-up"
            nameItem="Mais curtidas"
            link="#"
          />
          <NavigationItem icon="fa-solid fa-sun" nameItem="Novas" link="#" />
          <NavigationItem
            icon="fa-solid fa-lightbulb"
            nameItem="Surpreenda-me"
            link="#"
          />
        </ContainerList>
        <ButtonClose onClick={() => click(!open)}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </ButtonClose>
      </ContainerNav>
    </>
  );
};

export default SideMenu;
