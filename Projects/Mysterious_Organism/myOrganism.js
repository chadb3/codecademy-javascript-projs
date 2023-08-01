// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}



const PAequorFactory=(numIn, arrOfFifteenBases)=>
{

return {specimenNum: numIn, dna:arrOfFifteenBases, 
mutate()
{ 
 // Debug Print
 // console.log("hit")
 // so this will select a random index.
 // if that index must change from what it is.
 const dnaBases = ['A', 'T', 'C', 'G']
 const selectedBase=Math.floor(Math.random() * 15)
 // Debug Print 2
 // console.log(`index: ${selectedBase}`);
 // console.log(this.dna[selectedBase]);
 const theseDNABases = dnaBases.filter(base => { if(base!==this.dna[selectedBase]){return base}})
 // debug print
 // console.log(theseDNABases);
 const newDnaIndex = Math.floor(Math.random()*3);
 // debug print should 0,1,2
 // console.log(newDnaIndex)
 this.dna[selectedBase]=theseDNABases[newDnaIndex]; 
},
compareDNA(PAequor)
{
 // start compareDNA
 let matchHit=0;
 for(let i=0;i<15;i++)
 {
  if(this.dna[i]===PAequor.dna[i])
  {
   matchHit=matchHit+1;
  }
 }
 //(1/3*100).toFixed(2) = 33.33
 console.log(`specimen #${this.specimenNum} and specimen #${PAequor.specimenNum} have ${(Math.round((matchHit/15)*100))}% DNA in common`);
 // No Return...
 // end compareDNA
},
willLikelySurvive()
{
 // start willLikelySurvive
 let countC=0;
 let countG=0;
 for(let i =0;i<this.dna.length;i++)
 {
  if(this.dna[i]==='C'/*||this.dna[i]==="G"*/)
  {
   countC=countC+1;
  } else if(this.dna[i]==='G'){
 countG=countG+1;
 }
}
  const resultC=countC/15;
  const resultG=countG/15;
  // debug print
  // console.log(countCandG/15);
  if(resultC>=.60||resultG>=.60){
    return true;
  } else{return false;}
 // end willLikelySurvive
}
};
};



// debug print
// console.log(mockUpStrand());
//console.log(`Test DNA Mockup: ${PAequorFactory(1,mockUpStrand().toString)}`)
//const myFirstDebugDNAObject=PAequorFactory(1,mockUpStrand());
//const mySecondDebugDNAObject=PAequorFactory(2,mockUpStrand());
// debug print
//console.log(myFirstDebugDNAObject);
//for(let i =0;i<500;i++)
//{
//myFirstDebugDNAObject.mutate();
//}
//console.log(myFirstDebugDNAObject);
//myFirstDebugDNAObject.compareDNA(mySecondDebugDNAObject);
//console.log(`likley Survive: ${myFirstDebugDNAObject.willLikelySurvive()}`);
let loopConditional=true;
let count=1;
let arrOfSurvivors=[]
//let thes= {}
while(/*loopConditional*/arrOfSurvivors.length<30)
{
 tmp=PAequorFactory(count,mockUpStrand());
 if(tmp.willLikelySurvive()===true){ count++; loopConditional=false;arrOfSurvivors.push(tmp);/*thes=tmp*/}
 else{count+=1}


}
//console.log(thes);
//console.log(arrOfSurvivors.length);
console.log(arrOfSurvivors);
console.log("END!");
