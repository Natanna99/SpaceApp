import styled from "styled-components";
import Title from "../../Title";

import popular from "./popular.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerPopular = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 20.938rem;
  border-radius: 0.938rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`;

const ImgPopular = styled.img`
  border-radius: 0.938rem;
`;

const Popular = () => {
  return (
    <Container>
      <Title position="center">Populares</Title>
      <ContainerPopular>
        {popular?.map((item) => (
          <ContainerCard key={item?.id}>
            <ImgPopular src={item?.path} />
          </ContainerCard>
        ))}
      </ContainerPopular>
    </Container>
  );
};

export default Popular;
