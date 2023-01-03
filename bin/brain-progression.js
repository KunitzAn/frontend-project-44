#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { checkAnswer } from '../src/modules.js';

const generateRandomIntBetween = (min, max) => // The value is no lower than min, and is less than (but not equal to) max
  Math.floor(Math.random() * (max - min) + min);

const generateProgression = () => {
  const result = [];
  const gradient = generateRandomIntBetween(1, 11);
  let i = 1;
  const progressionLength = generateRandomIntBetween(5, 11);
  while (i <= progressionLength) {
    result.push(gradient * i);
    i++;
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

    let str = ``;
    for (let j = 0; j < progression.length; j++) {
      str = `${str} ${progression[j]}`;
    }

    const userAnswer = readlineSync.question(`Question: ${str} \nYour answer: `);

    const checkedAnswer = checkAnswer(userAnswer, correctAnswer, userName);
    if (checkedAnswer === false) return;

    i++;
  }

  console.log(`Congratulations, ${userName}!`);
};

startGameProgression();
