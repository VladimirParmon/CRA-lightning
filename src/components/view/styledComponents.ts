import styled from 'styled-components';

export const ViewSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3px;
  width: 100%;
`;

export const SectionHeadingContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardPadding = styled.div`
  padding: 0 10px 10px 10px;
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const CardExpandableBody = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${(p) => `height: ${p.isOpen ? 'auto' : '0'};`}
`;

export const CardBodyDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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

export const ExpandableSectionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

export const ExpandableSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpandableSectionBody = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  background-color: #f3f1f2;
  ${(p) => `max-height: ${p.isOpen ? 'auto' : '0'};`}
`;
