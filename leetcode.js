var filter = function (arr, fn) {
  let filteredArr = [];
  arr.map((e, i) => {
    if (fn(e, i)) {
      filteredArr.push(e);
    }
  });
  return filteredArr;
};

// console.log(
//   filter([-2, -1, 0, 1, 2], function plusOne(n) {
//     return n + 1;
//   })
// );

// const getConcatenation = (nums) => {
//   return nums.concat(nums)
// };
var getConcatenation = function (nums) {
  let ans = [];
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
};
// console.log(getConcatenation([1, 3, 1]));

// const buildArray = (nums) => {
//   let ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     ans[i] = nums[nums[i]];
//   }
//   console.log(ans);
// };

// buildArray([5, 0, 1, 2, 3, 4]);

// const numIdenticalPairs = (nums) => {
//   let pairs = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] == nums[j] && i < j) {
//         pairs += 1;
//       }
//     }
//   }
//   return pairs;
// };
//  numIdenticalPairs([1, 2, 3, 1, 1, 3]);

// async function sleep(millis) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(millis)
//     }, [millis]);
//   })
// }

var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};

var chunk = function (arr, size) {
  let start = 0;
  let end = size;
  let chunk = [];
  for (let i = 0; i < arr.length / size; i++) {
    chunk.push(arr.slice(start, end));
    start = start + size;
    end = end + size;
  }
  return chunk;
};
// var interpret = function (command) {
//   return command.replace(/\(\)|\(al\)/g, (str) => {
//    return str === '()' ? 'o' : 'al';
//  });
// };

// var defangIPaddr = function (address) {
//   return address.replace(/(\.)/g, "[.]");
// };
// var findWordsContaining = function (words, x) {
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++) {
//       if(words[i][j] === x) {
//         result.push(i)
//         break
//       }
//     }
//   }
//   return result;
// };

// 1431
const ckeckGreterthan = (arr, nums) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (nums >= arr[i]) {
      result = true;
    } else {
      result = false;
      return result;
    }
  }
  return result;
};
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    const element = candies[i] + extraCandies;

    if (ckeckGreterthan(candies, element)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
var differenceOfSums = function (n, m) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      num1 += i;
    } else {
      num2 += i;
    }
  }
  return num1 - num2;
};
var createCounter = function (n) {
  console.log(n);
  return function () {
    return n++;
  };
};
var map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};
function plusone(n) {
  return n + 1;
}

// console.log(map([1,2,3],plusone));
var reduce = function (nums, fn, init) {
  let val = init;
  if (nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
    }
  } else {
    return val;
  }

  return val;
};
// console.log(
//   reduce(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr;
//     },
//     0
//   )
// );
var compose = function (functions) {
  return function (x) {
    if (functions.length) {
      for (let i = functions.length - 1; i >= 0; i--) {
        x = functions[i](x);
      }
      return x;
    } else {
      return x;
    }
  };
};
const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
// console.log(fn(4));

Array.prototype.last = function () {
  if (this.length > 0) {
    return this[this.length - 1];
  } else {
    return -1;
  }
};
const arr = [1, 2, 3];
// console.log(arr.last());

var leftRightDifference = function (nums) {
  const leftSum = [0];
  const rightSum = [0];
  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum.push(nums[i] + leftSum[i]);
  }
  const newArr = nums.reverse();
  for (let j = 0; j < newArr.length - 1; j++) {
    rightSum.push(newArr[j] + rightSum[j]);
  }
  let reverRight = rightSum.reverse()
  console.log(leftSum , reverRight);

  for (let i = 0; i < nums.length; i++) {
    result.push(Math.abs(leftSum[i] - reverRight[i]));
  }
  return result;
};
console.log(leftRightDifference([10,4,8,3]));
