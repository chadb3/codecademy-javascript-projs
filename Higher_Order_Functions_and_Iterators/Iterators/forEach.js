const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
// this is from the lesson modified for fun
fruits.forEach(a=>console.log(`I want to throw a ${a}`));

const numbers = [10,9,8,7,6,5,4,3,2,1,0]
console.log("\n\n");
// this is my own practice to see if I could do this...
numbers.forEach(num=>numbers[numbers.indexOf(num)]=num+num);
console.log(numbers);
