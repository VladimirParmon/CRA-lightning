import { HeaderBottom } from './HeaderBottom';
import { HeaderTop } from './HeaderTop';
import { FlexContainer } from './styledComponents';

interface Props {
  isLoading: boolean;
  isLogged: boolean;
}

export function Header({ isLoading, isLogged }: Props) {
  return (
    <FlexContainer
      padding={[15, 10]}
      gap={10}
      style={{ flexDirection: 'column', borderBottom: '1px solid lightgrey' }}>
      <HeaderTop />
      {!isLoading && isLogged && <HeaderBottom />}
    </FlexContainer>
  );
}
