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
// countDigits(121)
var majorityElement = function (nums) {
  let element = nums[0]
  let elementCount = 1
  for (let i = 1; i < nums.length; i++) {
    if (element === nums[i]) {
      elementCount++;
    }
    else {
      elementCount--
    }
    if (elementCount < 0) {
      element = nums[i];
      elementCount++;
    }
  }
  return element
};

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subarray = arr.slice(i, j + 1);
      if (subarray.length % 2 !== 0) {
        sum += subarray.reduce((acc, curr) => acc + curr, 0);
      }
    }
  }
  return sum;
};
// sumOddLengthSubarrays([1, 4, 2, 5, 3])


var missingNumber = function (nums) {
  let sum = 0;
  let sumArr = nums.reduce((a, i) => a + i, 0);
  for (let i = 0; i <= nums.length; i++) {
    sum += i

  }
  return sum - sumArr
};
// var missingNumber = function (nums) {
//   const sorted = nums.sort((a, b) => a - b);
//   console.log(sorted.length)
//   for (let i = 0; i <= sorted.length; i++) {
//     if (sorted[i] !== i) {
//       return i
//     }
//     else if(i === sorted.length) {

//      return i
//     }
//   }
// };
// console.log(missingNumber([0, 1]))
// var minimumSum = function(num) {
//   const newNum = num.toString().split('')
//     for (let i = 0; i < newNum.length; i++) {
//       for (let j = 0; j < newNum.length; j++) {
//         if(i !== j) {

//         }

//       }

//     }
// };
// console.log(minimumSum(2932))
// var isSameAfterReversals = function (num) {
//   const numTOstring = num.toString().split('').reverse();
//   const reversed1 = Math.abs(numTOstring.join(''));
//   const reversed2 = reversed1.toString().split('').reverse().join('');
//   if (Math.abs(reversed2) === num) {
//     return true
//   }
//   return false

// };
// console.log((isSameAfterReversals(526)))
var pivotInteger = function (n) {
  let y = 0;
  for (let i = 1; i <= n; i++) {
    let secondSum = 0
    y += i
    for (let j = i; j <= n; j++) {
      secondSum += j
    }
    if (y === secondSum) {
      return i
    }
  }
  return -1
};
console.log(pivotInteger(8))
