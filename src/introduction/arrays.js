const numbers = [4, 10, 11, 45, 25, 10, 20];
const nestedArrays = [1, 2, 3, [1, 2, 3]];

numbers.at(1); // Return the value of the given index
numbers.push(10); // Add 10 at the end & returns the length
numbers.pop(); // Remove and return the last element
numbers.fill(1); // Fill every element and return the array
numbers.shift(); // Remove the first element of the array
numbers.unshift(5); // Add 5 at the beginning and return 5
numbers.reverse(); // Reverse an array and returns it
numbers.includes(2); // Return boolean based on the argument
numbers.map((n) => n * 2); // Map the current array to a new one
numbers.filter((n) => n > 2); // Return the filtered array
numbers.find((n) => n > 2); // Return 3 because it is the first match
numbers.every((n) => n > 0); // Checks if all values pass a test
numbers.findIndex((n) => n === 2); // Return index
numbers.reduce((prev, curr) => prev + curr, 0); // Return 10
numbers.toString(); // Stringify an array
numbers.join("-"); // Join the numbers with the given arg
numbers.splice(1, 0, "insert"); // Insert at index 1
numbers.splice(2, 1, "replace"); // Replace 1 element at index 2
numbers.slice(1, 4); // Return [2,3,4]
numbers.sort(); // Sort string alphabetically
numbers.sort((a, b) => a - b); // Numeric sort
numbers.sort((a, b) => b - a); // Numeric descending sort
numbers.sort(() => Math.random() - 0.5); // Random sort
numbers.concat([7, 7, 7]); // Concatenate two arrays in a new one
delete numbers[0]; // Delete index 0 better use pop and shift
Math.max.apply(null, numbers); // Find the highest number
Math.min.apply(null, numbers); // find the lowest number
nestedArrays.flat(); // Return [1,2,3,1,2,3]
