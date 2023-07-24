// this will return elements that are present in both arrays.
// I must use the .filter
// I assume that there is another curveball here.
// after reviewing the hint after my solution in retMatches2 PASSED.
// they were looking for a more simple solution like
const retMatches=(arr1,arr2)=>
{
 // based off the hint they would like something like 
 const retarr=arr1.filter(elem=>{if(arr2.includes(elem)){return elem}});
 return retarr;
}
const retMatches2=(arr1,arr2)=>
{
	const retArray=arr1.filter(element=>{for(let i=0;i<arr2.length;i++){if(element===arr2[i]){return element}}})
return retArray;
}
let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
console.log(retMatches(arr1,arr2));
console.log("my original submitted way that passed");
console.log(retMatches2(arr1,arr2));
