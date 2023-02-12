import Icon from '@salesforce/design-system-react/components/icon';
import { Card, ChoiceContainer, IconContainer, MessageContainer } from './styledComponents';

export default function PersonNotFound() {
  return (
    <Card className='slds-card'>
      <IconContainer>
        <Icon assistiveText={{ label: 'info' }} category='utility' name='info' size='small' />
      </IconContainer>
      <MessageContainer>
        <span>No matches found on Salesforce for the current profile</span>
        <span>
          Create <b>John Doe</b> as a new Lead or Contact?
        </span>
        <ChoiceContainer>
          <Icon assistiveText={{ label: 'lead' }} category='standard' name='lead' size='small' />
          <span>New Lead</span>
        </ChoiceContainer>
        <ChoiceContainer>
          <Icon
            assistiveText={{ label: 'contact' }}
            category='standard'
            name='contact'
            size='small'
          />
          <span>New Contact</span>
        </ChoiceContainer>
      </MessageContainer>
    </Card>
  );
}
