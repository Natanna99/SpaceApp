import styled from "styled-components";
import InputHearder from "../InputHeader";
import IconeMenuApp from "../IconeMenuApp";

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;

  img {
    max-width: 7rem;
  }

  .menuApp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0;
    gap: 5.625rem;

    img {
      max-width: 12.5rem;
    }

    .menuApp {
      align-items: center;
      margin-bottom: 0;
      width: fit-content;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 7.5rem;

    .menuApp {
      align-items: center;
      margin-bottom: 0;
      width: 100%;
    }
  }
`;

const Header = ({ setSearch, value }) => {
  return (
    <ContainerHeader>
      <div className="menuApp">
        <IconeMenuApp />
        <img src="/public/image/logo.png" alt="Logo" />
      </div>

      <InputHearder setSearch={setSearch} value={value} />
    </ContainerHeader>
  );
};

export default Header;
