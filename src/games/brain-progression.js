
import readlineSync from 'readline-sync';
import { chechAnswer } from '../generalFunctions.js';

let randomNumber;
let answer1;
let randomProgressNumber;
let hideNumber;

function getRandomInt(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

function getRandomProgressNumber(min, max) {
  randomProgressNumber = Math.floor(Math.random() * (max - min) + min);
  return randomProgressNumber;
}

function getProgression() {
  let result = '';
  for (let i = 0; i < 10; i += 1) {
    result = `${result} ${randomNumber + i * randomProgressNumber}`;
  }
  return result;
}

function hideProgression(string) {
  const numbers = string.split(' ');
  const arr = [];
  const i = getRandomInt(1, 10);
  numbers.forEach((element) => arr.push(element));
  hideNumber = arr[i];
  arr[i] = '..';
  return arr.join(' ');
}

export function brainProg() {
  getRandomInt(1, 20);
  getRandomProgressNumber(1, 20);
  console.log(`Question:${hideProgression(getProgression())}`);
  answer1 = readlineSync.question('Your answer: ');
  chechAnswer(hideNumber, answer1);
}

