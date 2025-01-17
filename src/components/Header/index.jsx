import styled from "styled-components";
import InputHearder from "../InputHeader";
import IconeMenuApp from "../IconeMenuApp";

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  img {
    max-width: 112px;
  }

  .menuApp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    gap: 90px;

    img {
      max-width: 200px;
    }

    .menuApp {
      align-items: center;
      margin-bottom: 0;
      width: fit-content;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 120px;

    .menuApp {
      align-items: center;
      margin-bottom: 0;
      width: 100%;
    }
  }
`;

const Header = () => {
  return (
    <ContainerHeader>
      <div className="menuApp">
        <IconeMenuApp />
        <img src="public/image/logo.png" alt="Logo" />
      </div>

      <InputHearder />
    </ContainerHeader>
  );
};

export default Header;
