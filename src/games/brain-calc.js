import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculateExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return (operand1 + operand2).toString();
    case '-':
      return (operand1 - operand2).toString();
    case '*':
      return (operand1 * operand2).toString();
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const arr = ['+', '-', '*'];
  const randomElement = getRandomNumber(0, arr.length - 1);
  const operator = arr[randomElement];
  const operand1 = getRandomNumber(0, 20);
  const operand2 = getRandomNumber(0, 20);
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calculateExpression(operand1, operand2, operator));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
