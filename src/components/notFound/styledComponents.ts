import styled from 'styled-components';
import { flexCenter } from '../../constants/styling';

export const Card = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const MessageContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: 10px;
`;

export const ChoiceContainer = styled.div`
  ${flexCenter};
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
`;
