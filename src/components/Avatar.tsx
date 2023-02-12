import styled from 'styled-components';
import { flexCenter } from '../constants/styling';
import { SpacingInput } from '../models/typings';
import spacingParser from '../utils/spacingParser';
import defaultAvatar from '../assets/default.jpeg';

interface Props {
  size: number;
  margin?: SpacingInput;
  src?: string;
}

const Container = styled.div<Props>`
  ${flexCenter};
  position: relative;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  ${(p) => p.margin && `margin: ${spacingParser(p.margin)};`}

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export default function Avatar({ size, margin, src }: Props) {
  return (
    <Container size={size} margin={margin}>
      <img src={src || defaultAvatar} alt='User avatar' />
    </Container>
  );
}
