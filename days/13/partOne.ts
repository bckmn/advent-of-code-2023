export const partOne = (patterns: string[][]) => {
  const horizontalScore = patterns.map(findReflection);
  const verticalScore = patterns.map(transpose).map(findReflection);
  return (
    horizontalScore.reduce((acc, curr) => acc + curr * 100, 0) +
    verticalScore.reduce((acc, curr) => acc + curr, 0)
  );
};

function findReflection(pattern: string[]) {
  for (let i = 1; i < pattern.length; i++) {
    if (checkReflection(pattern, i)) {
      return i;
    }
  }
  return 0;
}

function transpose(pattern: string[]): string[] {
  const charArrays = pattern.map((str) => str.split(""));

  const transposed = charArrays[0].reduce((acc, curr, index) => {
    acc.push(charArrays.map((row) => row[index]).join(""));
    return acc;
  }, []);

  return transposed;
}

function checkReflection(pattern: string[], row: number) {
  for (let i = row - 1, j = row; i >= 0 && j < pattern.length; i--, j++) {
    if (pattern[i] !== pattern[j]) return false;
  }
  return true;
}
