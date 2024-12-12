//The all function accepts an array 
//and a callback and returns true if 
//every value in the array returns true 
//when passed as parameter to the 
//callback function

function all(array, callback){
	if(array.length === 0) return true;

	if(callback(array[0])){ //pass array element 0 to the function and check condition. Proceed if true.
		array.shift(); //remove first element from array.
		return all(array, callback); //repeat loop until exit condition (false) occurs.
	} else {
		return false; //return false and break loop.
	}
}

console.log(all([1,2,9], function(num){ //receive array[0] and check condition.
	return num < 7;  //return true/false verdict to above.
}));