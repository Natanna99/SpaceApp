import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Card from "../Card";

const Container = styled.div`
  @media screen and (min-width: 768px) {
    width: calc(100% + 13.75rem);
    position: relative;
    right: 13.75rem;
  }

  @media screen and (min-width: 1024px) {
    right: 0;
    width: 100%;
  }
`;

const ContainerSection = styled.div`
  display: flex;
  gap: 1.875rem;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContainerGallery = styled.div`
  flex-grow: 1;
`;

const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Gallery = ({ list = [], tagSelect, setTagSelect, favorite }) => {
  return (
    <Container>
      <Tags tagSelect={tagSelect} setTagSelect={setTagSelect} />
      <ContainerSection>
        <ContainerGallery>
          <Title>Navegue pela galeria</Title>
          <SectionCards>
            {list?.map((photo) => (
              <Card
                key={photo?.id}
                img={photo?.path}
                title={photo?.titulo}
                functionFavorite={() => favorite(photo?.id)}
                favorite={photo?.favorite}
              />
            ))}
          </SectionCards>
        </ContainerGallery>
        <Popular />
      </ContainerSection>
    </Container>
  );
};

export default Gallery;
