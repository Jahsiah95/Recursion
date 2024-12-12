//The fib/fibRec functions take a number
//and returns an array containing that
//many steps in the Fibonacci sequence.


//Regular Solution
function fib(num){
    let seq = [0,1];
    for(let i = 1; i < num-1; i++){
        seq.push(seq[i]+seq[i-1])
    }
    return seq;
}

console.log(fib(12));


//Recursive Solution

function fibRec(seq, num){
    if(num < 3){
        return seq;
    }else{
        let i = seq.length - 1;
        let j = seq.length - 2;
        let sum = seq[i] + seq[j];
        seq.push(sum);
        return fibRec(seq, num-1)
    }
}

console.log(fibRec([0,1], 12));