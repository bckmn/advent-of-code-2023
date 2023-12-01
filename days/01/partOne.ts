export const partOne = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const numbers = curr
      .split("")
      .map((l) => (!isNaN(Number(l)) ? l : ""))
      .join("");
    const firstNumber = numbers.at(0) ?? "";
    const secondNumber = numbers.at(-1) ?? "";
    return secondNumber === "" ? acc : acc + Number(firstNumber + secondNumber);
  }, 0);
};
