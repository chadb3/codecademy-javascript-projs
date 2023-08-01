// should return a new array with
// the inputArray's elements change
const shoutHello=(arrayOfStrings)=>{
 const retArr=arrayOfStrings.map(element=>{return element.toUpperCase()+"!";});
return retArr
}
console.log(shoutHello(["hello","hi","ola"]));
