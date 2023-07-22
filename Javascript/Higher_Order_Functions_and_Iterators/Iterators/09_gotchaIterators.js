// I called this one a gotcha as the "lessons" only covered
// this in a written part. And we were not asked to implement it until the challenges.
//
// In this we call the function haha without passing an element.
// to do this, the forEach (and the other iterators) are smart enough to pass it implicitly
// calling arrIn.forEach(haha) automatically passes the element to the function.

const arr1=[1,2,3,4,5]

function haha(element){
	console.log(`haha ${element}`);
}

const forEachHaHa=(arrIn)=>
{
	arrIn.forEach(haha);

}
forEachHaHa(arr1);
