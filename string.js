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
        if (sentence.length > maxLength) {
            maxLength = sentence.length;
        }

    }
    return maxLength;
}
var maximumWealth = function (accounts) {
    // let result = 0
    // for (let i = 0; i < accounts.length; i++) {
    //     const element = accounts[i].reduce((acc, account) => acc + account)
    //     if (element > result) result = element

    // }
    // return result
    return Math.max(...accounts.map((e,) => e.reduce((sum, balance) => sum + balance, 0)))
};
// console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
var countMatches = function (items, ruleKey, ruleValue) {
    let matches = 0;
    for (let j = 0; j < items.length; j++) {
        if (ruleKey === 'type' && items[j][0] === ruleValue || ruleKey === 'color' && items[j][1] === ruleValue || ruleKey === 'name' && items[j][2] === ruleValue) {
            matches++;
        }
    }
    return matches
};


// console.log(countMatches([["qqqq", "qqqq", "qqqq"], ["qqqq", "qqqq", "qqqq"], ["qqqq", "qqqq", "qqqq"], ["qqqq", "qqqq", "qqqq"],
// ["qqqq", "qqqq", "qqqq"], ["qqqq", "qqqq", "qqqq"], ["qqqq", "qqqq", "qqqq"]], ruleKey = "name", ruleValue = "qqqq"));
var truncateSentence = function (s, k) {

    return s.split(' ').splice(0, k).join(" ")
    // return s.split(' ').slice(0, k).join(" ")
};
// console.log(truncateSentence("Hello how are you Contestant", 4));
var checkIfPangram = function (sentence) {
    const newiii = new Set(sentence)
    // for (i = 97; i <= 122; i++) {
    //     if (!sentence.includes(String.fromCharCode(i))) {
    //         return false
    //     }
    // }
    return newiii

};

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydogss"));
// console.log(String.fromCharCode(65));
var reverseWords = function (s) {
    let result = []
    const words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        const element = words[i].split('').reverse();
        result.push(element.join(''))

    }
    return result.join(" ")
};
// console.log(reverseWords("Let's take LeetCode contest"));

var isAcronym = function (words, s) {
    let result = ""
    if (words.length !== s.length) return false
    for (let i = 0; i < words.length; i++) {
        result.push(words[i][0].toLowerCase())

    }
    return result === s

};
// console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"), "hello world");
var restoreString = function (s, indices) {
    const result = []
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]

    }
    returnresult.join("")
};
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));