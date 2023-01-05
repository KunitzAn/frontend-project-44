import readlineSync from 'readline-sync';
import greetUser from './cli.js';
import { checkAnswer, generateRandomInt } from './modules.js';

function findEven(n) {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
}
function findPrime(n) {
  if (n <= 1) {
    return 'no';
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export default function startGame(str) {
  const userName = greetUser();
  if (str === 'prime') {
    console.log(`Answer "yes" if given number is ${str}. Otherwise answer "no".`);
  } else {
    console.log(`Answer "yes" if the number is ${str}, otherwise answer "no".`);
  }

  let i = 0;
  while (i < 3) {
    const int = generateRandomInt();
    const userAnswer = readlineSync.question(`Question: ${int} \nYour answer: `);
    let correctAnswer = '';
    if (str === 'prime') {
      correctAnswer = findPrime(int);
    } else {
      correctAnswer = findEven(int);
    }

    const checkedAnswer = checkAnswer(userAnswer, correctAnswer, userName);
    if (checkedAnswer === false) return;

    i += 1;
  }

  console.log(`Congratulations, ${userName}!`);
}
