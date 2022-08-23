/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newSet = new Set();
    for(const i of nums) {
        if(newSet.has(i)) {
            return true;
        } 
        newSet.add(i)
    }
    return false;
};