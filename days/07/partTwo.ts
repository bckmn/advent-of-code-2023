import { splitOnce } from "../../utils/string";

const cards = [
  { face: "A", value: 14 },
  { face: "K", value: 13 },
  { face: "Q", value: 12 },
  { face: "T", value: 11 },
  { face: "9", value: 10 },
  { face: "8", value: 9 },
  { face: "7", value: 8 },
  { face: "6", value: 7 },
  { face: "5", value: 6 },
  { face: "4", value: 5 },
  { face: "3", value: 4 },
  { face: "2", value: 3 },
  { face: "J", value: 2 },
];

export const partTwo = (input: string[]) => {
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
    handScore: scoreHand(countCards(splitText[0]), splitText[0]),
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

function scoreHand(hand: {}, h: string): number {
  const jokers = hand["J"] ?? 0;
  hand["J"] = 0;
  const counts: number[] = Object.values(hand).sort((a, b) => b - a);
  counts[0] += jokers;
  if (counts[0] >= 5) return 7;
  else if (counts[0] === 4) return 6;
  else if (counts.includes(3) && counts.includes(2)) return 5;
  else if (counts[0] === 3) return 4;
  else if (counts.filter((c) => c === 2).length === 2) return 3;
  else if (counts[0] === 2) return 2;
  else return 1;
}

type Player = {
  handScore: number;
  firstCardValue: string;
  bid: number;
};
