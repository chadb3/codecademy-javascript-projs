const doTheThing=(arrIn)=>
{
	let retArray=[]
	for(thing in arrIn)
	{
	
		retArray.push(`Funny ${arrIn[thing]}`);

	}
	return retArray;
}


const a = ["doggie", "kitty", "thing", "joke"];
let k =[];
console.log(k=doTheThing(a));
console.log(a);
console.log(k);
