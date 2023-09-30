import readlineSync from 'readline-sync';
import { getRandomInt, chechAnswer } from '../generalFunctions';

let answer;
let e;
let f;
let commonDivivder;

function getTwoNumber() {
  e = getRandomInt(1, 99);
  f = getRandomInt(1, 99);
  return `${e} ${f}`;
}

function getCommonDivider() {
  for (let i = 100; i > 0; i -= 1) {
    if (e % i === 0 && f % i === 0) {
      commonDivivder = i;
      return commonDivivder;
    }
  }
  return commonDivivder;
}

export default function brainGcd() {
  console.log(`Question: ${getTwoNumber()}`);
  getCommonDivider();
  answer = readlineSync.question('Your answer: ');
  chechAnswer(commonDivivder, answer);
}
