// in this one, I will write a function to sortNumbers
// This functions template.
// called sortNumbers(arrIn)
// returns: sorted array (in descending order)
// For some reason they are wanting us to use the .sort method
// oh but the numbers need to be sorted in reverse order
// no restrictions on .reverse()? (this is when I found it was a challenge (trick) question.)
// "Sorting array of objects" section of 
// Array.prototype.sort()
// Mozilla documentation 
// what tipped me off was the "sort by value" section
// I just had to play with it a little bit to get what I wanted (j-i) instead of (i-j)
//
// It was a trick question
// Note: they didn't get me this time!
const sortNumbers=(arrIn)=>
{
	return arrIn.sort((i,j)=>j-i);
}
console.log(sortNumbers([1937,1921,1918,1977,1914,2009,1919,1982,1942,1928,1923,1993,2014,1953]))
console.log("\nSecond Set: ")
console.log(sortNumbers([2015, 1952, 1972, 1914, 1945, 1940, 1978, 2019, 2002, 1907, 1964, 1960, 1937, 1981, 1938, 1989, 1903, 1935, 2021, 1900, 1920, 1925, 1922, 1992, 1998]));
