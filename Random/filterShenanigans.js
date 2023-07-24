// This is my testing grounds for the filter "challenge"
// it was easier then I thought it was just difficult managing nested brackets.
// I tried to just use node in the console but it was getting hard manigin all the brackets. 
//  
a=["a","b","c"]
b=["d","e","c"]
//d=a.filter(ele=>{for(i=0;i<b.length;i++){console.log(i);return ele===b[i]}})
//d=a.filter(
//element=>{for(i=0;i<b.length;i++){console.log(i);if(b[i]===element){return element}}});
//console.log(d);


d=a.filter(element=>{for(i=0;i<b.length;i++){if(b[i]===element){return element}}});
console.log(d);
e=a.filter(elem=>{if(b.includes(elem)){return elem}})
console.log(e);
