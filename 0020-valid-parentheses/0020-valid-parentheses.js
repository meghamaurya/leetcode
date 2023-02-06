/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 === 1) return false;
    
    if(s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
    
    if(s[s.length - 1] === "(" || s[s.length - 1] === "{" || s[s.length - 1] === "[") return false;
    
    s = s.split("");
    var stack = [];
    for (var z of s) {
        if (z === "(" || z === "{" || z === "[") {
            stack.push(z);
        } else {
            var top = stack[stack.length - 1];
            if (z === ")" && top === "(" || z === "]" && top === "[" || z === "}" && top === "{")
                stack.pop();
            else
                return false;
        }
    }
    return stack.length === 0;
};