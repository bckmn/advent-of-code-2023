import { Card } from ".";
import { count } from "../../utils/arrays";

export const partOne = (cards: Card[]) => {
  return cards.reduce((prev, curr) => {
    const c = count(curr.ticketNumbers, (item: number) => {
      return curr.winningNumbers.indexOf(item) !== -1;
    });
    return prev + calculatePoints(c);
  }, 0);
};

function calculatePoints(winningCount: number): number {
  if (winningCount === 0) return 0;
  else if (winningCount === 1) return 1;
  else {
    let count = 1;
    while (winningCount > 1) {
      count *= 2;
      winningCount--;
    }
    return count;
  }
}
