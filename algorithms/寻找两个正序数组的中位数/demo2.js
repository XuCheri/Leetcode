/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var nums = nums1.concat(nums2);
    nums.sort(function (a, b) { return a - b });
    console.log((nums[(Math.ceil((nums.length + 1) / 2) - 1)] + nums[(Math.floor((nums.length + 1) / 2) - 1)]) / 2 )
    return (nums[(Math.ceil((nums.length + 1) / 2) - 1)] + nums[(Math.floor((nums.length + 1) / 2) - 1)]) / 2
};
findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 2], [3, 4]);