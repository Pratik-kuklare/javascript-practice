const fruits = ['Apple', 'Banana', 'cherry'];
console.log(fruits);

// adding
fruits.push('Watermelon');  // end
console.log(fruits); // Apple, Banana, cherry, Watermelon

fruits.unshift('Kiwi');  // start
console.log(fruits);  // Kiwi, Apple, Banana, cherry, Watermelon

// Removing
fruits.pop(); // removes last
console.log(fruits);  // Kiwi, Apple, Banana, cherry

fruits.shift(); // removes first
console.log(fruits); // Apple, Banana, cherry