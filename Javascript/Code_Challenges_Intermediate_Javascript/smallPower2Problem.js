const numbers = [5, 3, 9, 30];
// the issue was that the function reused i
// and after i ran through the while loop
// it ==8 and that is greater than arr.length ending the for loop
// if there were more then 8 elements then it might have continued by at least one.
const smallestPowerOfTwo = arr => {
      let results = [];
      // need j to store the solution each loop
      let j=0;
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
	    //debug print
	    console.log(`i: ${i}`);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
