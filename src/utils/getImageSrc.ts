import { MODE } from '../constants/general';

//Just in case a dynamic import would be required
export default function getImageSrc(nameWithExt: string) {
  return MODE === 'development'
    ? require(`../assets/${nameWithExt}`)
    : chrome.runtime.getURL(`assets/images/${nameWithExt}`);
}
