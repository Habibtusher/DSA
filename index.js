const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log(fibonacci(12));

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};
const refactorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * refactorial(n - 1)
};
console.log(refactorial(5));

const checkPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;

};
console.log(checkPrime(4)); 