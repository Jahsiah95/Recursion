//The function mergeSort takes in 
//an array and returns a sorted array, 
//using a recursive merge sort methodology.


//Regular
function mergeSort(arr){
    return arr.sort(function(a, b){return a - b});
}

console.log(mergeSort([3,2,1,13,8,5,0,1]))
console.log(mergeSort([79,100,105,110]))


//Recursive
function mergeSortRec(arr){
    if(arr.length == 0){
        return
    }else{
        let copy = [];
        let minVal = Math.min(...arr);
        let index = arr.indexOf(minVal);
        copy.push(minVal);
        arr.splice(index,1);
        return mergeSortRec(arr)
    }
}

console.log(mergeSortRec([3,2,1,13,8,5,0,1]))
// console.log(mergeSortRec([105,79,100,110]))