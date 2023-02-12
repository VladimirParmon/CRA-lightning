import Checkbox from '@salesforce/design-system-react/components/checkbox';
import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../constants/styling';
import salesforce from '../../assets/salesforce.svg';
import Button from '@salesforce/design-system-react/components/button';

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const SalesforceLogo = styled.img`
  width: 100px;
`;

export default function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);

  function handleLogin() {
    //TODO: handle login to salesforce
  }

  return (
    <Container>
      <SalesforceLogo src={salesforce} alt='Salesforce logo' />
      <Checkbox
        assistiveText={{
          label: 'Terms of agreement',
        }}
        labels={{
          label: 'I agree with the terms and conditions',
        }}
        onChange={(e) => setIsChecked(e.target.value)}
      />
      <Button label='Login' disabled={!isChecked} onClick={handleLogin} />
    </Container>
  );
}
