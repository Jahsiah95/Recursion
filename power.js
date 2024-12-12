//The power function takes in a base 
//and an exponent. If the exponent is 0, 
//return 1.

function power(x, n){
    if(n == 1){
        return x;
    } else{
        return x * power(x, n - 1);
    }
}

console.log(power(3,1))