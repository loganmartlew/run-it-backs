import styled from 'styled-components';
import { DBProvider } from './context/DBContext';
import Ribs from './components/Ribs';

const Container = styled.main`
  padding: 0 clamp(0.3rem, 15%, 15rem);
  padding-top: 2rem;
  width: 100%;
  min-height: 100vh;
  background-color: #02060d;
`;

const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 5px;
`;

const App = () => {
  return (
    <DBProvider>
      <Container>
        <Title>Run It Backs</Title>

        <Ribs />
      </Container>
    </DBProvider>
  );
};

export default App;
