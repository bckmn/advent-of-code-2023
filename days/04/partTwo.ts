import { Card } from ".";

export const partTwo = (cards: Card[]) => {
  const cardCount = cards.map(() => 1);
  cards.forEach((card, index) => {
    const wonCount = card.winningNumbers.filter((c) =>
      card.ticketNumbers.includes(c),
    ).length;

    for (let i = index + 1; i <= index + wonCount; i += 1) {
      cardCount[i] += cardCount[index];
    }
  });

  return cardCount.reduce((acc, curr) => acc + curr, 0);
};
