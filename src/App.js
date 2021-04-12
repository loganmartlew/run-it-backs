import { useState } from 'react';
import Modal from 'react-modal';
import { DBProvider } from './context/DBContext';
import Ribs from './components/Ribs';
import ModalContent from './components/ModalContent';
import logo from './images/icon.png';
import styled from 'styled-components';

Modal.setAppElement('#root');

const Container = styled.main`
  margin: 0 auto;
  width: max-content;
`;

const TopBar = styled.header`
  display: flex;
  align-items: center;
  gap: 2em;
`;

const Title = styled.h1`
  margin: 1em 0;
  font-size: 3rem;
  letter-spacing: 5px;
  text-align: center;
`;

const Icon = styled.img`
  height: 4rem;
`;

const modalStyles = {
  content: {
    backgroundColor: '#02060d',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#050c16',
  },
};

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <DBProvider>
      <Container>
        <TopBar>
          <Title>Run It Backs</Title>
          <Icon src={logo} alt='logo' />
        </TopBar>

        <Ribs setOpen={setOpen} />
      </Container>
      <Modal isOpen={open} style={modalStyles}>
        <ModalContent setOpen={setOpen} />
      </Modal>
    </DBProvider>
  );
};

export default App;
