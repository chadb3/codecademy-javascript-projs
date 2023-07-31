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

return {specimenNum: numIn, dna:arrOfFifteenBases, mutate()
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
}
};
};



// debug print
// console.log(mockUpStrand());
//console.log(`Test DNA Mockup: ${PAequorFactory(1,mockUpStrand().toString)}`)
const myFirstDebugDNAObject=PAequorFactory(1,mockUpStrand());
const mySecondDebugDNAObject=PAequorFactory(2,mockUpStrand());
// debug print
console.log(myFirstDebugDNAObject);
for(let i =0;i<500;i++)
{
myFirstDebugDNAObject.mutate();
}
console.log(myFirstDebugDNAObject);
myFirstDebugDNAObject.compareDNA(mySecondDebugDNAObject);
console.log("end!");
