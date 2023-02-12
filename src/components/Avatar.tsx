import styled from 'styled-components';
import avatar from '../assets/avatar.png';
import { flexCenter } from '../constants/styling';
import { SpacingInput } from '../models/typings';
import spacingParser from '../utils/spacingParser';

interface Props {
  width: number;
  height: number;
  margin?: SpacingInput;
}

const Container = styled.div<Props>`
  ${flexCenter};
  position: relative;
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  ${(p) => p.margin && `margin: ${spacingParser(p.margin)};`}

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export default function Avatar({ width, height, margin }: Props) {
  return (
    <Container width={width} height={height} margin={margin}>
      <img src={avatar} alt='User avatar' />
    </Container>
  );
}
