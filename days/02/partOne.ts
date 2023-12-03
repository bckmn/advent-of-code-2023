import { Game, Round } from ".";

export const partOne = (games: Game[]) => {
  const sum = games.reduce((acc, curr) => {
    return allRoundsPossible(curr.rounds, curr.id) === true ? acc + curr.id : acc;
  }, 0);
  return sum;
};

function allRoundsPossible(rounds: Round[], game: number) {
  return rounds.map(isPossibleRound).find(i => i === false) === undefined;
}

function isPossibleRound(round: Round) {
  const result =  round.red <= 12 && round.green <= 13 && round.blue <= 14;
  return result;
}
