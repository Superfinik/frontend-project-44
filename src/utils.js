function getRandomNumber(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
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
  getRandomNumber, getProgressionBar,
};
