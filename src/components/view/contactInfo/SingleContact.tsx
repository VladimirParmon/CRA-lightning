import CardHeader from '../common/CardHeader';
import { ExpandableSection } from '../common/ExpandableSection';
import { Card, CardExpandableBody, CardPadding, NameSpan } from '../styledComponents';
import { ContactBodyDetails } from './ContactBodyDetails';

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
      <CardHeader index={index} data={data} isOpen={isOpen} manageSections={manageSections} />
      <CardExpandableBody isOpen={isOpen}>
        <CardPadding>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '5px' }}>
            <NameSpan>{data.Name}</NameSpan>
            <span>{data.Position}</span>
          </div>
          <ContactBodyDetails data={otherData} />
        </CardPadding>
        <hr style={{ margin: 0 }} />
        <ExpandableSection iconGroup='standard' iconName='task' text='Task' />
        <ExpandableSection iconGroup='standard' iconName='event' text='Events' />
      </CardExpandableBody>
    </Card>
  );
}
