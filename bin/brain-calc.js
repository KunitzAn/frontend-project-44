#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { checkAnswer, generateRandomInt } from '../src/modules.js';

const generateRandomSign = () => {
  const signs = ['-', '+', '*'];
  const signIndex = Math.floor(Math.random() * signs.length);
  const choosenSign = signs[signIndex];
  return choosenSign;
};
const calculate = (int1, int2, sign) => {
  switch (sign) {
    case '*':
      return int1 * int2;
    case '+':
      return int1 + int2;
    case '-':
      return int1 - int2;
    default:
      return ('error');
  }
};

const startGameCalc = () => {
  const userName = greetUser();
  console.log('What is the result of the expression?');

  let i = 0;
  while (i < 3) {
    const int1 = generateRandomInt();
    const int2 = generateRandomInt();
    const sign = generateRandomSign();

    const curAnswer = readlineSync.question(`Question: ${int1} ${sign} ${int2} \nYour answer: `);
    const userAnswer = +curAnswer;
    const correctAnswer = calculate(int1, int2, sign);

    const checkedAnswer = checkAnswer(userAnswer, correctAnswer, userName);
    if (checkedAnswer === false) return;

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

startGameCalc();
