import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Input = {
  seeds: number[];
  seedMaps: Map<number, number>[];
};

const preprocess = (text: string): Input => {
  const firstSplit = text.split("\n\n");
  let input: Input = {
    seeds: firstSplit[0]
      .split(":")[1]
      .split(" ")
      .slice(1)
      .map((w) => Number(w)),
    seedMaps: [],
  };
  const rest = firstSplit.slice(1).map((row) => {
    const mappings = row.trim().split("\n").slice(1);
    const separateMaps = mappings.map((m) =>
      m.split(" ").map((m) => Number(m)),
    );
    let seedMap: Map<number, number> = new Map();
    separateMaps.forEach((m) => {
      console.log(m);
      for (let i = 0; i < m[2]; i++) {
        seedMap.set(m[1] + i, m[0] + i);
      }
    });
    return seedMap;
  });
  input.seedMaps = rest;
  return input;
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
