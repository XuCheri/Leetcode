/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var string, left = index = 0;
    var sArray = s.split("");
    var length = sArray.length;
    var right = length;
    var PalindromeArray = [];
    var length2,temp;
    for (var i = 0; i < length; i++) {
        string = '';
        left = 0;
        while (sArray[left] != sArray[right] && left < right) {
            left++;
        }
        if (left == right) {
            left--;
        }
        if (sArray[left] == sArray[right]) {
            for (var j = left; j <= right; j++) {
                string += sArray[j];
            }
            PalindromeArray[index++] = string;
            
        }
        right--;
    }
    length2 = PalindromeArray[0].length;
    temp = PalindromeArray[0];
    for (let i = 0; i < PalindromeArray.length; i++) {
        const element = PalindromeArray[i];
        var length3 = element.length;
        if(length3 >length2) {
            length2 = length3;
            temp2 = element
        }
        
    }
    // console.log(length2,temp)
    return temp;
};
longestPalindrome("babad");
longestPalindrome("cbbd");