import { FlexContainer } from './styledComponents';
import Input from '@salesforce/design-system-react/components/input';
import InputIcon from '@salesforce/design-system-react/components/icon/input-icon';
import Button from '@salesforce/design-system-react/components/button';
import Avatar from '../Avatar';
import styled from 'styled-components';
import { flexCenter } from '../../constants/styling';
import avatar from '../../assets/avatar.png';

const StyledButton = styled(Button)`
  ${flexCenter};
  gap: 5px;
  padding: 0;
`;

export function HeaderBottom() {
  return (
    <FlexContainer gap={5}>
      <StyledButton
        assistiveText={{ icon: 'Icon More large' }}
        iconCategory='utility'
        iconName='add'
        iconSize='large'
        iconVariant='more'
        variant='icon'
        style={{ width: '45px' }}
      />
      <Input
        iconLeft={<InputIcon name='search' category='utility' />}
        placeholder='Search in Salesforce'
      />
      <Avatar size={33} margin={[0, 0, 0, 5]} src={avatar} />
    </FlexContainer>
  );
}
