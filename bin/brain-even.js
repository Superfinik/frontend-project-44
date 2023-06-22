#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  getRandomNumber,
} from '../src/utils.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

const brainEven = () => {
  let i = 1;
  while (i <= 3) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);

    const isEven = () => {
      if (randomNumber % 2 === 0) {
        return true;
      }
      return false;
    };

    const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      i += 1;
      console.log('Correct!');
    } else if (userAnswer !== trueAnswer) {
      i -= 1;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (i >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainEven();
