import Icon from '@salesforce/design-system-react/components/icon';
import { ProfileDictionary } from '../common/iconDictionary';
import { CardBodyDetailsContainer, IconString } from '../styledComponents';

export function ContactBodyDetails({ data }: any) {
  return (
    <CardBodyDetailsContainer>
      <IconString>
        <Icon
          category={ProfileDictionary.Company.group}
          name={ProfileDictionary.Company.name}
          size='x-small'
        />
        <span>{data.Company}</span>
      </IconString>

      <IconString>
        <Icon
          category={ProfileDictionary.Email.group}
          name={ProfileDictionary.Email.name}
          size='x-small'
        />
        <span>{data.Email}</span>
      </IconString>

      <IconString>
        <Icon
          category={ProfileDictionary.Phone.group}
          name={ProfileDictionary.Phone.name}
          size='x-small'
        />
        <span>{data.Phone}</span>
      </IconString>
    </CardBodyDetailsContainer>
  );
}
