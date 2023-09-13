 ## JavaScript Advanced Concepts

This repository contains a series of JavaScript files that demonstrate advanced concepts in the language. Each file is accompanied by a detailed explanation of the code, making it easy for junior developers to understand.

### 0-welcome.js

The `welcome.js` file defines a function called `welcome` that takes two parameters, `firstName` and `lastName`, and displays a welcome message to the user. The function also defines a nested function called `displayFullName` that displays the user's full name.

```javascript
//function named welcome
function welcome(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    // function to display full name
    function displayFullName() {
      alert ('welcome ' + fullName +'!'); 


    }


    displayFullName();
}
```

### 1-nested_functions.js

The `nested_functions.js` file defines a global variable called `globalVariable` and a function called `outer`. The `outer` function alerts the value of `globalVariable` and then defines a nested function called `inner`. The `inner` function alerts the value of `globalVariable` and a local variable called `course`. The `inner` function also defines a nested function called `inception` that alerts the value of `globalVariable`, `course`, and a local variable called `exclamation`.

```javascript
// Create a global variable
var globalVariable = "Welcome";

// Define the outer function
function outer() {
    // Alert the content of globalVariable
    alert(globalVariable);

    // Create a variable named course
    var course = "Holberton";

    // Define the inner function
    function inner() {
        // Alert the content of globalVariable and course (concatenated)
        alert(globalVariable + " " + course);

        // Create a variable named exclamation
        var exclamation = "!"

        // Define the inception function
        function inception() {
            // Alert the content of globalVariable, course, and exclamation (concatenated)
            alert(globalVariable + " " + course + exclamation);
        }

        // Call the inception function
        inception();
    }

    // Call the inner function
    inner();
}

// Call the outer function
outer();

// Call the inner function within outer
outer();

// Call the inception function within inner
//
