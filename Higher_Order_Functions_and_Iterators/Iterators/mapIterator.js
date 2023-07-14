//This covers the user of the .map iterator
//
// Note this works in the way I was trying to get the forEach iterator to work
// but this should work without the workaround. 
//
//
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(fChar=>{return fChar[0]});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num=>{return num/100});
console.log(smallNumbers);

// trying to modify bigNumbers2 using map
// making a new variable as bigNumbers is a const
console.log("\nTrying some things");
let bigNumbers2=bigNumbers;
// trying to change the values of bigNumbers2
bigNumbers2=bigNumbers2.map(num=>{return num*101});
// it was successful 
console.log(bigNumbers2);
