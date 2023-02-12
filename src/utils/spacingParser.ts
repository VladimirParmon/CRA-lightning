import { SpacingInput } from '../models/typings';

//What it does: [20, 15] => '20px 15px' (margin, padding, etc.);
export default function spacingParser(input: SpacingInput) {
  if (!Array.isArray(input)) {
    return `${input}px`;
  } else {
    return [...input]
      .reduce((prev, next) => {
        return prev + ` ${next}px`;
      }, '')
      .trim();
  }
}
