/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let low = 0;
    let high = nums.length - 1;
    let mid;
    
    while(high >= low){
        mid = Math.floor((low + high) / 2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
};