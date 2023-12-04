import { Game, Round } from ".";

export const partTwo = (games: Game[]) => {
  return games.reduce((acc, curr) => {
    return acc + getPower(curr.rounds);
  }, 0);
};

function getPower(rounds: Round[]) {
  const min = minAmountPerColor(rounds);
  return min.red * min.green * min.blue;
}

function minAmountPerColor(rounds: Round[]) {
  return rounds.reduce(
    (acc: Round, curr: Round) => {
      return {
        red: curr.red > acc.red ? curr.red : acc.red,
        green: curr.green > acc.green ? curr.green : acc.green,
        blue: curr.blue > acc.blue ? curr.blue : acc.blue,
      };
    },
    { red: 0, green: 0, blue: 0 },
  );
}
