let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
// Debug/Test Print of storyWords. Note: lots of words...
//console.log(storyWords);
let count = 0;
storyWords.forEach(word=>{count=count+1;});
console.log(`word count: ${count}`);
// best practice way
// storyWords=storyWords.filter(word=>word!=unnecessaryWord);
// did it this way for fun (I won't do it this way anymore unless asked)
storyWords=storyWords.filter(function(word){return word!=unnecessaryWord;});
// note I spent a bunch of time debugging the above before I realized that I spelt storyWords as storywords...
// most of my "errors" in these lessons are related to spelling variables "wrong"...
storyWords=storyWords.map(word=>{if(word===misspelledWord){return "beautiful";}else{return word}});
badWordIndex=storyWords.findIndex(word=>word===badWord);
console.log(`index of bad word: ${badWordIndex}`);
storyWords[badWordIndex]="really"
const lengthCheck = storyWords.every(word=>{word.length>=10});
console.log(`Doesn't have words shorter then 10 characters: ${lengthCheck}`);
// Note: I spent too much time on this step.
// I did not realize that it said to MANUALLY replace the long words
// I should have been tipped off when some of the long words are needed like "Lighthouse"... and the instructions did not say anything about those words.
console.log("WORD : INDEX")
storyWords.filter(word=>{if(word.length>=10){console.log(`${word} (${word.length}) : ${storyWords.indexOf(word)}`)}});
/*
* WORD         : INDEX
* Lighthouse   : 94
* Washington   : 102
* breathtaking : 111
* Greenbrook   : 134
* Sanctuary,   : 136
* surprising   : 151
* can replace index: 111 and 151
*/
storyWords[111]= "gorious";
storyWords[151] = "stunning";
console.log("\n"+storyWords.join(' '));
