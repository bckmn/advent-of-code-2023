export function splitOnce(text: string, separator: string) {
  const splitText = text.split(separator);
  return [splitText[0], splitText.slice(1).join(separator)];
}
