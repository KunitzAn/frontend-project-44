#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sessionStorage from 'sessionstorage-for-nodejs';
import greetUser from '../src/cli.js';

sessionStorage.setItem('rightAnswers', 0);

const checkUserAnswer = () => {
  const randomInt = generateRandonInt();
  const userAnswer = readlineSync.question(`Question ${randomInt} `);
  console.log(checkIsEven(randomInt, userAnswer));
};

const generateRandonInt = () => {
  const randomInt = Math.floor(Math.random() * 100);
  return randomInt;
};


const checkIsEven = (randomInt, userAnswer) => {
    if((randomInt % 2 === 0 && userAnswer === 'yes') || (!(randomInt % 2 === 0) && userAnswer === 'no')) {
      const curRightAnswers = sessionStorage.getItem('rightAnswers');
      sessionStorage.setItem('rightAnswers', curRightAnswers + 1);
      return ('Correct!');
    } else {
        const curRightAnswers = sessionStorage.getItem('rightAnswers');
        sessionStorage.setItem('rightAnswers', curRightAnswers - 3);
    }

    if (randomInt % 2 === 0 && userAnswer === 'no') {
        return (`'${userAnswer}' is wrong answer. Correct answer was 'yes'`);
    } 

    if(!(randomInt % 2 === 0) && userAnswer === 'yes') {
        return (`'${userAnswer}' is wrong answer. Correct answer was 'no'`);
    }
};

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (sessionStorage.getItem('rightAnswers') >= 0 && sessionStorage.getItem('rightAnswers') < 3) {
  checkUserAnswer();
}

if (sessionStorage.getItem('rightAnswers') === 3) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
