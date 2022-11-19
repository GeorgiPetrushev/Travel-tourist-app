import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
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
const Tittle = styled.div``

const Container = styled.div`
  display: flex;
  .list{
   width:30%;
   min-height:90vh;
   background-color:red;
  }
  .map{
   width:60%;
  }
  
`;

export default App;
