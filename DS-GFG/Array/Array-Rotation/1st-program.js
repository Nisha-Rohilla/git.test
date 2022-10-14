// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

/*Input: 
arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
Output: 3 4 5 6 7 1 2

Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
Output: 5 6 7 1 2 3 4*/


let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
let d = 2
function reverseArray(arr , start, end){
    while(start<end){
        let temp = arr[start]
        arr[start]=arr[end];
        arr[end] = temp;
        start++;
        end--
    }
}

function rotateArray(arr, d, n){
    if(d==0) return;
    d = d % n;
    reverseArray(arr, 0 , d-1);
    reverseArray(arr, d, n-1);
    reverseArray(arr, 0, n-1);
}

function resultArray(arr, size){
    for(let i = 0; i<size; i++){
        console.log(arr[i])
    }
}

rotateArray(arr, d, n)
resultArray(arr, n)
