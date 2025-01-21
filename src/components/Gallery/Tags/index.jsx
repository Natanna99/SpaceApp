import styled from "styled-components";
import tags from "./tags.json";

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const TextTags = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const ContainerTags = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 33%;
    flex-wrap: nowrap;
  }
`;

const StyleTag = styled.div`
  background: rgba(77, 89, 141, 0.4);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.active ? "#7b78e5" : "transparent")};

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

const Tags = ({ tagSelect, setTagSelect }) => {
  /**
   * @description função que seta o id da tag selecionada
   * @param {object} tag
   */
  const clickTag = (tag) => {
    setTagSelect(tag?.id);
  };

  return (
    <Container>
      <TextTags>Busque por tags:</TextTags>
      <ContainerTags>
        {tags?.map((tag) => (
          <StyleTag
            key={tag?.id}
            onClick={() => clickTag(tag)}
            active={tagSelect === tag?.id}
          >
            {tag?.titulo}
          </StyleTag>
        ))}
      </ContainerTags>
    </Container>
  );
};

export default Tags;
