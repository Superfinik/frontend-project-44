#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\nAnswer "yes" if the number is prime, otherwise answer "no".`);

const brainPrime = () => {
  function getRandomNumber(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  let i = 1;
  while (i <= 3) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);

    const isPrime = (num) => {
      for (let n = 2; n < num; n += 1) {
        if (num % n === 0) return false;
      }
      return num !== 1;
    };

    const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';

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

brainPrime();
