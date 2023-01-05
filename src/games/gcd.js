import {startGame} from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Find the greatest common divisor of given numbers.';

const calculate = (x, y) => {
  if (y > x) return calculate(y, x);
  if (!y) return x;
  return calculate(y, x % y);
};

const runTheGame = () => {
  const int1 = generateRandomInt();
  const int2 = generateRandomInt();

  const question = `${int1} ${int2}`;
  const answer = calculate(int1, int2);

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
