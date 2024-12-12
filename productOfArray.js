//The productOfArray function takes in
//an array of numbers and returns the 
//product of them all

function productOfArray(array){
    if(array.length > 0){
        return array.shift() * productOfArray(array)
    }else{
        return 1
    }
}

console.log(productOfArray([1,2,3,4]))