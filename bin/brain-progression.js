#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { checkAnswer } from '../src/modules.js';

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

const startGameProgression = () => {
  const userName = greetUser();
  console.log('What number is missing in the progression?');

  let i = 0;
  while (i < 3) {
    const progression = generateProgression();
    const missedIntInd = generateRandomIntBetween(1, progression.length);
    const correctAnswer = progression[missedIntInd - 1];
    progression[missedIntInd - 1] = '..';

    let str = `${progression[0]}`;
    for (let k = 1; k < progression.length; k += 1) {
      str = `${str} ${progression[k]}`;
    }

    const curAnswer = readlineSync.question(`Question: ${str} \nYour answer: `);
    const userAnswer = +curAnswer;
    const checkedAnswer = checkAnswer(userAnswer, correctAnswer, userName);
    if (checkedAnswer === false) {
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

startGameProgression();
