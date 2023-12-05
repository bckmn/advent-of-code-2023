import { Input } from ".";

export const partOne = (input: Input) => {
  const distances = input.seeds.map((s) => {
    console.log(s);
    let distance = s;
    input.seedMaps.forEach((sm) => {
      distance = getDistance(sm, distance);
    });
    return distance;
  });
  return distances.reduce((acc, curr) => (acc > curr ? curr : acc));
};

function getDistance(seedMap: Map<number, number>, prev: number) {
  if (seedMap.has(prev)) {
    return seedMap.get(prev)!;
  } else {
    return prev;
  }
}
