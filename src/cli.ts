#!use/bin/env n
import { translate } from "./main";
import { Command } from "commander";

const program = new Command();
program
  .name("translate-util")
  .usage("<Word>")
  .argument("<Word>")
  .action(function (word) {
    translate(word);
  });

program.parse(process.argv, "", "");
