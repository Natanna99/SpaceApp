import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 15.625rem;
  border-radius: 0.938rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`;

const ImgCard = styled.img`
  flex: 1;
  width: 100%;
  height: 11.875rem;
  border-radius: 0.938rem 0.938rem 0 0;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    flex: 9;
  }
`;

const FooterCard = styled.div`
  flex: 1;
  position: relative;
  bottom: 0;
  background: #001634;
  border-radius: 0 0 0.938rem 0.938rem;
  display: flex;
  justify-content: space-between;
`;

const TextCard = styled.p`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  margin-left: 0.625rem;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-right: 0.625rem;
  color: #fff;
`;

const Card = ({ img, title, font, favorite, functionFavorite }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContainerCard>
        <ImgCard src={`public${img}`} />
        <FooterCard>
          <TextCard>{title}</TextCard>
          <ContainerIcon>
            <FontAwesomeIcon
              icon={favorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              onClick={functionFavorite}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-up-right-and-down-left-from-center"
              onClick={() => setOpen(!open)}
            />
          </ContainerIcon>
        </FooterCard>
      </ContainerCard>

      {open && (
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ImgCard src={`public${img}`} />
          <FooterCard>
            <TextCard>{title}</TextCard>
            <ContainerIcon>
              <FontAwesomeIcon
                icon={favorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                onClick={functionFavorite}
              />
            </ContainerIcon>
          </FooterCard>
        </Modal>
      )}
    </>
  );
};

export default Card;
