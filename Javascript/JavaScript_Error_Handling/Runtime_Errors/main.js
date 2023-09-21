console.log("Note: This program is meant to fail\n"); 
console.log('This message will be printed to the console.\n');

function throwError () {
  return notDefinedVar;
}

throwError();

console.log('Because of the error, this will not printed!');

