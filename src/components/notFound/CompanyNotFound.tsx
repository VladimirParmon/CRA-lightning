import Icon from '@salesforce/design-system-react/components/icon';
import { Card, ChoiceContainer, IconContainer, MessageContainer } from './styledComponents';

export default function CompanyNotFound() {
  return (
    <Card className='slds-card'>
      <IconContainer>
        <Icon assistiveText={{ label: 'info' }} category='utility' name='info' size='small' />
      </IconContainer>
      <MessageContainer>
        <span>
          Create <b>This company</b> as a new Account?
        </span>
        <ChoiceContainer>
          <Icon
            assistiveText={{ label: 'account' }}
            category='standard'
            name='account'
            size='small'
          />
          <span>New Account</span>
        </ChoiceContainer>
      </MessageContainer>
    </Card>
  );
}
