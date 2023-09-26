// kelvin will always equal 293 so it is a const.
// it will be used in other calcuations.
const kelvin =293;
// celsius is the same as kelvin - 273.
// it is a funky euro unit of measure. 
const celsius = kelvin-273;
// best unit
const fahrenheit = Math.floor((celsius*(9/5)+32))
const newton = Math.floor(celsius*(33/100));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`Newton: ${newton}!`);
