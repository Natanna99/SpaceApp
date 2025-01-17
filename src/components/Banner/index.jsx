import styled from "styled-components";

const ContainerBanner = styled.div`
  position: relative;
  width: 100%;

  /* @media screen and (min-width: 768px) {
    width: 100%;
  } */
`;

const ImgBanner = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    height: 280px;
  }
`;

const TextBanner = styled.h3`
  position: absolute;
  color: #fff;
  top: 19px;
  left: 20px;
  width: 35%;
  font-weight: 400;
  font-family: "GandhiRegular";

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 30px;
    width: 45%;
    top: 40px;
    line-height: 48px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    top: 30px;
    width: 30%;
  }
`;

const Banner = () => {
  return (
    <ContainerBanner>
      <ImgBanner src="public/image/galeria/foto-1.png" alt="Banner" />
      <TextBanner>A galeria mais completa de fotos do espaço!</TextBanner>
    </ContainerBanner>
  );
};

export default Banner;
