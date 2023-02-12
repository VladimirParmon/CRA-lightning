import Spinner from '@salesforce/design-system-react/components/spinner';
import styled from 'styled-components';
import { flexCenter } from '../constants/styling';

interface Props {
  size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
  variant: 'base' | 'brand' | 'inverse';
  label?: string;
}

const Container = styled.div`
  position: relative;
  ${flexCenter};
  width: 100%;
  min-height: 100px;
`;

export default function SpinnerComponent({ size, variant, label }: Props) {
  return (
    <Container>
      <Spinner size={size} variant={variant} assistiveText={{ label: label || 'Loading...' }} />
    </Container>
  );
}
