/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {};
    
    for(let i = 0; i < nums.length; i++){
        if(freq[nums[i]] === undefined){
            freq[nums[i]] = 1;
        } else {
            freq[nums[i]] += 1;
        }
        if(freq[nums[i]] > nums.length / 2){
            return nums[i];
        }
    }
};