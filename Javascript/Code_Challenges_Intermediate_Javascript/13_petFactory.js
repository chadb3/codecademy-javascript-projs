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
 const obj= {name:name,breed:breed,weight:weight, get name(){return this._name;}, set name(name){this._name=name;}}
obj.name=name;
return obj;
}

console.log(a=petFactory("Cheese","Cat",10))
console.log(a.name);

