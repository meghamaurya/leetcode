/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    
    let sum = n;
    
    while(sum !== 1){
        let newSum = 0;
        sum.toString().split("").forEach(val => newSum += val * val);
        
        if(set.has(newSum)) return false;
        set.add(newSum);
        sum = newSum;
    }
    return true;
};