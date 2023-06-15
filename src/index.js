import readlineSync from 'readline-sync';

function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  return (`Hello, ${userName}!`);
}

function getRandomNumber(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

function getProgressionBar(a, d) {
  const result = [a];
  let firstDigit = a;
  let n = 1;
  while (n <= 10) {
    result.push(firstDigit += d);
    n += 1;
  }
  return result.join(' ');
}

export {
  greeting, getRandomNumber, NOD, getProgressionBar,
};
