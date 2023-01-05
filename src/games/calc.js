import startGame from '../index.js';
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
  const int1 = generateRandomInt();
  const int2 = generateRandomInt();
  const sign = generateRandomSign();

  const question = `${int1} ${sign} ${int2}`;
  const answer = calculate(int1, int2, sign);

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
