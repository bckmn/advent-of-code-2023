export const partOne = (steps: string[]) => {
  return steps.map(hashStep).reduce((acc, curr) => acc + curr, 0);
};

function hashStep(step: string): number {
  return step.split("").reduce((acc, curr) => {
    const ascii = acc + curr.charCodeAt(0);
    const next = ascii * 17;
    return next % 256;
  }, 0);
}
