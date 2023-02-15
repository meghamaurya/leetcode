/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((ele) => ele * ele).sort((a,b) => a - b);
};