// Write your code here:
const reverseArray=arrIn=>{
	//console.log("hit");
	if(Array.isArray(arrIn)){
	// length of arrIn
	const arrLen=arrIn.length;
	// last index of arrIn
	const lastIndex=arrLen-1;
	// only need to go half way (otherwise we undo our work).
	for(let i=0;i<lastIndex/2;i++)
	{	
		tmpVal=arrIn[i];
		arrIn[i]=arrIn[lastIndex-i];
		arrIn[lastIndex-i]=tmpVal;
	}
		// note the challenge has us return the array even though arrays are passed
		// by reference and the original array is modified. 
		// this is so the log statement works. (without it, it prints undefined)
		return arrIn;
	}else{console.log("Please try to input an array.\nsomething like: [1,2,3]."); return [arrIn];
}

}





// When you're ready to test your code, uncomment the below and run:
 
const sentence = ['sense.','make', 'all', 'will', 'This'];
// works
console.log(reverseArray(sentence))
// note that sentence has been modified
console.log(sentence); 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

//reverseArray(['a','b','c']);

