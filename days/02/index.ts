import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export type Round = {
  red: number;
  green: number;
  blue: number;
}

export type Game = {
  id: number;
  rounds: Round[];
};

const preprocess = (text: string): Game[] => {
  return text.split("\n").filter(l => l).map(line => {
    const game = line.split(":").map(l => l.trim());
    const id = game[0].split(" ").map(g => g.trim())[1];
    const rounds: Round[] = game[1].split(";").map(r => {
      const trimmedRound = r.trim()
      let set: Round = { red: 0, green: 0, blue: 0 };
      trimmedRound.split(",").map(s => s.trim()).forEach(s => {
        const trimmedSet = s.trim().split(" ");
        switch (trimmedSet[1]) {
          case "red":
            set.red = Number(trimmedSet[0]);
            break;
          case "green":
            set.green = Number(trimmedSet[0]);
            break;
          case "blue":
            set.blue = Number(trimmedSet[0]);
            break;
        }
      });
      return set;
    });
    return { id: Number(id), rounds: rounds };
  });
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
