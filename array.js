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
console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }]
  )
);
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
      if (i !== j && nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
