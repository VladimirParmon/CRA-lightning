import styled from 'styled-components';
import ContactsFound from '../../components/found/ContactsFound';
import CompanyNotFound from '../../components/notFound/CompanyNotFound';
import PersonNotFound from '../../components/notFound/PersonNotFound';
import { flexCenter } from '../../constants/styling';

const Container = styled.div`
  ${flexCenter};
  padding: 20px 10px;
  flex-direction: column;
  width: 100%;
`;

export function View({ salesforceData }: any) {
  return (
    <Container>
      <ContactsFound />
    </Container>
  );
}
