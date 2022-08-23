/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var phrase1 = s.split("").sort();
    var phrase2 = t.split("").sort();
    if(phrase1.length != phrase2.length) return false;
    for(let i = 0; i <= phrase1.length; i++) {
        if(phrase1[i] != phrase2[i]) {
            return false;
        }
    }
    return true;
};