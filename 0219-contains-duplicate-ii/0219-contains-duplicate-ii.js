/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var uniqueValue = {};
    
    for(let i = 0; i < nums.length; i++){
        if(i - uniqueValue[nums[i]] <= k){
            return true;
        } else {
           uniqueValue[nums[i]] = [i];
        }
    }
    return false;
};