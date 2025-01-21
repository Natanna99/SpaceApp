import styled from "styled-components";
import "./fontawesome";
import photos from "./fotos.json";

import GlobalStyles from "./components/styles";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const Background = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-height: 100vh;

  .containerMenu {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .containerMenu {
      display: flex;
    }
  }
`;

const AppContainer = styled.div`
  max-width: 100%;
  margin: 0 1.25rem;
`;

const ContainerMenu = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const ContainerGallery = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [tagSelect, setTagSelect] = useState();
  const [list, setList] = useState();
  const [search, setSearch] = useState();

  const filterList = () => {
    if (tagSelect) {
      return photos?.filter((photo) => photo?.tagId === tagSelect);
    }
    if (search) {
      return photos?.filter((photo) =>
        photo?.titulo?.toLowerCase().includes(search?.toLowerCase())
      );
    }
    return photos;
  };

  const favorite = (id) => {
    const newList = list?.map((photo) => {
      if (photo?.id === id) {
        return { ...photo, favorite: !photo.favorite };
      }
      return photo;
    });
    setList(newList);
  };

  useEffect(() => {
    setList(filterList());
  }, [tagSelect, search]);

  return (
    <Background>
      <GlobalStyles />
      <AppContainer>
        <Header setSearch={setSearch} value={search} />
        <ContainerMenu>
          <div className="containerMenu">
            <SideMenu />
          </div>
          <ContainerGallery>
            <Banner />
            <Gallery
              list={list}
              tagSelect={tagSelect}
              setTagSelect={setTagSelect}
              favorite={favorite}
            />
          </ContainerGallery>
        </ContainerMenu>
      </AppContainer>
      <Footer />
    </Background>
  );
}

export default App;
