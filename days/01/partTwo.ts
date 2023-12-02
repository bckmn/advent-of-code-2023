export const partTwo = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const numbers = findNumbers(curr);
    const firstNumber = numbers?.at(0) ?? "";
    const secondNumber = numbers?.at(-1) ?? "";
    return secondNumber === "" ? acc : acc + Number(firstNumber + secondNumber);
  }, 0);
};

function findWordOccurrences(inputString: string, word: string): { word: string, index: number }[] {
  const occurrences: { word: string, index: number }[] = [];
  let index = inputString.indexOf(word);

  while (index !== -1) {
    occurrences.push({ word, index });
    index = inputString.indexOf(word, index + 1);
  }

  return occurrences;
}

function findNumbers(line: string): string[] {
  const allMatches: { word: string, index: number }[] = [];
  numbers.forEach(n => {
    const matches = findWordOccurrences(line, n);
    matches.forEach(m => allMatches.push({ word: m.word, index: m.index })); 
  });

  allMatches.sort((a,b) => a.index < b.index ? -1 : 1);
  return allMatches.map(n => wordToNumber(n.word));
}

function wordToNumber(word: string) {
  switch (word) {
    case "one":
    case "1":
      return "1";
    case "two":
    case "2":
      return "2";
    case "three":
    case "3":
      return "3";
    case "four":
    case "4":
      return "4";
      case "five":
    case "5":
    return "5";
      case "six":
    case "6":
    return "6";
      case "seven":
    case "7":
    return "7";
      case "eight":
    case "8":
    return "8";
      case "nine":
    case "9":
    return "9";
    default:
      return "0";
  }
}

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
