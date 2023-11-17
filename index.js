const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
// console.log(fibonacci(2));

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};
// console.log(factorial(5));

const checkPrime = (n) => {
    if(n < 2){
        return false;
    }
    for (let i = 0; i < n; i++) {
        if(n % 2 === 0){
            return false;
        }
    }
    return true;

};
console.log(checkPrime(4)); 