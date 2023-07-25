const ve = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const pD = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
// poorly worded question
// wow it works and is simple
const dE=(arrIn)=>{
	arrIn.forEach(i=>pD(i));
};
dE(ve);
console.log("\nDeny everything part 2: how they want it done");
const dE2=(arrIn)=>{arrIn.forEach(pD)};
dE2(ve);
// this one was confusing as you wouldn't use this unless you are deliberately trying to be confusing (they went out of their way to say what not to use...) 
// On the "lecture", this one was on the last part as a gotcha. As they only show it, and never challenge you to use it until now.
// I'll remember this now as I hated this part of the challenge.
// I'll try to force myself to read the lectures and have a separate project for them to account for future gotchas.  
/*
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);*/

// but wait theres more
// I don't beleve it folks
// they are asking for a new one called 
// acceptEverything, and get this.
// are you ready.
// it's users choice!
// why wasn't this one first?
/*(console.log("Now I get to accept everything the way I want");
function acceptEverything(arrIn){
	for(element in arrIn){
	{
	console.log(`Ok, I guess I will eat some ${arrIn[element]}.`);
	}
}
acceptEverything(ve);*/
//above didn't work for some reason. ahh I see it now an extra { after the "arraIn){" in the for loop
console.log("\nfinal part");
//console.log(ve);
function ac(arrIn){
 for(element in arrIn)
 {
   console.log(`Ok, I guess I will eat some ${arrIn[element]}.`);
 }
}
ac(ve);
