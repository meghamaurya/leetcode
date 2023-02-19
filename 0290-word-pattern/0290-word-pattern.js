/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(" ");
    
    if(s.length != pattern.length) return false;
    
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) != pattern.indexOf(pattern[i])){
            return false;
         } 
    }
    return true;
};