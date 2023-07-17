const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal=animals.findIndex(animal=>{if(animal==="elephant"){return animal;}});
console.log(foundAnimal);
//starts with s
const startsWithS = animals.findIndex(animal=>{if(animal[0]==='s'){return animal;}});
console.log(animals[startsWithS]);
// note this does not work as intended. I am working on it.
// my extra test to count the number of vowles in animals array
const vowles = "aeiou";
let animalVowles = []
//loop through animals
//note: this might not be the best way to use this but it works and I am trying to use it in other ways, and for practice.
//a forEach might work better for this. note that strings can't use findIndex only indexOf, and index Of
//only returns the first instance, so I would need to do some fancy substring work to get indexOf to work in a way similar to
//findIndex
animals.findIndex(
animal=>
{
	for(let j=0;j<animal.length;j++)
	{
		for(let i =0;i<vowles.length;i++)
		{
			if(animal[j]===vowles[i])
			{
				// Debug console.logs
				//console.log(animal);
				//console.log("hit");
				animalVowles.push(vowles[i]);
			}	
		}		
	}

}
);
console.log(`number of vowles in \"animals\": ${animalVowles.length}`);
