let userName="CHAD";
userName !== ""? console.log(`Hello, ${userName}!`): console.log("Hello!");
const userQuestion = "what is the question?";
console.log(`${userQuestion}`);
let randomNumber = Math.floor(Math.random()*8);
//console.log(randomNumber);
switch (randomNumber){
 case 0:
  console.log('It is certain');
  break; 
case 1:
  console.log("It is decidedly so");
  break;
case 2:
  console.log("Reply hazy try again");
  break;
case 3:
  console.log("Cannot predict now");
  break;
case 4:
  console.log("Do not count on it");
  break;
case 5:
  console.log("My sources say no");
  break;
case 6:
  console.log("Outook not so good");
  break;
case 7:
  console.log("signs point to yes");
  break;
default:
  console.log("error");
  break
}
