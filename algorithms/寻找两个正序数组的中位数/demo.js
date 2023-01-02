/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var MedianNum;
    var nums = nums1.concat(nums2);
    nums.sort(function (a, b) { return a - b });
    if (nums.length == 1) {
        MedianNum = nums[0];
    }
    const index = nums[(Math.ceil((nums.length + 1) / 2)-1)]+nums[(Math.floor((nums.length + 1) / 2)-1)];
    
    MedianNum = index/2;

    return MedianNum;
};
findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 2], [3, 4]);