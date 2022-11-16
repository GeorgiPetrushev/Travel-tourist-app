import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
      </h1>
      <Container>
        <div>
          <List />
        </div>
        <div>
          <Map />
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  div{
    width:50%;
  }
  
`;

export default App;
