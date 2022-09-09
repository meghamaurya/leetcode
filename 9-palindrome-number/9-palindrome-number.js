/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
       if(x < 0) return false;

    let num = x, rev = 0;
    while(num > 0){
        rev = (rev * 10) + (num % 10);
        num = parseInt(num/10);
    }

    return x === rev;
};