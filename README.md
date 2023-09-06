
# JavaScript Warm Up

This repository contains a series of JavaScript files that are designed to help you learn the basics of the language. The files are organized in order of increasing difficulty, so you can start with the basics and work your way up.

0-javascript_is_amazing.js
The first file, 0-javascript_is_amazing.js, simply prints the message "JavaScript is amazing" to the console. This is a simple example of how to use JavaScript to print output to the console.

javascript
Copy code
const myVar = 'JavaScript is amazing';
console.log(myVar); // JavaScript is amazing;
1-multi_languages.js
The second file, 1-multi_languages.js, prints three different messages to the console: "C is fun", "Python is cool", and "JavaScript is amazing". This example shows how to use JavaScript to print multiple lines of output to the console.

javascript
Copy code
let line1 = 'C is fun';
let line2 = 'Python is cool';
let line3 = 'JavaScript is amazing';

console.log(line1);
// C is fun
console.log(line2);
// Python is cool
console.log(line3);
// JavaScript is amazing
6-multi_languages_loop.js
The sixth file, 6-multi_languages_loop.js, uses a for loop to print each element of an array to the console. This example shows how to use JavaScript to iterate over an array and print each element to the console.

javascript
Copy code
const arrayOfStrings = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

for (let i = 0; i < arrayOfStrings.length; i++) {
  console.log(arrayOfStrings[i]);
}
12-object.js
The twelfth file, 12-object.js, creates a JavaScript object and then prints the object to the console. This example shows how to use JavaScript to create an object and print it to the console.

javascript
Copy code
#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
console.log(myObject);

let value = 89; //update value