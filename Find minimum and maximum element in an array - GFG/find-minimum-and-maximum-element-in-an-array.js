//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.getMinMax(arr, n);
        console.log(res[0] +" " + res[1]);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution{
    getMinMax(arr,n){
        //code here
       let min=arr[0];
       let max = arr[0];
       
       for(let i =1; i < arr.length; i++){
           if(arr[i] < min){
               min = arr[i];
           }
       }
       
       for(let j = 1; j < arr.length; j++){
           if(arr[j] > max){
               max = arr[j];
           }
       }
       return [min, max];
    }
}
