import { startGame } from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const findEven = (number) => number % 2 === 0;

const runTheGame = () => {
  const randomint = generateRandomInt();
  const question = `${randomint}`;
  const answer = findEven(randomint) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
