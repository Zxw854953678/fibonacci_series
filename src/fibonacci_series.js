function fibonacci_series(n) {
  var fibonacciArray = [0];

  if (n > 0) {
    fibonacciArray.push(1);
    if (n >= 2) {
      addFibonaccis(n, fibonacciArray);
    }
  }
  else if (n < 0) {
    return undefined;
  }

  return fibonacciArray;
}

function addFibonaccis(n, fibonacciArray) {

  for (var i = 2; i <= n; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }
}

module.exports = fibonacci_series;
