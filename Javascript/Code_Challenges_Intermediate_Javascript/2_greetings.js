/*
* Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.
*
* The greeting should take the following format:
*“ Oh powerful [stringElement], we humans offer our unconditional surrender!” 
*/

//cant use for each
const greetDogs=(arrayIn)=>
{
	for(dog in arrayIn)
	{
		console.log(`Oh powerful ${arrayIn[dog]}, we humans offer our unconditional surrender!`);
	}


}


const dogs=["Charlie","Lucy","Cooper","Bear","Teddy","Rosie","Molly","Daisy","Duke","Lola","Rocky"];
greetDogs(dogs);
