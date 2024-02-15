const join = function (arr1, arr2) {
  const ob = {};
  for (const i of arr1) {
    ob[i.id] = i;
  }
  for (const i of arr2) {
    ob[i.id] = ob[i.id] ? (ob[i.id] = { ...ob[i.id], ...i }) : (ob[i.id] = i);
  }
  return Object.values(ob);
};
// console.log(
//   join(
//     [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
//     [{ id: 1, b: { c: 84 }, v: [1, 3] }]
//   )
// );
var runningSum = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) result.push(nums[i]);
    else result.push(nums[i] + result[i - 1]);
  }
  return result;
};
const obj = {
  id: 1,
  value: "ewew",
};
const obj2 = {
  id: 2,
  name: "habib",
  value: "yyy",
};
// 1365. How Many Numbers Are Smaller Than the Current Number
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

var lengthOfLastWord = function (s) {
  var sArr = s.trim().split(" ");
  return sArr.pop().length;
};
var plusOne = function (digits) {
  let newStr = "";
  const result = [];
  for (let i = 0; i < digits.length; i++) {
    newStr += digits[i];
  }

  const newInt = BigInt(newStr) + BigInt(1);
  const toString = newInt.toString();

  for (let i = 0; i < toString.length; i++) {
    result.push(toString[i]);
  }
  return result;
};
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let result = [];
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] === target) {
      result.push(hours[i]);
    }

  }
  return result.length
};
console.log("new", numberOfEmployeesWhoMetTarget[0, 1, 2, 3, 4, 3], 3);
var maxProduct = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j) {
        const multi = (nums[i] - 1) * (nums[j] - 1);
        if (result < multi) {
          result = multi;
        }
      }
    }
  }
  return result;
};


var ejnxjkclkjc = '"ejnxjkclkjc"';
ejnxjkclkjc = ejnxjkclkjc.replace(/"/g, '');
console.log(ejnxjkclkjc);

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subarray = arr.slice(i, j + 1);
      if (subarray.length % 2 !== 0) {
        sum += subarray.reduce((acc, nee) => acc + nee, 0);
        console.log(sum, subarray)
      }

    }

  }
  return sum;
};
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))