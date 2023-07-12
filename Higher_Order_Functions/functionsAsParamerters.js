// This one has to do with passing results of functions to other 
// functions
// predefiend function to return num+2
const addTwo = num => {
  return num + 2;
}
// predefined function that takes in a function and a value
const checkConsistentOutput = (func, val) => {
	// user defined sets checkA to val + 2
	const checkA = val + 2;
	// user defined sets checkB to the result of the function passed in 
	// and val as its param (going to call addTwo)
	const checkB = func(val);
	// checks if if the values are the same
	if(checkA===checkB){
		// if they are the same, it reutruns the value of the function
		// call
		return checkB;
	} else {
		// otherwise it returns the below
		return "inconsistent results";
	}
}

console.log(checkConsistentOutput(addTwo,6));
