import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
