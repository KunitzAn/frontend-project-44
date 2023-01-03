#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const generateRandomInt = () => {
  const randomInt = Math.floor(Math.random() * 100);
  return randomInt;
};
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

    const userAnswer = readlineSync.question(`Question: ${int1} ${sign} ${int2} \nYour answer: `);
    const correctAnswer = calculate(int1, int2, sign);

    if (userAnswer == correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'. \nLet\`s try again, ${userName}!`);
      return;
    }

    i++;
  }

  console.log(`Congratulations, ${userName}!`);
};

startGameCalc();
