import Button from '@salesforce/design-system-react/components/button';
import styled from 'styled-components';
import getImageSrc from './utils/getImageSrc';
import Input from '@salesforce/design-system-react/components/input';
import InputIcon from '@salesforce/design-system-react/components/icon/input-icon';
import logo from './assets/logo.svg';

const MainContainer = styled.div`
  width: 300px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function Header() {
  return (
    <FlexContainer style={{ flexDirection: 'column' }}>
      <HeaderTop />
      <HeaderBottom />
    </FlexContainer>
  );
}
const Logo = styled.img`
  width: 140px;
`;

const Spacer = styled.span`
  flex-grow: 1;
`;

function HeaderTop() {
  const logoSrc = getImageSrc('logo.svg');
  return (
    <FlexContainer>
      <Logo src={logo} />
      <Spacer />
      <Button
        assistiveText={{ icon: 'Icon Bare Small' }}
        iconCategory='utility'
        iconName='settings'
        iconSize='small'
        iconVariant='bare'
        onClick={() => {
          console.log('Icon Bare Clicked');
        }}
        variant='icon'
      />
    </FlexContainer>
  );
}

function HeaderBottom() {
  return (
    <FlexContainer>
      <Button
        assistiveText={{ icon: 'Icon More large' }}
        iconCategory='utility'
        iconName='settings'
        iconSize='large'
        iconVariant='more'
        variant='icon'
      />
      <Input
        iconLeft={<InputIcon name='search' category='utility' />}
        placeholder='Search in Salesforce'
      />
    </FlexContainer>
  );
}

export default function App() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}
