import readlineSync from 'readline-sync';
import sessionStorage from 'sessionstorage-for-nodejs';

const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  sessionStorage.setItem('userName', userName);
  console.log(`Hello, ${userName}!`);
};

export { greetUser };
