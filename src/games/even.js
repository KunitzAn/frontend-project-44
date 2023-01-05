import {startGame} from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

function findEven(n) {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const runTheGame = () => {
  const randomint = generateRandomInt();
  const question = `${randomint}`;
  const answer = findEven(randomint);

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
