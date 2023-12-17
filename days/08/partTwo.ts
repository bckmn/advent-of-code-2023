import { splitOnce } from "../../utils/string";

export const partTwo = (input: string[]) => {
  const steps = input[0].split("");
  const network = parseMap(input.slice(1));
  let currentNodes = Object.keys(network).filter((n) => n.endsWith("A"));
  let i = 0,
    countSteps = 0;
  while (!currentNodes.every((n) => n.endsWith("Z"))) {
    currentNodes = currentNodes.map((n) => takeStep(steps[i], network[n]));
    i = i === steps.length - 1 ? 0 : i + 1;
    countSteps++;
  }
  return countSteps;
};

function takeStep(step: string, node: Record<string, string>) {
  return node[step];
}

function parseMap(nodes: string[]): Record<string, Record<string, string>> {
  return nodes.reduce((acc: Record<string, Record<string, string>>, curr) => {
    const splitLine = splitOnce(curr, " = ");
    const leftRight = splitOnce(
      splitLine[1].replace("(", "").replace(")", ""),
      ", ",
    );
    acc[splitLine[0]] = { L: leftRight[0], R: leftRight[1] };
    return acc;
  }, {});
}
