import { startGame } from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function findPrime(n) {
  if (n <= 1) {
    return 'no';
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

const runTheGame = () => {
  const int = generateRandomInt();
  const question = `${int}`;
  const answer = findPrime(int);

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
