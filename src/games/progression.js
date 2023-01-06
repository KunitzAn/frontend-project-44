import { startGame } from '../index.js';

const task = 'What number is missing in the progression?';

const generateRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateProgression = (firstNum, length, step, missedIntIdx) => {
  const resultArr = [];
  for (let i = 0; i < length; i += 1) {
    const curNum = firstNum + step * i;
    resultArr.push(curNum);
  }
  resultArr[missedIntIdx] = '..';
  const progressionString = resultArr.join(' ');
  return progressionString;
};

const runTheGame = () => {
  const length = generateRandomIntBetween(5, 11);
  const step = generateRandomIntBetween(1, 11);
  const firstNum = generateRandomIntBetween(1, 11);
  const missedIntIdx = generateRandomIntBetween(1, length);
  const question = generateProgression(firstNum, length, step, missedIntIdx);
  const answer = firstNum + step * missedIntIdx;
  return [question, answer];
};

export default () => {
  startGame(task, runTheGame);
};
