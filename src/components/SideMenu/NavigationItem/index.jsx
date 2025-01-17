import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ItemList = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  a {
    font-size: 18px;
    color: ${(props) => (props.active ? "#7b78e5" : "#fff")};
    text-decoration: none;
    font-family: ${(props) => (props.active ? "GandhiBold" : "")};
  }

  .iconMenu,
  .iconMenuActive {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 10px;
    background: ${(props) => (props.active ? "#7b78e5" : "#04244f")};
    padding: 8px;
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
