var differenceOfSum = function (nums) {
  let sumOfElements = 0;
  let sumOfDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    sumOfElements += nums[i];
    const digits = nums[i].toString().split("");
    for (let j = 0; j < digits.length; j++) {
      sumOfDigits += parseInt(digits[j]);
    }
  }
  return sumOfElements - sumOfDigits;
};
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

var subtractProductAndSum = function (n) {
  let product = 1,
    sum = 0;
  const array = n.toString();
  for (let i = 0; i < array.length; i++) {
    product = product * parseInt(array[i]);
    sum += parseInt(array[i]);
  }
  console.log(product, sum);
  return product - sum;
};
// console.log(subtractProductAndSum(234));


const sortArray = (arr) => {
  // return arr.sort()
  return arr.toSorted()
}
// console.log(sortArray(["Jan", "Feb", "Mar", "Apr"]));

// const number = [1,2,3,4,5]
// console.log(number.slice(-1,2));

var minimumSum = function (num) {
  const numtostr = num.toString()
  for (var i = 1; i <= numtostr.length; i++) {
    console.log(numtostr.slice(0, i), numtostr.slice(i));
    // console.log(numtostr[i]);
  }
};
// console.log(minimumSum(2932));
let matches = 0;
var numberOfMatches = function (n) {
  let result = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      result = (result + (n / 2))
      n = n / 2
    }
    else {
      result = (result + ((n - 1) / 2))
      n = (((n - 1) / 2) + 1)
    }
  }
  return result
};
// console.log(numberOfMatches(14))
var reverse = function (x) {
  const result = parseInt(Math.abs(x).toString().split('').reverse().join(''))
  if (result < Math.pow(2, 31) - 1) {
    if (x < 0) {
      return -Math.abs(result)
    }
    return Math.abs(result)
  }
  else {
    return 0
  }
};
var numberOfSteps = function (num) {
  let result = 0
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2
      result += 1
    }
    else {
      num = num - 1
      result += 1
    }
  }
  return result
};
var countDigits = function (num) {
  let result = 0
  const numToString = num.toString()
  for (let i = 0; i < numToString.length; i++) {
    if (num % parseInt(numToString[i]) === 0) {
      result += 1
    }

  }
  return result
};
countDigits(121)