import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Heading = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const Card = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CardBody = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  ${(p) => `height: ${p.isOpen ? 'auto' : '0'};`}
`;

export const Spacer = styled.span`
  flex-grow: 1;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    height: 35px;
    min-width: 35px;
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

export const NameSpan = styled.span`
  font-weight: 700;
  font-size: 1rem;
`;

export const Span = styled.span`
  font-size: 0.7rem;
`;

export const IconString = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
