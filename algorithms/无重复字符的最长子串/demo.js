/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var length = 0;
    var array1 = [];
    var array2 = [];
    var string=s[0];

    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        for (let j = i+1; j < s.length; j++) {
            const ele2 = s[j];
            if(s[i]!=s[j]){
                string+=s[j];
            }           
        }       
    }

    return length;
};
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');