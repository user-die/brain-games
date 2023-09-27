import readlineSync, { question } from "readline-sync";

let userName;
let rightAnswer = true;
let counterRightAnswerCalc = 0;

// Общие Функции

export function greeting() {
  console.log(`Welcome to the Brain Games!
May I have your name?`);
  userName = readlineSync.question("Your answer: ");
  console.log(`Hello, ${userName}`);
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function chechAnswer(foundedValue, userAnswer) {
  if (foundedValue == userAnswer) {
    rightAnswer = true;
    counterRightAnswerCalc += 1;
    console.log("Correct!");
  } else {
    rightAnswer = false;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${foundedValue}'.
Let's try again, ${userName}!`);
  }
}

export function makeCycle(question, func) {
  greeting();
  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    if (rightAnswer === true) {
      func();
    }
  }

  if (counterRightAnswerCalc === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
