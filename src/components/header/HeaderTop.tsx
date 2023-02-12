import logo from '../../assets/logo.svg';
import { FlexContainer, Logo, Spacer } from './styledComponents';
import Button from '@salesforce/design-system-react/components/button';
import VersionInfo from '../versionInfo';

export function HeaderTop() {
  return (
    <FlexContainer>
      <Logo src={logo} />
      <VersionInfo />
      <Spacer />
      <Button
        assistiveText={{ icon: 'Icon Bare Small' }}
        iconCategory='utility'
        iconName='close'
        iconSize='small'
        iconVariant='bare'
        onClick={() => {
          //TODO: close the app
        }}
        variant='icon'
      />
    </FlexContainer>
  );
}
