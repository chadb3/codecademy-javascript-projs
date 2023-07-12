const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};


// isTwoPlusTwo is now just a shorter verison of that long name one.
// Note: the () needs to be removed from the function.
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
//now to invoke
isTwoPlusTwo();
//get name of original function
console.log(isTwoPlusTwo.name);
console.log("\n=== Additional testing below ===\n");
// some additional testing 
console.log("create testFunc which takes in a var to print");
const testFunc = (varIn) =>
{
	console.log(varIn);
};
//The below is allowed 
console.log("const testA = testFunc();");
const testA = testFunc();
console.log("Note: prints undefined as testFunc gets invoked with ()");
// above doesn't work
// it will invoke the testFunc() and return "undefined" 
console.log("const testB = testFunc;");
const testB = testFunc;

console.log("Trying testA(5) will result in a crash");
//testA(5);
//testA will result in a crash
console.log("trying testB(55) will print 55 to the console");
testB(55);
