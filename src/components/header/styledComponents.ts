import styled from 'styled-components';
import { SpacingInput } from '../../models/typings';
import spacingParser from '../../utils/spacingParser';

export const FlexContainer = styled.div<{ padding?: SpacingInput; gap?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${(p) => p.padding && `padding: ${spacingParser(p.padding)};`}
  ${(p) => p.gap && `gap: ${p.gap}px;`}
`;

export const Logo = styled.img`
  width: 140px;
`;

export const Spacer = styled.span`
  flex-grow: 1;
`;
