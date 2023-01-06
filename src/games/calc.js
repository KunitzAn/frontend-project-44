import { startGame } from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'What is the result of the expression?';

const generateRandomSign = () => {
  const signs = ['-', '+', '*'];
  const signIndex = Math.floor(Math.random() * signs.length);
  const choosenSign = signs[signIndex];
  return choosenSign;
};
const calculate = (int1, int2, sign) => {
  switch (sign) {
    case '*':
      return int1 * int2;
    case '+':
      return int1 + int2;
    case '-':
      return int1 - int2;
    default:
      return ('error');
  }
};

const runTheGame = () => {
  const randomInt1 = generateRandomInt();
  const randomInt2 = generateRandomInt();
  const sign = generateRandomSign();

  const question = `${randomInt1} ${sign} ${randomInt2}`;
  const answer = calculate(randomInt1, randomInt2, sign);

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
