/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length == 1) {
        return 1;
    } else if (s == "") {
        return 0;
    }
    var array1 = [];//存储每个字母开头的无重复字符的最长子串长度
    var array2 = [];//存储每个字符开头的无重复字符的最长子串长度的子串
    var string;
    var adverb;//暂存第一个循环的i

    for (let i = 0; i < s.length; i++) {
        adverb = i;
        const ele = s[i];
        string = ele;
        for (let j = i + 1; j < s.length; j++) {
            const ele2 = s[j];
            var k = adverb + 1;
            if (s[adverb] == ele2) {//如果和第一个字符相同，就不用比了
                break;
            }
            while (s[k] != ele2 && k < j) {//前面已有的串和现在这个字符无重复的最大k
                k++;
            }
            if (k != j) {//如果k不是j说明有重复
                break;
            }
            string += ele2;
        }
        array2[i] = string;
    }
    for (let i = 0; i < array2.length; i++) {
        const element = array2[i];
        array1[i] = array2[i].length;
    }
    array1.sort(function (a, b) {return a-b});
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        console.log(array1[i]);
    }
    // for (let i = 0; i < array2.length; i++) {
    //     const element = array2[i];
    //     console.log(element);

    // }
    return array1[array1.length - 1];
};
// lengthOfLongestSubstring('abcabcbb');
// lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('nigzhtkqxr');