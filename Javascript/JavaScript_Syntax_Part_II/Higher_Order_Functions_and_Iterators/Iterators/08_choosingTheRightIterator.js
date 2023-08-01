// I changed the array values for fun 
// Note: in the 3rd objective you use the list to print a word that appears to be codecademy
// It will not print codecademy here, but the solution should be correct. 
const cities = ['Orlando', 'Los Angles', 'Osaka', 'Chennai', 'Accra', 'Houston', 'Eskisehir', 'Medellin', 'Yokohama'];
// 1
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// this one is easy

// 2
const longCities = cities.filter(city => city.length > 7);
// filter works as "words" that meet the criteria are added to the new array
// map is not appropriate as we are checking the lenght and it returns a bool

// debug print 2
console.log(longCities);
// 3
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "Cx");
// here reduce is used
// acc = is the accumulation of the string being built
// currVal is the current word
// returns acc+currVal[0] and Cx is appended to the front 
// note: the "Cx" is the first element 

// debug print 3
// note this might print the wrong thing.
// supposed to print codecademy
console.log(word);


const nums = [9, 52, 73, 250, 250, 522, 1001];

// 04
// map returns a new array
const smallerNums = nums.map(num => num - 5);

// debug print 4
console.log(smallerNums);

// 05
// every returns a bool
const printVal=nums.every(num => num < 0);
console.log(printVal);
