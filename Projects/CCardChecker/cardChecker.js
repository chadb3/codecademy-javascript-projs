//Challenge Project: Credit Card Checker
// Note mine has lots of print staments so I can see it working.
// the one I uploaded doesn't use any except to check at the end
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// 1. iterate the array right to left
// 2. every other digit * 2; if > 9 then (digit*2)-9; else let it be
// 3. sum the digits of the card
// 4. if sum%10==0 then it is valid (else it is invalid)
// Note: I am guessing that it just wants the array, and not the array of arrays called batch
// return True if valid
// return False if invalid
const validateCred=(arrIn)=>{
let sum=0;
let isOther=false;
for(let i=(arrIn.length-1);i>=0;i--)
{
 if(isOther){
  let tmp=(arrIn[i]*2);
  if(tmp>9){tmp=tmp-9;}
  sum=sum+tmp;
  //console.log(`i: ${i}, arr[i]: ${arrIn[i]}, tmp: ${tmp}`);
  isOther=!isOther;
 }else{sum=sum+arrIn[i];/*console.log("else hit");*/isOther=!isOther;}

}

let isValid=false;
//console.log(sum);
if(sum%10==0){console.log(`Valid Sum: ${sum}`); isValid=true}
else{console.log(`Invalid-Sum: ${sum}`);}
return isValid;
}
validateCred(invalid2);
console.log(invalid2);
validateCred(valid1);
console.log(valid1);
//{ test function
// test function to visualize if it is working or not.
// I will now make a similar function below 
//function testCallValidateCred(arrOfArrsIn){for(arr in arrOfArrsIn){console.log(arrOfArrsIn[arr]);validateCred(arrOfArrsIn[arr]);}}
//testCallValidateCred(batch);
// end test function }

const findInvalidCards=(arrIn)=>{
 let retArr=[];	
 arrIn.forEach(element=>{if(!validateCred(element)){retArr.push(element);}});
 // Debug Print
 // console.log(retArr.length);
 return retArr;
}
const theInvalidCards=findInvalidCards(batch);
const idInvalidCardCompanies=(invalidArrIn)=>
{
 // what is the first digit
 // 3 = a (American Ex)
 // 4 = v
 // 5 = m
 // 6 = d
 // else = "Company not found"
 let arrayOfAllCardCompanies=[]
 invalidArrIn.forEach(cardNumber=>{if(cardNumber[0]===3){arrayOfAllCardCompanies.push("a");}else if(cardNumber[0]===4){arrayOfAllCardCompanies.push("v")}else if(cardNumber[0]===5){arrayOfAllCardCompanies.push("m")}else if(cardNumber[0]===6){arrayOfAllCardCompanies.push("d")}else{arrayOfAllCardCompanies.push("Company not found")}});
 
 //console.log(`len of input array ${invalidArrIn.length}`)
 //console.log(arrayOfAllCardCompanies);
 let retArr=[]
 arrayOfAllCardCompanies.filter(comp=>{
	 if(!retArr.includes(comp))
		{retArr.push(comp)}
	})
		

//console.log(retArr);
return retArr;
}
const listOfCardCompaniesToContact=idInvalidCardCompanies(theInvalidCards);

console.log(listOfCardCompaniesToContact);

const genCardArr=(stringIn)=>
{
 let retArr=[]
 for(let i = 0; i< stringIn.length;i++)
 {
  retArr.push(stringIn[i])
 }

 console.log(retArr);
}

const strIn="4485635836605898"
genCardArr(strIn);
