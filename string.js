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
var mostWordsFound = function (sentences) {
    let maxLength = 0;
    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].split(' ');
        if(sentence.length > maxLength){
            maxLength = sentence.length;
        }

    }
    return maxLength;
}
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
