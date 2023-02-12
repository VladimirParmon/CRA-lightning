import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/header';

const MainContainer = styled.div`
  width: 300px;
  height: 800px;
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
      <Header isLoading={isLoading} isLogged={isLogged} />
    </MainContainer>
  );
}
