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
    product = product *  parseInt(array[i]);
    sum += parseInt(array[i]);
  }
  console.log(product, sum);
  return product - sum;
};
console.log(subtractProductAndSum(234));
