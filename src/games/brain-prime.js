import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) return false;
  }
  return num !== 1;
};

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
