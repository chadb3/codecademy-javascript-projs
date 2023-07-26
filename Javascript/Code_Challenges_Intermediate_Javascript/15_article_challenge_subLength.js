const subLength=(strIn,letterIn)=>
{
 //there is lastIndexOf
 // and indexOf
 let letterCount=0;
 for(let i=0;i<strIn.length;i++)
 {
   if(strIn[i]===letterIn)
   {
     letterCount+=1;
   }
 } 
 if(letterCount==0||letterCount>2||letterCount<2)
 {
   return 0
 }else{
console.log("debug print else hit")
//+1 as we are dealing with indexes
 return (strIn.lastIndexOf(letterIn)-strIn.indexOf(letterIn)+1);
}
}
console.log(subLength("scientist","i"));
console.log(subLength('Saturday', 'a')); // returns 6
