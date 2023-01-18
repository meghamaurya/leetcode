/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        const value = target - nums[i];
        if(value === 0) return i;
        if(value < 0) return i;
    }
    return nums.length;
};