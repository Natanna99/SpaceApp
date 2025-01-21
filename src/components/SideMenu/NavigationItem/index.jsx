import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ItemList = styled.li`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  cursor: pointer;

  a {
    font-size: 1.125rem;
    color: ${(props) => (props.active ? "#7b78e5" : "#fff")};
    text-decoration: none;
    font-family: ${(props) => (props.active ? "GandhiBold" : "")};
  }

  .iconMenu,
  .iconMenuActive {
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;
    width: 1.563rem;
    height: 1.563rem;
    border-radius: 0.625rem;
    background: ${(props) => (props.active ? "#7b78e5" : "#04244f")};
    padding: 0.5rem;
  }
`;

const NavigationItem = ({ icon, nameItem, link, active = false }) => {
  return (
    <ItemList active={active}>
      <FontAwesomeIcon icon={icon} className="iconMenuActive" />
      <a href={link}>{nameItem}</a>
    </ItemList>
  );
};

export default NavigationItem;
