import {
  ExpandableSectionBody,
  ExpandableSectionContainer,
  ExpandableSectionHeader,
  IconString,
  NameSpan,
  Spacer,
} from '../styledComponents';
import Icon from '@salesforce/design-system-react/components/icon';
import { useState } from 'react';
import Button from '@salesforce/design-system-react/components/button';
import { Groups } from './iconDictionary';

interface Props {
  iconGroup: Groups;
  iconName: string;
  text: string;
}

export function ExpandableSection({ iconGroup, iconName, text }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ExpandableSectionContainer>
      <ExpandableSectionHeader>
        <IconString>
          <Icon category={iconGroup} name={iconName} size='x-small' />
          <NameSpan>{text}</NameSpan>
        </IconString>
        <Spacer />
        <Button
          iconCategory='utility'
          iconName={isOpen ? 'chevronup' : 'switch'}
          iconSize='small'
          iconVariant='border'
          onClick={() => setIsOpen(!isOpen)}
          variant='icon'
        />
      </ExpandableSectionHeader>
      <ExpandableSectionBody isOpen={isOpen}>
        <div style={{ padding: '10px' }}>
          <p>Content</p>
        </div>
      </ExpandableSectionBody>
    </ExpandableSectionContainer>
  );
}
