#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import {checkAnswer, generateRandomInt, describeTask} from './modules.js';

const calculateCorrectAnswer = (n) => {
    if(n <= 1) {
        return 'no';
    }
    for(let i = 2; i < n; i ++) {
        if (n % i == 0) {
            return 'no';
        }
    }
    return 'yes';
}

const startGamePrime = () => {
    const userName = greetUser();
    describeTask('prime');
  
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

startGamePrime();