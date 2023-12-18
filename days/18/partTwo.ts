export const partTwo = (lines: string[]) => {
  const instructions = lines.map(parseToInstruction);
  return calculateArea(instructions);
};

function calculateArea(instructions: Instruction[]): number {
  let x = 0;
  let y = 0;
  let area = 0;
  let perimeter = 0;

  for (const instruction of instructions) {
    const x1 = x;
    const y1 = y;
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
    area += x1 * y - x * y1;
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
  const [_direction, _distance, color] = line.split(" ");
  return {
    direction: parseDirection(color),
    distance: parseDistance(color),
    color: parseColor(color),
  };
}

function parseColor(rawColor: string): string {
  return rawColor.replace("(", "").replace(")", "").replace("#", "");
}

function parseDirection(rawColor: string): string {
  const lastChar = parseColor(rawColor).slice(-1);
  switch (lastChar) {
    case "0":
      return "R";
    case "1":
      return "D";
    case "2":
      return "L";
    case "3":
      return "U";
    default:
      return "";
  }
}

function parseDistance(rawColor: string): number {
  const firstFive = parseColor(rawColor).substring(0, 5);
  return parseInt(firstFive, 16);
}
