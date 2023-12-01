import { Command } from "commander";
import { resolve } from "path";
import { padWithZero } from "./utils";

const program = new Command("aoc");

program
  .command("run")
  .description("Run day solution")
  .argument("<day:number>", "Day to run")
  .option("-p, --part <part:number>", "Part of the day solution to run", "1")
  .option(
    "-f, --file <file:string>",
    "Input file. If missing, the day input file is used instead",
    "input.txt",
  )
  .action(async (day, { part, file }) => {
    const path = resolve(import.meta.dir, `days/${padWithZero(day)}`);
    const { runSolution } = require(path);
    const text = await Bun.file(resolve(path, file)).text();
    console.log("solution:", runSolution(text, part === "2"));
  });

program.parse();
