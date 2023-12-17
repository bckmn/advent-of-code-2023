export const partTwo = (steps: string[]) => {
  return fillBoxes(steps)
    .map((box, index) => calculateBoxFocusPower(box, index))
    .reduce((acc, curr) => acc + curr, 0);
};

function initializeBoxes(): Map<string, number>[] {
  return Array.from({ length: 256 }, () => new Map<string, number>());
}

type AddInstruction = {
  tag: "Add";
  letters: string;
  focalLength: number;
};

type RemoveInstruction = {
  tag: "Remove";
  letters: string;
};

type Instruction = AddInstruction | RemoveInstruction;

function fillBoxes(steps: string[]): Map<string, number>[] {
  return steps.reduce((acc, curr) => {
    const instruction = splitIntoInstruction(curr);
    switch (instruction.tag) {
      case "Add":
        acc[hashStep(instruction.letters)].set(
          instruction.letters,
          instruction.focalLength,
        );
        break;

      case "Remove":
        acc[hashStep(instruction.letters)].delete(instruction.letters);
        break;
    }
    return acc;
  }, initializeBoxes());
}

function calculateBoxFocusPower(
  box: Map<string, number>,
  boxIndex: number,
): number {
  return Array.from(box.values()).reduce(
    (acc, curr, index) => acc + (boxIndex + 1) * (index + 1) * curr,
    0,
  );
}

function splitIntoInstruction(step: string): Instruction {
  return step.includes("=")
    ? splitIntoAddInstruction(step)
    : splitIntoRemoveInstruction(step);
}

function splitIntoAddInstruction(step: string): AddInstruction {
  const split = step.split("=");
  return { tag: "Add", letters: split[0], focalLength: Number(split[1]) };
}

function splitIntoRemoveInstruction(step: string): RemoveInstruction {
  const split = step.split("-");
  return { tag: "Remove", letters: split[0] };
}

function hashStep(step: string): number {
  return step.split("").reduce((acc, curr) => {
    const ascii = acc + curr.charCodeAt(0);
    const next = ascii * 17;
    return next % 256;
  }, 0);
}
