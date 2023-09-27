import readlineSync from 'readline-sync';
import { getRandomInt, chechAnswer } from '../generalFunctions.js';

let index;
const operators = '+-*';
let a;
let b;
let d;
let resultCalc;
let answer;

function getRandomOperator(arr) {
  index = getRandomInt(0, 3);
  return arr[index];
}

function randomCalc() {
  a = getRandomInt(1, 99);
  b = getRandomOperator(operators);
  d = getRandomInt(1, 99);
  return `${a} ${b} ${d}`;
}

function calculation() {
  switch (index) {
    case 0:
      resultCalc = a + d;
      return resultCalc;
    case 1:
      resultCalc = a - d;
      return resultCalc;
    case 2:
      resultCalc = a * d;
      return resultCalc;
    default:
      return null;
  }
}

export function brainCalc() {
  console.log(`Question: ${randomCalc()}`);
  answer = readlineSync.question('Your answer: ');
  calculation(index);
  chechAnswer(resultCalc, answer);
}