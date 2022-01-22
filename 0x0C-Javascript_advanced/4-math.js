function divideBy (firstNumber) {
  return function div (secondNumber) {
    return secondNumber / firstNumber;
  };
}

function addBy (firstNumber) {
  return function sum (secondNumber) {
    return firstNumber + secondNumber;
  };
}

const addBy100 = (function () {
  return addBy(100);
})();

const addBy1000 = (function () {
  return addBy(1000);
})();

const divideBy10 = (function () {
  return divideBy(10);
})();

const divideBy100 = (function () {
  return divideBy(100);
})();
