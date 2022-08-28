/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let convertStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reverseStr = convertStr.split('').reverse().join('');
    if(convertStr.length !== reverseStr.length) return false;
    for(let i = 0; i < convertStr.length; i++) {
        if(convertStr[i] !== reverseStr[i]){
            return false;
        }
    } return true;
};