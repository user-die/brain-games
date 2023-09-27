import readlineSync from 'readline-sync';
import { getRandomInt, chechAnswer } from '../generalFunctions.js';

let answer;
let rightAnswer;
let currentNumber;

function chechA () {
  rightAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
}

export function getEven() {
  currentNumber = getRandomInt(1, 999);
  console.log(`Question: ${currentNumber}`);
  chechA();
  answer = readlineSync.question('Your answer: ');
  chechAnswer(rightAnswer, answer);
}
