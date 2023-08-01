const groceries=(objList)=>
{
 if(objList.length>1)
{
 let retString =""
 for(item in objList)
 {
   //console.log(objList[item]['item'])
   //console.log(item+" "+objList.length);
   //objList-1
   retString+=objList[item]['item'];
   //console.log(item);
   if(item<(objList.length-2))
   {
    // console.log(item);
     retString+=", ";
   }else if(item==(objList.length-2)){ retString+= " and ";}
   /*if(item<(objList.length-1))
   {
    retString+=" and ";
   }*/
 }
return retString;
}else{return objList[0]["item"];}



}

console.log(groceries( [{item: 'Cheese Balls'}] ));
console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ))
