export const partOne = (lines: string[]) => {
  const instructions = lines.map(parseToInstruction);
  return calculateArea(instructions);
};

function calculateArea(instructions: Instruction[]): number {
  let x = 0;
  let y = 0;
  let area = 0;
  let perimeter = 0;

  for (const instruction of instructions) {
    const x0 = x;
    const y0 = y;
    switch (instruction.direction) {
      case "R":
        x += instruction.distance;
        break;
      case "D":
        y += instruction.distance;
        break;
      case "L":
        x -= instruction.distance;
        break;
      case "U":
        y -= instruction.distance;
        break;
    }
    area += x0 * y - x * y0;
    perimeter += instruction.distance;
  }

  return Math.abs(area / 2) + perimeter / 2 + 1;
}

type Instruction = {
  direction: string;
  distance: number;
  color: string;
};

function parseToInstruction(line: string): Instruction {
  const [direction, distance, color] = line.split(" ");
  return {
    direction: direction,
    distance: Number(distance),
    color: parseColor(color),
  };
}

function parseColor(rawColor: string): string {
  return rawColor.replace("(", "").replace(")", "").replace("#", "");
}
