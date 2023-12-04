import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Card = {
  id: number;
  winningNumbers: number[];
  ticketNumbers: number[];
};

const preprocess = (text: string): Card[] => {
  return text
    .split("\n")
    .filter((l) => l)
    .map((line) => {
      const card = line.split(":").map((l) => l.trim());
      const id = card[0].split(" ").map((g) => g.trim())[1];
      const numbers = card[1].split("|").map((set) => set.trim());
      return {
        id: Number(id),
        winningNumbers: splitIntoNumbers(numbers[0]),
        ticketNumbers: splitIntoNumbers(numbers[1]),
      };
    });
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};

function splitIntoNumbers(set: string): number[] {
  return set
    .split(" ")
    .filter((s) => s !== "")
    .map((s) => Number(s.trim()));
}
