import { HeaderBottom } from './HeaderBottom';
import { HeaderTop } from './HeaderTop';
import { FlexContainer } from './styledComponents';

interface Props {
  showHeaderBottom: boolean;
}

export function Header({ showHeaderBottom }: Props) {
  return (
    <FlexContainer
      padding={[15, 10]}
      gap={10}
      direction='column'
      style={{ borderBottom: '1px solid lightgrey' }}>
      <HeaderTop />
      {showHeaderBottom && <HeaderBottom />}
    </FlexContainer>
  );
}
