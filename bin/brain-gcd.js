#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const generateRandomInt = () => {
  const randomInt = Math.floor(Math.random() * 100);
  return randomInt;
};

const calculate = (x, y) => {
  if (y > x) return calculate(y, x);
  if (!y) return x;
  return calculate(y, x % y);
};

const startGameGcd = () => {
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  while (i < 3) {
    const int1 = generateRandomInt();
    const int2 = generateRandomInt();

    const userAnswer = readlineSync.question(`Question: ${int1} ${int2} \nYour answer: `);
    const correctAnswer = calculate(int1, int2);

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

startGameGcd();
