const convertToBaby=(arrIn)=>
{
	// see below, as they are calling console log on the function it is expected to return the/an array.
	let retArray=[];
	for(baby in arrIn)
	{
		retArray.push(`baby ${arrIn[baby]}`);
	}
	// while we can modify the old array, this one calls for a new one to be returned (this is so the way they want to console.log it works).
	return retArray;
}


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 


// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
// Note this needs to return a NEW ARRAY
