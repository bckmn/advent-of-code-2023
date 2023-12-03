import { Game, Round } from ".";

export const partTwo = (games: Game[]) => {
  return games.reduce((acc, curr) => {
    return acc + getPower(curr.rounds);
  }, 0);
}

function getPower(rounds: Round[]) {
  const min = minAmountPerColor(rounds);
  return min.red * min.green * min.blue;
}

function minAmountPerColor(rounds: Round[]) {
  let min: Round = { red: 0, green: 0, blue: 0 };
  rounds.forEach(r => {
    if (r.red > min.red) min.red = r.red;
    if (r.green > min.green) min.green = r.green;
    if (r.blue > min.blue) min.blue = r.blue;
  });
  console.log(min);
  return min;
}
