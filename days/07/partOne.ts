import { splitOnce } from "../../utils/string";

const cards = [
  { face: "A", value: 14 },
  { face: "K", value: 13 },
  { face: "Q", value: 12 },
  { face: "J", value: 11 },
  { face: "T", value: 10 },
  { face: "9", value: 9 },
  { face: "8", value: 8 },
  { face: "7", value: 7 },
  { face: "6", value: 6 },
  { face: "5", value: 5 },
  { face: "4", value: 4 },
  { face: "3", value: 3 },
  { face: "2", value: 2 },
];

export const partOne = (input: string[]) => {
  const players = input.map(parsePlayer);
  players.sort((a, b) => {
    return a.handScore === b.handScore
      ? compareTiedHands(a.firstCardValue, b.firstCardValue)
        ? -1
        : 1
      : a.handScore < b.handScore
        ? -1
        : 1;
  });
  return calculateTotalScore(players);
};

function compareTiedHands(a: string, b: string): false | true {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    return parseCardValue(a[i]) < parseCardValue(b[i]) ? true : false;
  }
  return true;
}

function calculateTotalScore(players: Player[]): number {
  return players.reduce((acc, curr, idx) => {
    return acc + curr.bid * (idx + 1);
  }, 0);
}

function parsePlayer(line: string): Player {
  const splitText = splitOnce(line, " ");
  return {
    handScore: scoreHand(countCards(splitText[0])),
    firstCardValue: splitText[0],
    bid: Number(splitText[1]),
  };
}

function parseCardValue(cardFace: string): number {
  return cards.find((c) => c.face === cardFace)?.value ?? 0;
}

function countCards(hand: string) {
  const counts = [...hand].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return counts;
}

function scoreHand(hand: {}): number {
  const cardCounts: number[] = Object.values(hand);
  const largest = cardCounts.sort((a: number, b: number) => b - a)[0];

  if (largest >= 5) return 7;
  else if (largest === 4) return 6;
  else if (cardCounts.includes(3) && cardCounts.includes(2)) return 5;
  else if (largest === 3) return 4;
  else if (cardCounts.filter((c) => c === 2).length === 2) return 3;
  else if (largest === 2) return 2;
  else return 1;
}

type Player = {
  handScore: number;
  firstCardValue: string;
  bid: number;
};
