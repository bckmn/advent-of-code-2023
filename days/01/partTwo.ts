export const partTwo = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const numbers = findNumbers(curr, []);
    const firstNumber = numbers?.at(0) ?? "";
    const secondNumber = numbers?.at(-1) ?? "";
    console.log("first", firstNumber);
    console.log("second", secondNumber);
    return secondNumber === "" ? acc : acc + Number(firstNumber + secondNumber);
  }, 0);
};

function findNumbers(line: string, values: string[]) {
  if (line.length === 0) return values;
  const { number, index } = findFirstNumber(line);
  return findNumbers(
    line.substring(index + number.length),
    number === "" ? values : values.concat(wordToNumber(number)),
  );
}

function findFirstNumber(line: string): { number: string; index: number } {
  const allNumbers = numbers.map((n) => {
    const maybeIndex = line.indexOf(n);
    return maybeIndex !== -1 ? { number: n, index: maybeIndex } : undefined;
  });

  if (allNumbers.filter((a) => a).length === 0)
    return { number: "", index: line.length };
  const numberWithSmallestIndex = allNumbers
    .filter((a) => a)
    .reduce((prev, current) => {
      return prev && current && prev.index < current.index ? prev : current;
    });
  return numberWithSmallestIndex ?? { number: "", index: line.length };
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
