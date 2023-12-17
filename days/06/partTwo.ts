import { Input } from ".";
import * as one from "./partOne";

export const partTwo = (input: Input) => {
  let newSeeds: { start: number; end: number }[] = [];
  for (let i = 0; i < input.seeds.length; i += 2) {
    const firstSeed = input.seeds[i];
    const secondSeed = input.seeds[i + 1];
    newSeeds.push({ start: firstSeed, end: secondSeed });
  }
  console.log(newSeeds.length);
  const distances = newSeeds.map((s, index) => {
    let distance = s;
    input.seedMaps.forEach((sm) => {
      distance = getDistance(sm, distance);
    });
    return distance.start;
  });
  const last = distances.reduce((acc, curr) => (acc > curr ? curr : acc));
  input.seeds = [last];
  return one.partOne(input);
};

function getDistance(seedMap: number[], prev: { start: number; end: number }) {
  let lowest = 10000000000;
  for (let i = 0; i < seedMap.length; i++) {
    const s = seedMap[i];
    if (prev.start >= s[1]) {
      for (let j = prev.start; j < prev.start + prev.end; j++) {
        if (j < s[1] + s[2] && j >= s[1]) {
          lowest = lowest < s[0] + (j - s[1]) ? lowest : s[0] + (j - s[1]);
        }
      }
    }
  }
  return { start: lowest !== 10000000000 ? lowest : prev.start, end: 1 };
}
