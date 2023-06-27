import runGame from '../index.js';
import getRandomNumber from '../utils.js';

function getProgressionBar(a, d) {
  const result = [a];
  let firstDigit = a;
  let n = 1;
  while (n <= 10) {
    result.push(firstDigit += d);
    n += 1;
  }
  return result.join(' ');
}

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const randomNumber3 = getRandomNumber(1, 10);
  const myProgression = getProgressionBar(randomNumber1, randomNumber2);
  const secretProgression = myProgression.split(' ');
  const correctAnswer = secretProgression[randomNumber3];
  secretProgression.splice(randomNumber3, 1, '..');
  const secretProgressionFin = secretProgression.join(' ');

  const question = `${secretProgressionFin}`;

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
