import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ContainerModal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 0.938rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 80%;
    height: 90%;
  }
`;

const IconClose = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 2.625rem;
  right: 0.313rem;
  position: relative;
  padding: 0.625rem;
  color: #fff;
`;

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <ContainerModal isOpen={isOpen}>
      <ContainerInfo onClick={(e) => e.stopPropagation()}>
        <IconClose>
          <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={onClose} />
        </IconClose>
        {children}
      </ContainerInfo>
    </ContainerModal>
  );
};

export default Modal;
