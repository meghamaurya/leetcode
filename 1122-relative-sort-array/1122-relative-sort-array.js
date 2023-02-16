/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let newArr = [];
    
    for(let i = 0; i < arr2.length; i++){
        let element = arr2[i];
        let item = [...arr1].filter((ls) => ls === element);
        
        for(let j = 0; j < item.length; j++){
            newArr.push(element);
        }
        arr1 = arr1.filter((ls) => ls !== element);
    }
    return [...newArr, ...arr1.sort((a,b) => a -b)];
};