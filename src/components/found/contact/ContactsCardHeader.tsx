import Avatar from '../../Avatar';
import { Buttons, CardHeader, NameSpan, Overview, Spacer, Span } from '../styledComponents';
import Button from '@salesforce/design-system-react/components/button';

interface Props {
  index: number;
  data: any;
  isOpen: boolean;
  manageSections: (index: number) => void;
}

function HeaderOverview({ data }: any) {
  return (
    <Overview>
      <NameSpan>{data.Name}</NameSpan>
      <Span>{data.Position} at</Span>
      <Span>{data.Company}</Span>
    </Overview>
  );
}

export default function ContactsCardHeader({ index, data, isOpen, manageSections }: Props) {
  function viewInSalesforce() {}
  const chevron = isOpen ? 'chevronup' : 'switch';
  return (
    <CardHeader>
      <Avatar size={50} />
      {!isOpen && <HeaderOverview data={data} />}
      <Spacer />
      <Buttons>
        {isOpen && (
          <Button iconCategory='utility' iconName='save' iconPosition='right' label='Update' />
        )}
        <Button
          iconCategory='utility'
          iconName='salesforce1'
          iconSize='medium'
          onClick={viewInSalesforce}
          variant='neutral'
          style={{ padding: 0 }}
        />
        <Button
          iconCategory='utility'
          iconName={chevron}
          iconSize='small'
          iconVariant='border'
          onClick={() => manageSections(index)}
          variant='icon'
        />
      </Buttons>
    </CardHeader>
  );
}
