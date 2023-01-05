import readlineSync from 'readline-sync';

function greet() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function startGame(task, runTheGame) {
  // greeting
  const userName = greet();

  // task
  console.log(task);

  // game
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = runTheGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (!(userAnswer === String(answer))) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export { greet, startGame };
