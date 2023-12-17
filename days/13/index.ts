import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string) =>
  text
    .split("\n\n")
    .filter((t) => t !== "")
    .map((t) => t.split("\n").filter((t) => t !== ""));

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
