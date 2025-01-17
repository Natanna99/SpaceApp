import styled from "styled-components";
import GlobalStyles from "./components/styles";
import Header from "./components/Header";
import "./fontawesome";
import SideMenu from "./components/SideMenu";
import Banner from "./components/Banner";

const Background = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100vw;
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

function App() {
  return (
    <Background>
      <GlobalStyles />
      <Header />
      <div style={{ display: "flex" }}>
        <div className="containerMenu">
          <SideMenu />
        </div>
        <Banner />
      </div>
    </Background>
  );
}

export default App;
