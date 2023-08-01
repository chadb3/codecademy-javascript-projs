// last of the challenges 
// appears I need funciton to return a new pet object
// need getters and setters
// need
// name: string
// breed: string
// weight: int
// need methods to communicate()
// need method to increase weight 

const petFactory=(name,breed,weight)=>
{
 const obj= {name:name,breed:breed,weight:weight}
obj.name=name;
return obj;
}

console.log(a=petFactory("Cheese","Cat",10))
console.log(a.name);

const advancedPetFactory=(name,breed,weight)=>
{
let retObj= {
set name(name){this._name=name;},
get name(){return this._name;},
set breed(breed){this._breed=breed;},
get breed(){return this._breed;},
set weight(weight){this._weight=Number(weight);},
get weight(){return this._weight;},
 speak(){ return "ruff! ruff!";},
 eatTooManyTreats(){this._weight+=1;}
};
retObj.name=name;
retObj.breed=breed;
retObj.weight=weight;
 return retObj;
}

console.log(k=advancedPetFactory("Hector","French Bull Dog","20"));
console.log(k.speak());
console.log(k.weight);
console.log(k.eatTooManyTreats());
console.log(k.weight);
