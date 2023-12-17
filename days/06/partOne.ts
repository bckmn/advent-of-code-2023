export const partOne = (input: number[][]) => {
  let wins = 1;
  input[0].forEach((time, index) => {
    let localWins = 0;
    for (let i = 1; i < time; i++) {
      const a = (time - i) * i;
      localWins += a > input[1][index] ? 1 : 0;
    }
    wins *= localWins;
  });
  return wins;
};
