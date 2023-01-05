import {startGame} from '../index.js';

const task = 'What number is missing in the progression?';

const generateRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateProgression = () => {
  const result = [];
  const gradient = generateRandomIntBetween(1, 11);
  let i = 1;
  const progressionLength = generateRandomIntBetween(5, 11);
  while (i <= progressionLength) {
    result.push(gradient * i);
    i += 1;
  }
  return result;
};

const runTheGame = () => {
  const progression = generateProgression();
  const missedIntInd = generateRandomIntBetween(1, progression.length);
  const answer = progression[missedIntInd - 1];
  progression[missedIntInd - 1] = '..';
  let str = `${progression[0]}`;
  for (let k = 1; k < progression.length; k += 1) {
    str = `${str} ${progression[k]}`;
  }
  const question = `${str}`;

  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
