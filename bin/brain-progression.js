#!/usr/bin/env node
import readlineSync from 'readline-sync';

import {
  getRandomNumber, getProgressionBar,
} from '../src/utils.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const brainProgression = () => {
  let i = 1;
  while (i <= 3) {
    const randomNumber1 = getRandomNumber(1, 10);
    const randomNumber2 = getRandomNumber(1, 10);
    const randomNumber3 = getRandomNumber(1, 10);
    const myProgression = getProgressionBar(randomNumber1, randomNumber2);
    const secretProgression = myProgression.split(' ');
    const rightAnswer = secretProgression[randomNumber3];
    secretProgression.splice(randomNumber3, 1, '..');
    const secretProgressionFin = secretProgression.join(' ');

    console.log(`Question: ${secretProgressionFin}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      i += 1;
      console.log('Correct!');
    } else if (userAnswer !== rightAnswer) {
      i -= 1;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (i >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainProgression();
