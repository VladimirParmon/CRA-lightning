import styled from 'styled-components';
import CompanyNotFound from '../../components/notFound/CompanyNotFound';
import PersonNotFound from '../../components/notFound/PersonNotFound';
import { flexCenter } from '../../constants/styling';

const Container = styled.div`
  ${flexCenter};
  padding: 20px 10px;
  flex-direction: column;
`;

export function View({ salesforceData }: any) {
  return (
    <Container>
      <PersonNotFound />
      <CompanyNotFound />
    </Container>
  );
}
