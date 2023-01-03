/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length == 1) {
        return s;
    }
    var string, left = index = 0;
    var sArray = s.split("");
    var length = sArray.length;
    var right = length-1;
    var PalindromeArray = [];
    var length2, temp;
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
            var k = right, l = left;
            while (sArray[l] == sArray[k] && l < k) {
                l++;
                k--;
            }
            // for(var i = left;i <=right ; i++){
            //     if(sArray[l] == sArray[k] && i < k){
            //         l++;k--;
            //     }
            // }
            console.log(l, k, left, right)
            if (l == k || (l == k + 1 && sArray[l] == sArray[k])) {
                // console.log(1, left, right)
                for (var j = left; j <= right; j++) {
                    string += sArray[j];
                }
                PalindromeArray[index++] = string;
            }


        }
        right--;
    }
    length2 = 0;
    temp = '';
    for (let i = 0; i < PalindromeArray.length; i++) {
        const element = PalindromeArray[i];
        var length3 = element.length;
        if (length3 > length2) {
            length2 = length3;
            temp = element
        }

    }
    if (length2 == 0 && sArray.length != 0) {
        return sArray[0];
    }
    return temp;
};
longestPalindrome("aacabdkacaa");