#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sessionStorage from 'sessionstorage-for-nodejs';
import { greetUser } from '../src/cli.js';

sessionStorage.setItem('rightAnswers', 0);

const checkUserAnswer = () => {
  const randomInt = generateRandonInt();
  const userAnswer = readlineSync.question(`Question ${randomInt} `);
  console.log(isEven(randomInt, userAnswer));
};

const generateRandonInt = () => {
  const randomInt = Math.floor(Math.random() * 100);
  return randomInt;
};

const isEven = (randomInt, userAnswer) => {
  if (randomInt % 2 === 0) {
    if (userAnswer === 'yes') {
      const curRightAnswers = sessionStorage.getItem('rightAnswers');
      sessionStorage.setItem('rightAnswers', curRightAnswers + 1);
      return ('Correct!');
    } else{
        const curRightAnswers = sessionStorage.getItem('rightAnswers');
        sessionStorage.setItem('rightAnswers', curRightAnswers - 3);
        return (`'${userAnswer}' is wrong answer. Correct answer was 'yes'`);
    }
  } else {
    if (userAnswer === 'no') {
        const curRightAnswers = sessionStorage.getItem('rightAnswers');
        sessionStorage.setItem('rightAnswers', curRightAnswers + 1);
        return ('Correct!');
      } else{
        const curRightAnswers = sessionStorage.getItem('rightAnswers');
        sessionStorage.setItem('rightAnswers', curRightAnswers - 3);
        return (`'${userAnswer}' is wrong answer. Correct answer was 'no'`);
      }
  }
};

console.log('Welcome to the Brain Games!');
greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (sessionStorage.getItem('rightAnswers') >= 0 && sessionStorage.getItem('rightAnswers') < 3) {
  checkUserAnswer();
}

const name = sessionStorage.getItem('userName');
if (sessionStorage.getItem('rightAnswers') === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}