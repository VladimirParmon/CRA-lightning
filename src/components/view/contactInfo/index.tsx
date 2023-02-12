import { useState } from 'react';
import { mock } from '../mock';
import { ViewSection } from '../styledComponents';

import { SectionHeading } from '../common/SectionHeading';
import { SingleContact } from './SingleContact';

export default function ContactsFound() {
  const [currentlyOpened, setCurrentlyOpened] = useState(-1);

  function manageSections(index: number) {
    index === currentlyOpened ? setCurrentlyOpened(-1) : setCurrentlyOpened(index);
  }
  return (
    <ViewSection>
      <SectionHeading iconName='contact' text='Contacts' />
      {mock.map((item, index) => (
        <SingleContact
          index={index}
          key={item.Id}
          data={item}
          manageSections={manageSections}
          isOpen={index === currentlyOpened}
        />
      ))}
    </ViewSection>
  );
}
