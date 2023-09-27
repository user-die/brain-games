import readlineSync from "readline-sync";
import { getRandomInt, chechAnswer, greeting } from "../generalFunctions.js";

let answer;
let currentNumber;

function checkA() {
  if (currentNumber === 1) {
    return "no";
  }
  if (currentNumber === 2) {
    return "yes";
  }
  for (let i = 2; i < currentNumber; i += 1) {
    if (currentNumber % i === 0) {
      return "no";
    }
  }
  return "yes";
}

export function brainPrime() {
  currentNumber = getRandomInt(1, 999);
  console.log(`Question: ${currentNumber}`);
  answer = readlineSync.question("Your answer: ");
  chechAnswer(checkA(), answer);
}
