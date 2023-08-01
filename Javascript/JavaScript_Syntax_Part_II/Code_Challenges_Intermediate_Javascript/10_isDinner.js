// This will take in an array of objects called dinner
// name: name of the food
// source: the type
// I think they want plant based things returned (source==="plant") 
// This was covered in the "addtional iterators" lesson
//
const isTheDinnerVegan=(arrIn)=>{
	//arrIn.forEach((l,r)=>console.log(`l:${l}\nr:${r}`))
	return(arrIn.every(obj=>obj['source']==="plant"))
}




const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(`This should return (false): ${isTheDinnerVegan(dinner)}`);

// this should be true
const dinner2 = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'},{name:"chips",source:"plant"}];
console.log(`This should return (true): ${isTheDinnerVegan(dinner2)}`);
