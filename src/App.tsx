import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/header';
import { SetState } from './models/utils';
import getRoutes from './navigation/getRoutes';

const MainContainer = styled.div`
  width: 320px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
`;

interface Props {
  vanityName: string;
}

export const HeaderBottomContext = React.createContext<SetState<boolean> | undefined>(undefined);

export default function App({ vanityName }: Props) {
  const [isLogged, setIsLogged] = useState(false);
  const [showHeaderBottom, setShowHeaderBottom] = useState(isLogged);

  return (
    <HeaderBottomContext.Provider value={setShowHeaderBottom}>
      <MainContainer>
        <Header showHeaderBottom={showHeaderBottom} />
        {getRoutes(vanityName, isLogged, setIsLogged)}
      </MainContainer>
    </HeaderBottomContext.Provider>
  );
}
