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

var defangIPaddr = function (address) {
  return address.replace(/(\.)/g, "[.]");
};
var findWordsContaining = function (words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if(words[i][j] === x) {
        result.push(i)
        break
      }
    }
    // if (words[i].includes(x)) {
    //   result.push(i);
    // }
  }
  return result;
};
console.log(findWordsContaining(["leet", "code"], "e"));
