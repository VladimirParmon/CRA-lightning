import styled from 'styled-components';
import { MODE } from '../constants/general';

const Span = styled.span`
  font-size: 0.6rem;
  color: lightgrey;
  margin: 0 10px;
`;

export default function VersionInfo() {
  const version = MODE === 'development' ? 'dev' : chrome.runtime.getManifest().version;
  return <Span>{version}</Span>;
}
