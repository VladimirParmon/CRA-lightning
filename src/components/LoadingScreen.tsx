import styled from 'styled-components';
import searchBG from '../assets/searchBG.svg';
import { flexCenter } from '../constants/styling';
import SpinnerComponent from './Spinner';

interface Props {
  vanityName: string;
}

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
  padding-bottom: 30px;
`;

const Span = styled.span`
  padding: 0 30px;
  text-align: center;
`;

export default function LoadingScreen({ vanityName }: Props) {
  return (
    <Container>
      <img src={searchBG} alt='Search skeleton background' />
      <SpinnerComponent size='large' variant='brand' />
      <Span>
        Please wait while we are searching for <b>{vanityName}</b> in Salesforce
      </Span>
    </Container>
  );
}
