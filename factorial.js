//The factorial function returns
//the result of that number multiplied 
//by the number before it, 
//and the number before that number, 
//and so on, until you reach 1. 
//The factorial of 1 is just 1.

function factorial(n){
    if(n == 1){
        return n;
    } else{
        return n * factorial(n-1)
    }
}

console.log(factorial(6));