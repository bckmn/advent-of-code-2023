export const partTwo = (input: string[]) => {
  const predictions = input.map(parseInput).map(predictNext);
  return predictions.reduce((acc, curr) => acc + curr, 0);
};

function parseInput(line: string): number[] {
  return line.split(" ").map((part) => Number(part));
}

function predictNext(sequence: number[]): number {
  if (sequence.every((s) => s === 0)) return 0;

  const differences: number[] = [];
  sequence.reduce((prev, curr) => {
    differences.push(curr - prev);
    return curr;
  });

  return sequence[0] - predictNext(differences);
}
