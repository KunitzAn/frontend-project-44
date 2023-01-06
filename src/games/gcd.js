import { startGame } from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Find the greatest common divisor of given numbers.';

const calculate = (x, y) => {
  if (y > x) return calculate(y, x);
  if (!y) return x;
  return calculate(y, x % y);
};

const runTheGame = () => {
  const randonInt1 = generateRandomInt();
  const randomInt2 = generateRandomInt();

  const question = `${randonInt1} ${randomInt2}`;
  const answer = calculate(randonInt1, randomInt2);

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
