import { Heading } from '../styledComponents';
import Icon from '@salesforce/design-system-react/components/icon';

interface Props {
  iconName: string;
  text: string;
}

export function SectionHeading({ iconName, text }: Props) {
  return (
    <Heading>
      <Icon assistiveText={{ label: iconName }} category='standard' name={iconName} size='small' />
      <span style={{ fontSize: '1.1rem' }}>
        <b>{text}</b>
      </span>
    </Heading>
  );
}
