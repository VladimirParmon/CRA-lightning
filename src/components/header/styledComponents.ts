import styled from 'styled-components';
import { SpacingInput } from '../../models/typings';
import spacingParser from '../../utils/spacingParser';

export const FlexContainer = styled.div<{
  padding?: SpacingInput;
  gap?: number;
  direction?: 'column' | 'row';
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  ${(p) => p.padding && `padding: ${spacingParser(p.padding)};`}
  ${(p) => p.gap && `gap: ${p.gap}px;`}
  ${(p) => p.direction && `flex-direction: ${p.direction};`}
`;

export const Logo = styled.img`
  width: 140px;
`;

export const Spacer = styled.span`
  flex-grow: 1;
`;
