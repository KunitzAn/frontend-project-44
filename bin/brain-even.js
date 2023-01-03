#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import {checkAnswer, generateRandomInt} from './modules.js';

const calculateCorrectAnswer = (n) => {
  if(n % 2 === 0) {
      return 'yes';
  } else {
    return 'no';
  }
}

const startGameEven = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
      const int = generateRandomInt();

      const userAnswer = readlineSync.question(`Question: ${int} \nYour answer: `);
      const correctAnswer = calculateCorrectAnswer(int);

      const checkedAnswer = checkAnswer(userAnswer, correctAnswer, userName);
      if(checkedAnswer === false) return;

      i++;
  }

  console.log(`Congratulations, ${userName}!`);
};

startGameEven()



















