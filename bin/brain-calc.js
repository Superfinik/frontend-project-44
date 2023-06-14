#!/usr/bin/env node
import readlineSync from 'readline-sync';
import stringMath from 'string-math';

import {
  getRandomNumber,
} from '../src/index.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const brainCalc = () => {
  let i = 1;
  while (i <= 3) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randomNumber3 = getRandomNumber(1, 3);
    const operators = ['+', '+', '-', '*'];
    console.log(`Question: ${randomNumber1} ${operators[randomNumber3]} ${randomNumber2}`);

    const rightAnswer = stringMath(`${randomNumber1} ${operators[randomNumber3]} ${randomNumber2}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === Number(rightAnswer)) {
      i += 1;
      console.log('Correct!');
    } else if (Number(userAnswer) !== Number(rightAnswer)) {
      i -= 1;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (i >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainCalc();
