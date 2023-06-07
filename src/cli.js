import readlineSync from 'readline-sync';

function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  return (`Hello, ${userName}!`);
}

export default greeting;
