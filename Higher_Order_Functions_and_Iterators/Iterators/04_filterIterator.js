// This has to do with array.filter
// this makes a new array from values of the old array that pass the "test"

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
console.log(`\"randomNumbers\": ${randomNumbers}`);
const smallNumbers=randomNumbers.filter(num=>{return num<250});
console.log(`smallNumbers: ${smallNumbers}`);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const favlongWords=favoriteWords.filter(word=>{return word.length>7});
console.log(favlongWords);


// some additional testing
const mixedRandom = [[1,2], [2,4], ["Testing","Testing"], ["5","500",23], ["Watch","this",100]];
console.log(`\nTrying something with forEach and filter\nmixedRandom: ${mixedRandom}\ncreating empty nums and strings array\n`);
let nums =[];
let strings =[];
//the below works but I forgot to use filter...
//mixedRandom.forEach(element=>{if(Number.isInteger(element)){nums.push(element)}else{strings.push(element)}});
//mixedRandom.forEach(element=>{element.filter(ele=>{if(Number.isInteger(ele)){nums.push(ele)}else{strings.push(elet)}}}));
// The below works but it was a pain to type...
mixedRandom.forEach(element=>{element.filter(e=>{if(Number.isInteger(e)){nums.push(e)}else{strings.push(e)}})})
console.log(`\n\n\ndoes it work?\nnums: ${nums}\nstrings: ${strings}`);
