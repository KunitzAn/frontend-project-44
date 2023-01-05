import readlineSync from 'readline-sync';

const startGame = (task, runTheGame) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

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
};

export default startGame;
