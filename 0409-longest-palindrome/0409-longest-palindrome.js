/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
     const seen = new Set();
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(!seen.has(s[i])){
            seen.add(s[i]);
        }else{
            seen.delete(s[i]);
            count+=2;
        }
    }
    return count + (seen.size > 0 ? 1 : 0);
};