import { startGame } from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const runTheGame = () => {
  const randomNumber = generateRandomInt();
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
