import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string): number[][] => {
  const splitLines = text.split("\n").map((line) =>
    line
      .split(":")
      .map((s) => s.trim())
      .slice(1)
      .map((s) => s.split(" ").filter((f) => f !== "")),
  );

  return splitLines.flat(1);
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
