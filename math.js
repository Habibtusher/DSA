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
console.log(differenceOfSum([1, 15, 6, 3]));
