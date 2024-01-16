var strStr = function (haystack, needle) {
//   for (var i = 0; i < haystack.length; i++) {
//     let substringResult = haystack.substring(i, i + needle.length);
//     console.log(substringResult);
//     if (substringResult === needle) {
//       return i;
//     }
//   }
//   return -1;
// return haystack.indexOf(needle);
return haystack.search(needle);
};

console.log(strStr("hello", "ll"));
