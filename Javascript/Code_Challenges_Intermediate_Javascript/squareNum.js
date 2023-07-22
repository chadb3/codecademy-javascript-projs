// write a function to squre nums that
// takes in an array of numbers
// needs to use .map
// returns a new array with the square of each element
const nums = [2, 7, 9, 171, 52, 33, 14]

const toSqr = num => num * num
const sqN=(arrIn)=>
{
	// see I can learn this
	// this in reference to just calling toSquare
	// instead of doing it this way (note added +1 to make sure it was working)
	// const retArray=arrIn.map(num=>{return toSqr(num)+1;});
	const retArray=arrIn.map(toSqr);
	return retArray;
};
console.log(sqN(nums));

