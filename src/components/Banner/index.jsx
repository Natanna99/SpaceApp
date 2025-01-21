import styled from "styled-components";

const ContainerBanner = styled.div`
  position: relative;
  width: 100%;
`;

const ImgBanner = styled.img`
  width: 100%;
  height: 9.375rem;
  border-radius: 1.25rem;

  @media screen and (min-width: 768px) {
    height: 17.5rem;
  }
`;

const TextBanner = styled.h3`
  position: absolute;
  color: #fff;
  top: 1.188rem;
  left: 1.25rem;
  width: 35%;
  font-weight: 400;
  font-family: "GandhiRegular";

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.875rem;
    width: 45%;
    top: 2.5rem;
    line-height: 3rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    top: 1.875rem;
    width: 37%;
  }
`;

const Banner = () => {
  return (
    <ContainerBanner>
      <ImgBanner src="image/atmosfera.webp" alt="Banner" />
      <TextBanner>A galeria mais completa de fotos do espaço!</TextBanner>
    </ContainerBanner>
  );
};

export default Banner;
