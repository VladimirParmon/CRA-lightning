import { Card, CardBody, NameSpan } from '../styledComponents';
import { ContactBodyDetails } from './ContactBodyDetails';
import ContactsCardHeader from './ContactsCardHeader';

interface Props {
  index: number;
  data: any;
  isOpen: boolean;
  manageSections: (index: number) => void;
}

export function SingleContact({ index, data, isOpen, manageSections }: Props) {
  const { Name, Position, ...otherData } = data;
  return (
    <Card className='slds-card'>
      <ContactsCardHeader
        index={index}
        data={data}
        isOpen={isOpen}
        manageSections={manageSections}
      />
      <CardBody isOpen={isOpen}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <NameSpan>{data.Name}</NameSpan>
          <span>{data.Position}</span>
        </div>
        <ContactBodyDetails data={otherData} />
      </CardBody>
    </Card>
  );
}
