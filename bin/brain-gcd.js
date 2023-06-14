#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  getRandomNumber, NOD,
} from '../src/index.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');

const brainGcd = () => {
  let i = 1;
  while (i <= 3) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    const rightAnswer = NOD(randomNumber1, randomNumber2);

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

brainGcd();
