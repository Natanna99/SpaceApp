import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import SideMenu from "../SideMenu";
import { useState } from "react";

const ContainerIconMenuApp = styled.div`
  display: flex;

  .iconMenu {
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ContainerMenu = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const IconeMenuApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <ContainerIconMenuApp>
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className="iconMenu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </ContainerIconMenuApp>
      <ContainerMenu>
        {menuOpen && <SideMenu click={setMenuOpen} open={menuOpen} />}
      </ContainerMenu>
    </>
  );
};

export default IconeMenuApp;
