/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) {
        return false;
    }
    if((s+s).indexOf(goal) >= 0) {
        return true;
    }
    return false;
};