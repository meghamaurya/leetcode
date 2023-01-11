/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    let map = {}
 for(let i=0;i<s.length;i++){
      if(!map[s[i]]){
          map[s[i]] = t[i]
      } else{
          if(map[s[i]] !== t[i]) return false
      }
 }
    return new Set([...t]).size === Object.keys(map).length
};