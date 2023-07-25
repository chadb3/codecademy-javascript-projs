// in this project, I will return the an object array with the objects sorted by the "numTeeth" value in acending order

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
// this needs to pass
// console.log(orderByTeeth(speciesArray))
// in other words it needs to return a sorted array
const orderByTeeth=(arrIn)=>
{
	return arrIn.sort((l,r)=>l.numTeeth-r.numTeeth);
}
console.log(orderByTeeth(speciesArray));
