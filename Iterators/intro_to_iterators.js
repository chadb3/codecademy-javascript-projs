// Note: This one was already filled out with lessons to follow.
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
// topics covered
// forEach
// [].map
// [].filter
const a = [5,6,7,8,9,10];
const aTest = a.map(a => {return a+1;})
console.log(aTest);
console.log("Test");
const bTest = a.filter(a=>{return a%2==0});
console.log(bTest);
