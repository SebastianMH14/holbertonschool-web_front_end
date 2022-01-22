function countPrimeNumbers () {
  let countPrime = 0;
  for (let i = 2; i <= 100; i++) {
    let prime = false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = true;
        break;
      }
    }
    if (prime === false) {
      countPrime++;
    }
  }
  return countPrime;
}

const time1 = performance.now();
countPrimeNumbers();
const time2 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${time2 - time1} milliseconds.`);
