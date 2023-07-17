// This Random Project was a test to see if I could get all of the indexes of a letter in a string using indexOf
// as indexOf only returns the first instance
// there are easier ways to do this but I wanted to do it with substr and indexOf to prove to myself it is possible
console.log("start of testing");
let a="Testing Testing";
const len = a.length;
let eIndex=[];
let tmpVal =0;
for(let i=0;i<len;i++)
{
	tmpVal=a.substr(i).indexOf("e");
	// above has the next index of e
	// debug print
	//console.log(`tmp: ${tmpVal}\ni: ${i}`);
	if(tmpVal>=0){
		eIndex.push(i+tmpVal);
		i+=tmpVal;
	}
}
console.log(eIndex);
console.log("start testing 2");
let b = "Hope this works";

