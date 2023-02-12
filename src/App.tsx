import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/header';
import Spinner from './components/Spinner';

const MainContainer = styled.div`
  width: 300px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  return (
    <MainContainer>
      <MainContainer>
        <Header isLoading={isLoading} isLogged={isLogged} />
        {isLoading && <Spinner size='medium' variant='brand' />}
      </MainContainer>
    </MainContainer>
  );
}
