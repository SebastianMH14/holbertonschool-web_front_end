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

function executed100times () {
  for (let i = 0; i <= 100; i++) {
    countPrimeNumbers();
  }
}

const tm1 = performance.now();
setTimeout(function () {
  executed100times();
}, 0);
const tm2 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t2 - t1} milliseconds.`);
