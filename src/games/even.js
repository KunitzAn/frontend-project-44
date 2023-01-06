import { startGame } from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const ifEven = (number) => number % 2 === 0;

const runTheGame = () => {
  const randomNumber = generateRandomInt();
  const question = `${randomNumber}`;
  const answer = ifEven(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
