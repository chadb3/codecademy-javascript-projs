// Reverse Array
// findings:
// I found that if I looped through the whole array I would actually both reverse and "un-reverse" the array (LOL) 
// once I drew it out on paper, I relized that I didn't need to loop through the whole array.
// I found that I needed to only go half way.
// for evens it is easy num/2
// for odds you go until they roughly meet in the middle; (or you can convert it to an int parseInt(oddNumber/2) and it should get the stopping point).
// note: the above words for the evens too. So, no need for a separate if
const reverseArray=arrIn=>{
if(Array.isArray(arrIn)){
	let tmpVal=0;
	// note length corrisponds to the number of elements (not index)
 	const arrLength=arrIn.length;
	const finalIndex=arrLength-1;
	//console.log(arrLength);
	for(let i=0;i<parseInt(arrLength/2);i++){
	//console.log(arrIn[i]);
	tmpVal=arrIn[finalIndex-i];
	arrIn[finalIndex-i]=arrIn[i];
	arrIn[i]=tmpVal;
	//arrIn[i]=123;
	//console.log(arrIn[finalIndex-i]);
	//arrIn[i]=arrIn[finalIndex-i];
	//arrIn[finalIndex-i]=tmpVal1;
	//console.log(`${i}: ${arrIn[i]}`);
	//console.log(arrIn);
	//console.log("i: "+i);
	//console.log("fI-i: "+(finalIndex-i));
	}

}else{return [0];}/*console.log(arrIn);arrIn=[500];*/}
a=[1,2,3,4,5,6,7,8,9]
reverseArray(a);
console.log(a);
b=[1];
reverseArray(b);
console.log(b);
c=[1,2,3];
reverseArray(c);
console.log(c);
d=[1,2];
reverseArray(d);
console.log(d);
