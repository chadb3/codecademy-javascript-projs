const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
// this is from the lesson modified for fun
fruits.forEach(a=>console.log(`I want to throw a ${a}`));

const numbers = [10,9,8,7,6,5,4,3,2,1,0]
console.log("\n\n");
// this is my own practice to see if I could do this...
numbers.forEach(num=>numbers[numbers.indexOf(num)]=num+num);
console.log(numbers);
//testing to see if num is a reference to its place in the array
//causes no change
numbers.forEach(num=>num=num*2);
console.log(numbers);
//additional test - function like forEach
//this changes the value of num but not inside the numbers array
numbers.forEach(num=>{num=(num+num)*2;console.log(num)});
// Prints the original numbers
console.log(numbers);
const lastTest=(arrIn)=>{
	arrIn[0]=10000;
	return "called lastTest to set index 0 to 10000";
}
console.log(lastTest(numbers));
console.log(numbers);
//this was use to prove that arrays are passed by reference
//but cannot be modified with a foreach as those are values. 
const returnTest=["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"];
const result = returnTest.forEach(day=>{console.log(day[0]);return day[1];});
console.log(`result (forEach returns) undefined: ${result}\n`);
