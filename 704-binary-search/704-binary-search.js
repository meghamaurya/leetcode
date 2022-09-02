/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for (let low = 0, high = nums.length - 1; low <= high;) {
    const middle = Math.floor((low + high) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
};