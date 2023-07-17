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
animals.findIndex(
animal=>
{
	for(let i =0;i<vowles.length;i++)
	{
		if(animal.includes(vowles[i]))
		{
			console.log(animal);
			//console.log("hit");
			animalVowles.push(vowles[i]);
			
		}
	}
}
);
console.log(`number of vowles in \"animals\": ${animalVowles.length}`);
