/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result = [];
    
    for(let ele of nums) {
        ele = "" + ele;
        let i = 0;
        
        while(i < ele.length){
            result.push(+ele[i]);
            i++;
        }
    }
    return result;
};