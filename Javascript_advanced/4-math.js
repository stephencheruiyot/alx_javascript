// Function to create a closure for division
function divideBy(firstNumber) {
     // Return a function that takes a second number and divides it by the first number
    return function(secondNumber) {
        return secondNumber/firstNumber
    };

}

// Function to create a closure for addition
function addBy(firstNumber) {
    // Return a function that takes a second number and adds it to the first number
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };

}

// Create closures using the functions
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
