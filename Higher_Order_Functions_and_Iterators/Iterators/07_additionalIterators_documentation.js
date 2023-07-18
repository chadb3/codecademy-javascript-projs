const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


console.log(words.some(word => {
  return word.length < 6;
}));

const intrestingWords = words.filter(word => {if(word.length>5){return word;}});
console.log(intrestingWords);
// note: console.log(intrestingWords.every(word=>{word.length>5}))
// will produce the result false
// and console.log(intrestingWords.every(word=>word.length>5))
// will produce true
// the difference is the true result lacks {} 
console.log(intrestingWords.every(word=>word.length>5))


