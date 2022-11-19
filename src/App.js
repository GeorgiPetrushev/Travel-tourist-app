import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Tittle>
        <Header />
      </Tittle>
      <Container>
        <div className="list">
          <List />
        </div>
        <div className="map">
          <Map />
        </div>
      </Container>
    </div>
  );
}
const Tittle = styled.div`
  height:10vh
  font-size:0.8rem;
`;

const Container = styled.div`
  display: flex;
  .list {
    width: 30%;
    min-height: 90vh;
    background-color: red;
  }
  .map {
    width: 60%;
  }
`;

export default App;
