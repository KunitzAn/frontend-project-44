export function checkAnswer(userAnswer, correctAnswer, userName) {
    if (userAnswer == correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'. \nLet\`s try again, ${userName}!`);
        return false;
      }
}

export function generateRandomInt() {
    const randomInt = Math.floor(Math.random() * 100);
    return randomInt;
};

